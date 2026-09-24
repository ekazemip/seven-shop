from django.contrib import admin
from .models import (ProductImage, Category, Brand, Product, VariantAttribute, VariantValue, ProductAttributeValue,
                     AttributeDefinition, ProductVariant)


admin.site.register(ProductImage)
admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Product)
admin.site.register(VariantAttribute)
admin.site.register(VariantValue)
admin.site.register(ProductVariant)
admin.site.register(AttributeDefinition)
admin.site.register(ProductAttributeValue)
