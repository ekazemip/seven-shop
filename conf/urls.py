from django.contrib import admin
from django.conf.urls.static import static
from django.urls import include, path
from accounts.views import CustomTokenRefreshView
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("content.urls", namespace="home")),
    path("api/token/refresh/", CustomTokenRefreshView.as_view(), name="token_refresh"),
    path("api/accounts/", include("accounts.urls", namespace="accounts")),
    path("api/catalog/", include("catalog.urls", namespace="catalog")),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
