from rest_framework import serializers
from .models import ProductVariant , VariantValue

class VariantValueSerializer(serializers.ModelSerializer):
    attribute = serializers.CharField(
        source="attribute.title",
        read_only=True,
    )

    class Meta:
        model = VariantValue
        fields = ["attribute", "value"]


class ProductVariantSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(
        source="product.category.title", read_only=True
    )
    brand_name = serializers.CharField(
        source="product.brand.title",
        read_only=True,
    )
    product_name = serializers.CharField(
        source="product.name",
        read_only=True
    )
    product_desc = serializers.CharField(
        source="product.description",
        read_only=True
    )
    product_created_time = serializers.DateTimeField(
        source="product.created_at",
        read_only=True
    )
    product_is_active = serializers.BooleanField(
        source="product.is_active",
        read_only=True
    )
    values = VariantValueSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = ProductVariant
        fields = [
            "category_name",
            "brand_name",
            "product_name",
            "product_desc",
            "product_created_time",
            "product_is_active",
            "base_price",
            "discount_price",
            "stock",
            "sku",
            "values",
        ]
