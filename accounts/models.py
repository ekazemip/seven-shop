from django.db import models
from django.contrib.auth.models import AbstractBaseUser ,BaseUserManager,PermissionsMixin


class UserManager(BaseUserManager):
    def create_user(self,phone_number , password= None , **extra_fields):
        if not phone_number : 
            raise ValueError('وارد کردن شماره تماس الزامی می باشد  . ')
        user = self.model(phone_number=phone_number,**extra_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user
    def create_superuser(self,phone_number , password=None, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        return self.create_user(phone_number,password,**extra_fields)

class User(AbstractBaseUser,PermissionsMixin):
    phone_number = models.CharField(max_length=11 , unique=True)
    first_name = models.CharField(max_length=50 , blank = True)
    last_name = models.CharField(max_length=50, blank = True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()
    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS =[]
    
    def __str__(self):
        return self.phone_number
    
class OTPCode (models.Model):
    phone_number = models.CharField(max_length=11)
    code = models.CharField(max_length=6)
    is_used = models.BooleanField(default=False)
    expires_at = models.DateTimeField()
    attempts = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        indexes = [models.Index(fields=['phone_number'])]
