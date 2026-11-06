import ThemeToggle from '../theme-toggle';
import Button from '../ui/button';
import Link from 'next/link';
import Input from '../ui/input';
import MenuToggle from './mobile-menu';
import Image from 'next/image';
import WishlistIcon from '@/components/icons/wishlist-icon';
import SearchIcon from '@/components/icons/search-icon';
import ProfileIcon from '@/components/icons/profile-icon';
import CartIcon from '@/components/icons/cart-icon';
export default function SiteHeader() {
  const favouriteButt = (
    <Link
      className="inline-flex bg-raised items-center border border-border rounded-md justify-center min-h-12 min-w-12  hover:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
      href={'/wishlist'}
      aria-label="علاقه مندی‌ها"
    >
      <WishlistIcon></WishlistIcon>
    </Link>
  );
  const profileButt = (
    <Link
      className="inline-flex bg-raised items-center border border-border rounded-md justify-center min-h-12 min-w-12  hover:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
      href={'/login'}
      aria-label="حساب کاربری "
    >
      <ProfileIcon></ProfileIcon>
    </Link>
  );
  const cartCount = 3;
  const cartButt = (
    <Link
      className="inline-flex bg-raised items-center border border-border rounded-md justify-center min-h-12 min-w-12 hover:border-border-strong relative focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link "
      href={'/cart'}
      aria-label={` سبد خرید${cartCount} کالا `}
    >
      <CartIcon></CartIcon>
      {cartCount > 0 && (
        <span className="absolute top-2 end-7 min-w-4 h-4 px-1 rounded-full bg-accent text-on-accent text-xs flex items-center justify-center">
          {cartCount.toLocaleString('fa-IR')}
        </span>
      )}
    </Link>
  );
  return (
    <header className=" sticky top-0 z-40 glass ">
      <div className="mx-auto w-full px-4 py-3 md:px-6 lg:px-10 max-w-[1320px]">
        <div className="items-center justify-between gap-4 hidden lg:flex w-full ">
          <div className=" flex shrink-0 items-center gap-6">
            <Link
              className=" inline-flex gap-3 items-center justify-center min-h-12 min-w-12 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              href={'/'}
            >
              <Image src="/images/brand/primary.png" alt="سون کالا" width={40} height={40} />
              <span className="text-lg font-bold">سون کالا</span>
            </Link>
            <nav className="flex items-center gap-4 text-button" aria-label="منوی اصلی">
              <Link
                className="text-text-2 hover:text-text whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
                href={'/'}
              >
                خانه
              </Link>
              <Link
                className="text-text-2 hover:text-text whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
                href={'/products'}
              >
                محصولات
              </Link>
              <Link
                className="text-text-2 hover:text-text whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
                href={'/contact'}
              >
                تماس با ما
              </Link>
            </nav>
          </div>
          <form
            action="/products"
            method="get"
            className="flex min-w-0 flex-1 items-center gap-2 "
            role="search"
            aria-label="جست‌وجوی محصولات"
          >
            <Input
              id="desktop-search"
              name="q"
              label="جستجو"
              placeholder="نام محصول یا برند"
              hideLabel={true}
              endAdornment={
                <Button className='size-11 min-h-0! p-0! rounded-full! shrink-0' variant='ghost' type="submit" aria-label="جست‌وجو">
                  <SearchIcon></SearchIcon>
                </Button>
              }
            />
          </form>
          <div className="flex items-center gap-2 shrink-0 ">
            <ThemeToggle></ThemeToggle>
            {favouriteButt}
            {cartButt}
            <Link
              className="inline-flex min-h-12 items-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 text-button text-on-primary 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link hover:bg-primary-hover"
              href={'/login'}
            >
              {' '}
              <ProfileIcon></ProfileIcon>ورود / ثبت نام
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden w-full items-center justify-between gap-4">
          <MenuToggle />
          <Link
            className="inline-flex items-center justify-center min-h-12 min-w-12 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
            href={'/'}
          >
            سون کالا
          </Link>
          <div className="flex items-center gap-2">
            {favouriteButt}
            {profileButt}
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </header>
  );
}
