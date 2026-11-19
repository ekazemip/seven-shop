from django.db.models import Q, Min, OuterRef, F, Exists, Prefetch
from django.db.models.functions import Coalesce
from django.utils import timezone
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from catalog.models import Category, ProductImage, ProductVariant, Product
from catalog.serializers import (
    CategorySerializer,
    ProductListSerializer,
    BrandSerializer,
)
from common.responses import success_helper
from content.models import Banner, FAQItem
from content.serializers import BannerSerializer, FAQItemSerializer


# Create your views here.
class HomeView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        now = timezone.now()
        banners = (
            Banner.objects.filter(is_active=True)
            .filter(Q(starts_at__isnull=True) | Q(starts_at__lte=now))
            .filter(Q(ends_at__isnull=True) | Q(ends_at__gt=now))
        )
        faqs = FAQItem.objects.filter(is_active=True)
        categories = (
            Category.objects.filter(is_active=True)
            .order_by("id")
            .select_related("parent")
        )
        discounted_variants = ProductVariant.objects.filter(
            product_id=OuterRef("pk"),
            discount_price__isnull=False,
            stock__gt=0,
            discount_price__lt=F("base_price"),
        )
        final_price = Coalesce("variants__discount_price", "variants__base_price")

        discounted_products = (
            Product.objects.filter(is_active=True)
            .filter(Exists(discounted_variants))
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
                    ProductVariant.objects.filter(
                        product_id=OuterRef("pk"), stock__gt=0
                    )
                ),
            )
        )[:10]
        featured_products = (
            Product.objects.filter(is_active=True, homepage_feature__is_active=True)
            .order_by("homepage_feature__order", "id")
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
                    ProductVariant.objects.filter(
                        product_id=OuterRef("pk"), stock__gt=0
                    )
                ),
            )
        )
        featured_groups = {}
        for product in featured_products:
            brand_id = product.brand_id
            if featured_groups.get(brand_id) is None:
                featured_groups[product.brand_id] = {
                    "brand": product.brand,
                    "products": [],
                }
            if len (featured_groups[product.brand_id]["products"]) < 10:
                featured_groups[brand_id]["products"].append(product)
        featured_data = []
        for group in featured_groups.values():
            brand_serializer = BrandSerializer(group["brand"])
            product_list_serializer = ProductListSerializer(
                group["products"], many=True
            )
            featured_data.append(
                {
                    "brand": brand_serializer.data,
                    "products": product_list_serializer.data,
                }
            )

        banner_serializer = BannerSerializer(
            banners,
            many=True,
            context={"request": request},
        )
        faq_serializer = FAQItemSerializer(
            faqs, many=True, context={"request": request}
        )
        category_serializer = CategorySerializer(categories, many=True)
        discounted_serializer = ProductListSerializer(
            discounted_products, many=True, context={"request": request}
        )

        return success_helper(
            data={
                "banners": banner_serializer.data,
                "faqs": faq_serializer.data,
                "categories": category_serializer.data,
                "discounted_products": discounted_serializer.data,
                "featured_by_brand":featured_data
            }
        )
