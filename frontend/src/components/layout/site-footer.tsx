import Link from 'next/link';
export default function SiteFooter() {
  return (
    <footer className="border-t border-border p-4 text-muted bg-surface">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <p>سون کالا ــ آسایش،درانتخاب‌های شما</p>
        <div>
          <p>دسترسی سریع</p>
          <nav className="flex flex-col gap-2" aria-label="دسترسی سریع">
            <Link href={'/'}>سون کالا</Link>
            <Link href={'/products'}>محصولات</Link>
            <Link href={'/wishlist'}>علاقه‌مندی ها</Link>
            <Link href={'/login'}>پروفایل کاربری</Link>
          </nav>
        </div>
        <div>
          <p>خدمات مشتریان</p>
          <nav className="flex flex-col gap-2" aria-label="خدمات مشتریان">
            <Link href={'/contact'}>تماس با ما</Link>
            <Link href={'/faq'}>سؤالات متداول</Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="items-center">تمام حقوق این سایت متعلق به سون کالا است.</p>
      </div>
    </footer>
  );
}
