from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from .models import (
    Brand,
    Category,
    Product,
    ProductVariant,
    ProductImage,
    ProductAttributeValue,
    VariantValue,
)
from .serializers import (
    BrandSerializer,
    CategorySerializer,
    ProductListSerializer,
    ProductDetailSerializer,
)
from rest_framework.viewsets import ReadOnlyModelViewSet
from common.responses import success_helper
from django.db.models import Min, Q, Exists, OuterRef, Prefetch
from django.db.models.functions import Coalesce


class ProductListView(ListAPIView):
    serializer_class = ProductListSerializer
    permission_classes = [AllowAny]
    final_price = Coalesce("variants__discount_price", "variants__base_price")
    queryset = (
        Product.objects.filter(is_active=True)
        .order_by("id")
        .select_related("brand")
        .prefetch_related(
            Prefetch(
                "images",
                queryset=ProductImage.objects.order_by("id"),
                to_attr="listing_images",
            )
        )
        .annotate(
            display_price=Min(final_price, filter=Q(variants__stock__gt=0)),
            is_in_stock=Exists(
                ProductVariant.objects.filter(product_id=OuterRef("pk"), stock__gt=0)
            ),
        )
    )


class BrandViewSet(ReadOnlyModelViewSet):
    queryset = Brand.objects.filter(is_active=True).order_by("id")
    serializer_class = BrandSerializer
    lookup_field = "slug"
    permission_classes = [AllowAny]

    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return success_helper(data=response.data, status_code=response.status_code)


class CategoryViewSet(ReadOnlyModelViewSet):
    queryset = (
        Category.objects.filter(is_active=True).order_by("id").select_related("parent")
    )
    serializer_class = CategorySerializer
    lookup_field = "slug"
    permission_classes = [AllowAny]

    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return success_helper(data=response.data, status_code=response.status_code)


class ProductDetailView(RetrieveAPIView):
    queryset = (
        Product.objects.filter(is_active=True)
        .select_related("brand", "category__parent")
        .prefetch_related(
            Prefetch(
                "images",
                queryset=ProductImage.objects.filter(image__isnull=False)
                .exclude(image="")
                .order_by("id")
                .select_related("variant"),
            ),
            Prefetch(
                "attribute_values",
                queryset=ProductAttributeValue.objects.select_related(
                    "attribute"
                ).order_by("attribute_id", "id"),
            ),
            Prefetch(
                "variants",
                queryset=ProductVariant.objects.order_by("id").prefetch_related(
                    Prefetch(
                        "values",
                        VariantValue.objects.select_related("attribute").order_by(
                            "attribute_id", "id"
                        ),
                    )
                ),
            ),
        )
    )
    serializer_class = ProductDetailSerializer
    lookup_field = "slug"
    permission_classes = [AllowAny]

    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return success_helper(data=response.data, status_code=response.status_code)
