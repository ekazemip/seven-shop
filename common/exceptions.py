from rest_framework.views import exception_handler
from rest_framework.exceptions import ValidationError, NotFound, NotAuthenticated
from common.responses import error_helper


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if isinstance(exc, ValidationError):
        return error_helper(
            message="اطلاعات واردشده معتبر نیست.",
            code = "VALIDATION_ERROR",
            data=exc.detail,
            status_code=exc.status_code
        )
    elif isinstance(exc, NotFound):
        return error_helper(
            message = "اطلاعاتی مشابه خواسته شما پیدا نشد . ",
            code = "NOT_FOUND",
            data=exc.detail,
            status_code=exc.status_code
        )
    elif isinstance(exc, NotAuthenticated):
        return error_helper(
            message="شما وارد/ثبت نام نکرده اید",
            code = "NOT_AUTHENTICATED",
            data=exc.detail,
            status_code=exc.status_code
        )
    else :
        return response