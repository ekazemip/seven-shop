from django.contrib import admin
from .models import (
    ProductImage,
    Category,
    Brand,
    Product,
    VariantAttribute,
    VariantValue,
    ProductAttributeValue,
    AttributeDefinition,
    ProductVariant,
    VariantAttributeAssignment,
)


admin.site.register(ProductImage)
admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(VariantAttribute)
admin.site.register(VariantValue)
admin.site.register(AttributeDefinition)
admin.site.register(ProductAttributeValue)
admin.site.register(VariantAttributeAssignment)


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAttributeValueInline(admin.TabularInline):
    model = ProductAttributeValue
    extra = 1


class ProductVariantInline(admin.TabularInline):
    model = ProductVariant
    extra = 1
    show_change_link = True


class VariantAttributeAssignmentInline(admin.TabularInline):
    model = VariantAttributeAssignment
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline, ProductAttributeValueInline, ProductVariantInline]
    list_display = ("name", "brand", "is_active")
    list_filter = ("is_active", "brand")
    search_fields = ("name", "description")


admin.site.register(Product, ProductAdmin)


class ProductVariantAdmin(admin.ModelAdmin):
    inlines = [VariantAttributeAssignmentInline]
    list_display = ("sku", "product", "base_price", "discount_price", "stock")
    search_fields = ("sku", "product__name")
    list_filter = ("product__brand",)
    list_select_related = ("product",)


admin.site.register(ProductVariant, ProductVariantAdmin)
