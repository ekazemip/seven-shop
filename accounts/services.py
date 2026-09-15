import secrets as scs
from .models import OTPCode , User 
from datetime import timedelta 
from django.utils import timezone
from .exceptions import (
    OTPNotFound,
    OTPExpired,
    InvalidOTP,
    OTPAttemptsExceeded
)

from rest_framework_simplejwt.tokens import RefreshToken

def request_otp(phone_number):
    active_code = OTPCode.objects.filter(phone_number=phone_number,is_used=False,expires_at__gt=timezone.now()).first()

    if  active_code:
        return {
            'latest_code' : active_code,
            'new_code' : None,
            'success' : False
        }
    active_codes= OTPCode.objects.filter(phone_number=phone_number,is_used=False)
    active_codes.update(is_used = True)
    new_code = f"{scs.randbelow(1000000):06d}"
    expires_at = timezone.now() + timedelta(minutes=2)
    OTPCode.objects.create(
        phone_number=phone_number,
        code= new_code,
        expires_at = expires_at
    )
    return {
                'latest_code' : None ,
                'new_code' : new_code ,
                'success' : True ,
                'expires_at' : expires_at
            }

def verify_otp(phone_number, code):

    try:
        otp = OTPCode.objects.get(
            phone_number=phone_number,
            is_used=False
        )
    except OTPCode.DoesNotExist:
        raise OTPNotFound()

    if otp.expires_at < timezone.now():
        otp.is_used = True
        otp.save(update_fields=["is_used"])
        raise OTPExpired()

    if otp.code != code:
        otp.attempts += 1
        if otp.attempts >= 5:
            otp.is_used = True
            otp.save(
                update_fields=["attempts", "is_used"]
            )
            raise OTPAttemptsExceeded()
        otp.save(update_fields=["attempts"])
        raise InvalidOTP()

    otp.is_used = True
    otp.save(update_fields=["is_used"])

    user = User.objects.filter(phone_number=phone_number).first()
    if not user :
        user = User.objects.create_user(phone_number=phone_number)


    refresh = RefreshToken.for_user(user)


    return {
        "user": user,
        "refresh": str(refresh),
        "access": str(refresh.access_token)
    }
