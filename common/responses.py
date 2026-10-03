from rest_framework.response import Response


def success_helper(data, message=None, status_code=200):
    if message is not None:
        return Response(status=status_code, data={"data": data, "message": message})
    else:
        return Response(
            status=status_code,
            data={
                "data": data,
            },
        )


def error_helper(message, code, status_code=400):
    return Response(
        status=status_code, data={"error": {"message": message, "code": code}}
    )
