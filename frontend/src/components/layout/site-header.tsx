import ThemeToggle from '../theme-toggle';
import Button from '../ui/button';
import { Heart, User, ShoppingCart, Search } from 'lucide-react';
import Link from 'next/link';
import Input from '../ui/input';
import MenuToggle from './mobile-menu';
export default function SiteHeader() {
  const favouriteButt = (
    <Link
      className="inline-flex items-center justify-center min-h-12 min-w-12 rounded-lg"
      href={'/wishlist'}
      aria-label="علاقه مندی‌ها"
    >
      <Heart size={20}></Heart>
    </Link>
  );
  const profileButt = (
    <Link
      className="inline-flex items-center justify-center min-h-12 min-w-12 rounded-lg"
      href={'/login'}
      aria-label="حساب کاربری "
    >
      <User size={20}></User>
    </Link>
  );
  const cartCount = 0;
  const cartButt = (
    <Link
      className="inline-flex items-center justify-center min-h-12 min-w-12 rounded-lg relative "
      href={'/cart'}
      aria-label={`سبد خرید${cartCount}`}
    >
      <ShoppingCart size={20}></ShoppingCart>
      {cartCount > 0 && (
        <span className="absolute top-2 end-7 min-w-4 h-4 px-1 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <div className="items-center justify-between gap-4 hidden lg:flex w-full">
        <Link
          className="inline-flex items-center justify-center min-h-12 min-w-12 rounded-lg"
          href={'/'}
        >
          سون کالا
        </Link>
        <form
          action="/products"
          method="get"
          className="flex items-end gap-2 "
          role="search"
          aria-label="جست‌وجوی محصولات"
        >
          <Input
            id="desktop-search"
            name="q"
            label="جستجو"
            placeholder="نام محصول یا برند"
            hideLabel={true}
          />
          <Button type="submit" aria-label="جست‌وجو">
            <Search></Search>
          </Button>
        </form>
        <div className="flex items-center gap-2">
          {favouriteButt}
          {cartButt}
          {profileButt}
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
      <div className="flex lg:hidden w-full items-center justify-between gap-4">
        <MenuToggle/>
        <Link
          className="inline-flex items-center justify-center min-h-12 min-w-12 rounded-lg"
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
    </header>
  );
}
