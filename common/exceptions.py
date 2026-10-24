from rest_framework.views import exception_handler
from rest_framework.exceptions import (
    Throttled,
    ValidationError,
    NotFound,
    NotAuthenticated,
)
from common.responses import error_helper


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if isinstance(exc, ValidationError):
        return error_helper(
            message="اطلاعات واردشده معتبر نیست.",
            code="VALIDATION_ERROR",
            data=exc.detail,
            status_code=exc.status_code,
        )
    elif isinstance(exc, Throttled):
        new_response = error_helper(
            message="تعداد درخواست‌ها بیش از حد مجاز است. ",
            code="THROTTLED",
            data={"detail": exc.detail, "retry_after": exc.wait},
            status_code=exc.status_code,
        )
        new_response["Retry-after"] = response.get("Retry-after")
        return new_response
    elif isinstance(exc, NotFound):
        return error_helper(
            message="اطلاعاتی مشابه خواسته شما پیدا نشد . ",
            code="NOT_FOUND",
            data=exc.detail,
            status_code=exc.status_code,
        )
    elif isinstance(exc, NotAuthenticated):
        return error_helper(
            message="شما وارد/ثبت نام نکرده اید",
            code="NOT_AUTHENTICATED",
            data=exc.detail,
            status_code=exc.status_code,
        )
    else:
        return response
