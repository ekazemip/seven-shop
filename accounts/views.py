from django.shortcuts import render
from django import views
from django.shortcuts import redirect ,render
class RequestOTPCode(views.View):
    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('home:home')
        return super().dispatch(request, *args, **kwargs)
    def get (self,request):
        pass
    def post(self,request):
        pass
