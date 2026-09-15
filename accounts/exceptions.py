class AuthenticationError(Exception):
    """Base exception for authentication errors."""
    pass


class OTPNotFound(AuthenticationError):
    """No active OTP was found for this phone number."""
    pass


class InvalidOTP(AuthenticationError):
    """The provided OTP code is invalid."""
    pass


class OTPExpired(AuthenticationError):
    """The OTP code has expired."""
    pass


class OTPAttemptsExceeded(AuthenticationError):
    """The maximum number of OTP attempts has been exceeded."""
    pass


class ActiveOTPExists(AuthenticationError):
    """An active OTP already exists for this phone number."""
    pass
