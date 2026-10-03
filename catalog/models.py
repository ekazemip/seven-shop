from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=25)
    parent = models.ForeignKey(
        "self",
        on_delete=models.PROTECT,
        blank=True,
        null=True,
        related_name="children",
    )
    slug = models.SlugField(unique=True)


class Brand(models.Model):
    title = models.CharField(max_length=25)
    slug = models.SlugField(unique=True)


class Product(models.Model):
    category = models.ForeignKey(
        "Category", on_delete=models.PROTECT, related_name="products"
    )
    brand = models.ForeignKey(
        "Brand", on_delete=models.PROTECT, related_name="products"
    )
    name = models.CharField(max_length=110)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(
        "Product",
        on_delete=models.CASCADE,
        related_name="images",
    )
    variant = models.ForeignKey(
        "ProductVariant",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="images",
    )
    image = models.ImageField(upload_to="products/", blank=True, null=True)


# * Attributes per categoury
class AttributeDefinition(models.Model):
    title = models.CharField(max_length=50)
    category = models.ForeignKey(
        "Category", on_delete=models.CASCADE, related_name="attributes"
    )


class ProductAttributeValue(models.Model):
    # * Attributes for Variants
    product = models.ForeignKey(
        "Product", on_delete=models.CASCADE, related_name="attribute_values"
    )
    attribute = models.ForeignKey(
        "AttributeDefinition", on_delete=models.PROTECT, related_name="values"
    )
    value = models.CharField(
        max_length=50,
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["product", "attribute", "value"],
                name="unique_product_attribute_value",
            )
        ]


class VariantAttribute(models.Model):
    title = models.CharField(max_length=50)


class VariantValue(models.Model):
    attribute = models.ForeignKey(
        "VariantAttribute", on_delete=models.CASCADE, related_name="values"
    )
    value = models.CharField(
        max_length=50,
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["attribute", "value"],
                name="unique_variant_value",
            )
        ]


class ProductVariant(models.Model):
    values = models.ManyToManyField(
        "VariantValue",
        through="VariantAttributeAssignment",
        related_name="variants",
    )
    product = models.ForeignKey(
        "Product", on_delete=models.PROTECT, related_name="variants"
    )
    stock = models.PositiveIntegerField(default=0)
    sku = models.CharField(max_length=50, unique=True)
    base_price = models.DecimalField(max_digits=15, decimal_places=0)
    discount_price = models.DecimalField(
        max_digits=15,
        decimal_places=0,
        null=True,
        blank=True,
    )


class VariantAttributeAssignment(models.Model):
    variant = models.ForeignKey(
        "ProductVariant", on_delete=models.CASCADE, related_name="assignments"
    )
    attribute = models.ForeignKey(
        "VariantAttribute", on_delete=models.CASCADE, related_name="assignments"
    )
    value = models.ForeignKey(
        "VariantValue", on_delete=models.CASCADE, related_name="assignments"
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["variant", "attribute"], name="unique_attribute_per_variant"
            )
        ]
