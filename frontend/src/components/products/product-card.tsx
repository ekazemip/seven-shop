import Badge from '../ui/badge';
import Image from 'next/image';
import Button from '../ui/button';
export default function ProductCard({
  title,
  category,
  imageSrc,
  price,
  originalPrice,
  inStock,
  rating,
  reviewCount,
}: {
  title: string;
  category: string;
  imageSrc: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface h-full">
      <div className="relative flex aspect-square items-center justify-center bg-raised p-6">
        <div className="absolute top-3 right-3">
          {originalPrice !== undefined && originalPrice > price && (
            <Badge>
              {Math.round(((originalPrice - price) / originalPrice) * 100).toLocaleString('fa-IR')}٪
              تخفیف
            </Badge>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <button
            className="bg-overlay rounded-full p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link hover:bg-overlay/70"
            type="button"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Image src={'/images/brand/wishlist.svg'} alt="" width={24} height={24}></Image>
          </button>
        </div>
        <div>
          <Image
            className="object-contain"
            src={imageSrc}
            alt={title}
            width={144}
            height={144}
          ></Image>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <p className="text-muted text-caption">{category}</p>
        <h3 className="text-label text-text min-h-11">{title}</h3>
        <div className="flex items-center gap-1 text-caption">
          <Image src={'/images/brand/star.svg'} alt="" width={16.08} height={16.08}></Image>
          <span>
            {rating.toLocaleString('fa-IR')} ({reviewCount.toLocaleString('fa-IR')} نظر)
          </span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <span className={`${inStock ? 'text-text' : 'text-muted'} text-price`}>
            {price.toLocaleString('fa-IR')} تومان
          </span>
          {originalPrice !== undefined && originalPrice > price && (
            <del className="text-caption text-muted">{originalPrice.toLocaleString('fa-IR')}</del>
          )}
        </div>
        <p
          className={`${inStock ? 'text-success' : 'text-danger'} text-caption`}
        >{`${inStock ? 'موجود در انبار' : 'ناموجود'}`}</p>
      </div>
      <div className="flex items-center gap-2 p-4 mt-auto">
        <Button className="flex-1" variant="primary" disabled={!inStock}>
          افزودن به سبد
        </Button>
        <Button variant="secondary" aria-label="مشاهدهٔ جزئیات محصول">
          <Image src={'/images/brand/chevron-left.svg'} alt="" width={24} height={24}></Image>
        </Button>
      </div>
    </article>
  );
}
