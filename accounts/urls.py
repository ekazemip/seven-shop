from django.urls import path
from . import views

app_name = "accounts"
urlpatterns = [
    path("otp/request/", views.RequestOTPCode.as_view(), name="request_otp"),
    path("otp/verify/", views.VerifyOTPCode.as_view(), name="verify_otp"),
]
