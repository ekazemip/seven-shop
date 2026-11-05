'use client';
import Link from 'next/link';
import HomeIcon from '@/components/icons/home-icon';
import ProductsIcon from '@/components/icons/products-icon';
import CartIcon from '@/components/icons/cart-icon';
import LoginIcon from '@/components/icons/login-icon';

import { usePathname } from 'next/navigation';
export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="glass rounded-glass-bar shadow-lg text-text fixed inset-x-4 bottom-4 z-40 lg:hidden grid grid-cols-4 gap-1 p-2 mobile-nav"
      aria-label="ناوبری اصلی موبایل"
    >
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link ${
          pathname === '/' ? 'bg-soft text-link' : 'text-muted'
        } `}
        href={'/'}
      >
        <HomeIcon></HomeIcon> <span>خانه</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link ${
          pathname === '/products' ? 'bg-soft text-link' : 'text-muted'
        } `}
        href={'/products'}
      >
        <ProductsIcon></ProductsIcon>
        <span>محصولات</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link ${
          pathname === '/cart' ? 'bg-soft text-link' : 'text-muted'
        } `}
        href={'/cart'}
      >
        <CartIcon></CartIcon>
        <span>سبد خرید</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link ${
          pathname === '/login' ? 'bg-soft text-link' : 'text-muted'
        } `}
        href={'/login'}
      >
        <LoginIcon></LoginIcon> <span>ورود</span>
      </Link>
    </nav>
  );
}
