from rest_framework.response import Response


def success_helper(data, message=None, status_code=200):
    return Response(status=status_code, data={"data": data, "message": message})


def error_helper(message, code, status_code=400, data=None):
    return Response(
        status=status_code,
        data={"error": {"message": message, "code": code, "data": data}},
    )
