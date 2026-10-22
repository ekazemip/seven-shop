from rest_framework.views import APIView

from common.responses import error_helper, success_helper

from .exceptions import InvalidOTP, OTPAttemptsExceeded, OTPExpired, OTPNotFound
from .serializers import OTPRequestSerializer, OTPVerificationSerializer
from .services import request_otp, verify_otp


class RequestOTPCode(APIView):
    # permission_classes = [AllowAny]
    def post(self, request):
        serializer = OTPRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data["phone_number"]

        result = request_otp(phone_number=phone_number)
        if result["success"]:
            return success_helper(
                data={
                    "expires_at": result["expires_at"],
                },
                message="کد با موفقیت  ارسال گردید ",
            )
        else:
            active_code = result["latest_code"].expires_at

            return error_helper(
                message=" آخرین کد ارسالی هنوز معتبر است ، لطفا از آن استفاده کنید.",
                code="FOUND_ACTIVE_CODE",
                data={"expires_at": active_code} ,
            )


class VerifyOTPCode(APIView):
    def post(self, request):
        serializer = OTPVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data["phone_number"]
        code = serializer.validated_data["code"]

        try:
            result = verify_otp(phone_number=phone_number, code=code)
            return success_helper(
                data={"access": result["access"], "refresh": result["refresh"]}
            )
        except OTPNotFound:
            return error_helper(
                message="کد فعالی برای این شماره پیدا نشد. لطفاً ابتدا درخواست کد کنید.",
                code="OTP_NOT_FOUND",
                status_code=400,
            )
        except OTPExpired:
            return error_helper(
                message="کد وارد شده منقضی شده است. لطفاً کد جدید درخواست کنید.",
                code="OTP_EXPIRED",
                status_code=400,
            )
        except InvalidOTP:
            return error_helper(
                message="کد وارد شده صحیح نیست.", code="OTP_INVALID", status_code=400
            )
        except OTPAttemptsExceeded:
            return error_helper(
                message="تعداد تلاش‌های مجاز به پایان رسیده است. لطفاً کد جدید درخواست کنید.",
                code="OTP_MORE_ATTEMPTS",
                status_code=400,
            )
