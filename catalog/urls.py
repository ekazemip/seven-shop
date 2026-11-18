from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CategoryViewSet, BrandViewSet, ProductDetailView, ProductListView

app_name = "catalog"
router = SimpleRouter()
router.register("brands", BrandViewSet, basename="brands")
router.register("categories", CategoryViewSet, basename="categories")
urlpatterns = [
    path("products/", ProductListView.as_view(), name="product-list"),
    path("products/<slug:slug>/", ProductDetailView.as_view(), name="product-detail"),
] + router.urls
