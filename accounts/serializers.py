from rest_framework import serializers

class OTPRequestSerializer(serializers.Serializer):
    phone_number = serializers.RegexField(r'^09\d{9}$')

class OTPVerificationSerializer(serializers.Serializer):
    phone_number = serializers.RegexField(r'^09\d{9}$')
    code = serializers.RegexField(r'^\d{6}$')
