from .serializers import OTPVerificationSerializer , OTPRequestSerializer
from .services import request_otp , verify_otp
from rest_framework.views import APIView 
from rest_framework.response import Response
from .exceptions import OTPNotFound , OTPExpired , InvalidOTP , OTPAttemptsExceeded
class RequestOTPCode(APIView):
    # permission_classes = [AllowAny]
    def post(self,request):
        serializer = OTPRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data['phone_number']
        
        result = request_otp(phone_number=phone_number)
        if result['success']  :
            return Response({
                'message' : 'کد با موفقیت  ارسال گردید ',
                'expires_at' : result['expires_at'] 
            }) 
        else : 
            active_code = result['latest_code'].expires_at
            
            return Response({
                'message': ' آخرین کد ارسالی هنوز معتبر است ، لطفا از آن استفاده کنید.', 
                'expires_at' : active_code
            })

class VerifyOTPCode(APIView):
    def post (self,request):
        serializer = OTPVerificationSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data['phone_number']
        code = serializer.validated_data['code']
        
        try: 
            result = verify_otp(phone_number=phone_number , code= code )
            return Response({
                'access' : result['access'],
                'refresh' : result['refresh']
            })
        except OTPNotFound:
            return Response({
                "message": "کد فعالی برای این شماره پیدا نشد. لطفاً ابتدا درخواست کد کنید."
                }, status=400)  
        except OTPExpired :
            return Response({
                "message": "کد وارد شده منقضی شده است. لطفاً کد جدید درخواست کنید."
                }, status=400)
        except InvalidOTP :
            return Response({
                "message": "کد وارد شده صحیح نیست."
                }, status=400)
        except OTPAttemptsExceeded :
            return Response({
                "message": "تعداد تلاش‌های مجاز به پایان رسیده است. لطفاً کد جدید درخواست کنید."
                }, status=400)
