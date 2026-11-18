from typing import ReadOnly

from rest_framework.fields import SerializerMethodField
from .models import ProductImage
from rest_framework import serializers
from .models import Product, ProductVariant, VariantValue, Brand, Category


class VariantValueSerializer(serializers.ModelSerializer):
    attribute = serializers.CharField(
        source="attribute.title",
        read_only=True,
    )

    class Meta:
        model = VariantValue
        fields = ["attribute", "value"]


class ProductVariantSerializer(serializers.ModelSerializer):
    values = VariantValueSerializer(
        many=True,
        read_only=True,
    )
    is_in_stock = serializers.SerializerMethodField()

    def get_is_in_stock(self, obj):
        return obj.stock > 0

    class Meta:
        model = ProductVariant
        fields = [
            "id",
            "is_in_stock",
            "base_price",
            "discount_price",
            "stock",
            "sku",
            "values",
        ]


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ["title", "slug"]


class CategorySerializer(serializers.ModelSerializer):
    parent_slug = serializers.SlugRelatedField(
        slug_field="slug", read_only=True, source="parent"
    )

    class Meta:
        model = Category
        fields = ["slug", "title", "parent_slug"]


class ProductListSerializer(serializers.ModelSerializer):
    brand = BrandSerializer(read_only=True)
    main_image = serializers.SerializerMethodField()
    display_price = serializers.DecimalField(
        max_digits=15, decimal_places=0, read_only=True, allow_null=True
    )
    is_in_stock = serializers.BooleanField(read_only=True)

    def get_main_image(self, obj):
        product_images = obj.listing_images
        for img in product_images:
            if img.image:
                return img.image.url
        return None

    class Meta:
        model = Product
        fields = ["name", "slug", "brand", "main_image", "display_price", "is_in_stock"]


class ProductImageSerializer(serializers.ModelSerializer):
    variant_sku = serializers.SlugRelatedField(
        slug_field="sku", source="variant", read_only=True
    )

    class Meta:
        model = ProductImage
        fields = ["image", "id", "variant_sku"]


class ProductDetailSerializer(serializers.ModelSerializer):
    brand = BrandSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    specifications = serializers.SerializerMethodField()
    variants = ProductVariantSerializer(many=True, read_only=True)

    def get_specifications(self, obj):
        specs = {}
        objects = obj.attribute_values.all()
        for item in objects:
            if item.attribute_id not in specs:
                specs[item.attribute_id] = {
                    "attribute": item.attribute.title,
                    "values": [],
                }
            specs[item.attribute_id]["values"].append(item.value)
        return list(specs.values())

    class Meta:
        model = Product
        fields = [
            "name",
            "slug",
            "description",
            "brand",
            "category",
            "images",
            "specifications",
            "variants",
        ]
