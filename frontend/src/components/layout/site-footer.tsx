import Link from 'next/link';
export default function SiteFooter() {
  return (
    <footer className="border-t border-border p-4 text-muted bg-surface">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <p>سون کالا ــ آسایش،درانتخاب‌های شما</p>
        <div>
          <p>دسترسی سریع</p>
          <hr className="w-23" />
          <br />
          <nav className="flex flex-col gap-2" aria-label="دسترسی سریع">
            <Link
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              href={'/'}
            >
              سون کالا
            </Link>
            <Link
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              href={'/products'}
            >
              محصولات
            </Link>
            <Link
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              href={'/wishlist'}
            >
              علاقه‌مندی ها
            </Link>
            <Link
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              href={'/login'}
            >
              پروفایل کاربری
            </Link>
          </nav>
        </div>
        <div>
          <p>خدمات مشتریان</p>
          <hr className="w-26" />
          <br />
          <nav className="flex flex-col gap-2" aria-label="خدمات مشتریان">
            <Link
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              href={'/contact'}
            >
              تماس با ما
            </Link>
            <Link
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              href={'/faq'}
            >
              سؤالات متداول
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-muted text-center">تمام حقوق این سایت متعلق به سون کالا است.</p>
      </div>
    </footer>
  );
}
