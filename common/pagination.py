from rest_framework.pagination import PageNumberPagination
from .responses import success_helper


class StandardPagination(PageNumberPagination):
    page_size = 20
    max_page_size = 50
    page_size_query_param = "page_size"

    def get_paginated_response(self, data):
        pagination_data = {
            "count": self.page.paginator.count,
            "next": self.get_next_link(),
            "previous": self.get_previous_link(),
            "results": data,
        }
        return success_helper(status_code=200, data=pagination_data)
