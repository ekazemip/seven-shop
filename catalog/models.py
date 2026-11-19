from django.db import models
from django.core.exceptions import ValidationError


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
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Brand(models.Model):
    title = models.CharField(max_length=25)
    slug = models.SlugField(unique=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


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

    def __str__(self):
        return f"{self.product}>>{self.variant}>>{self.image}"

    def clean(self):
        super().clean()
        if self.variant_id:
            if self.product_id != self.variant.product_id:
                raise ValidationError(
                    {"variant": "واریانت انتخاب شده متعلق به این محصول نیست"}
                )


# * Attributes per categoury
class AttributeDefinition(models.Model):
    title = models.CharField(max_length=50)
    category = models.ForeignKey(
        "Category", on_delete=models.CASCADE, related_name="attributes"
    )

    def __str__(self):
        return f"{self.category} - {self.title}"


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

    def __str__(self):
        return f"محصول:{self.product}:{self.attribute}>:{self.value}"

    def clean(self):
        super().clean()
        product = getattr(self,"product",None)
        if product is not None and product.category_id and self.attribute_id:
            if product.category_id != self.attribute.category_id :
                raise ValidationError({"attribute" : "ویژگی انتخاب شده متعلق به دسته بندی این محصول نیست ."})
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["product", "attribute", "value"],
                name="unique_product_attribute_value",
            )
        ]


class VariantAttribute(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


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

    def __str__(self):
        return f"{self.attribute} :: {self.value}"


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

    def __str__(self):
        return f"{self.product} >> {self.sku}"


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

    def __str__(self):
        return f"{self.variant} >> {self.attribute} >> {self.value}"

    def clean(self):
        super().clean()
        if self.attribute_id and self.value_id:
            if self.attribute_id != self.value.attribute_id:
                raise ValidationError(
                    {"value": "مقدار انتخاب شده متعلق به این ویژگی نیست."}
                )
