'use client';
import Link from 'next/link';
import { Home, PackageSearch, ShoppingCart, LogIn } from 'lucide-react';
import { usePathname } from 'next/navigation';
export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className=" glass border rounded-3xl shadow-lg text-text fixed inset-x-4 bottom-4 z-40 lg:hidden grid grid-cols-4 gap-1 p-2 mobile-nav"
      aria-label="ناوبری اصلی موبایل"
    >
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${pathname === '/' ? 'bg-primary-soft text-primary' : 'text-muted'} `}
        href={'/'}
      >
        <Home size={24}></Home> <span>خانه</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${pathname === '/products' ? 'bg-primary-soft text-primary' : 'text-muted'} `}
        href={'/products'}
      >
        <PackageSearch size={24}></PackageSearch> <span>محصولات</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${pathname === '/cart' ? 'bg-primary-soft text-primary' : 'text-muted'} `}
        href={'/cart'}
      >
        <ShoppingCart size={24}></ShoppingCart>
        <span>سبد خرید</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center min-h-16 gap-1 rounded-2xl text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${pathname === '/login' ? 'bg-primary-soft text-primary' : 'text-muted'} `}
        href={'/login'}
      >
        <LogIn size={24}></LogIn> <span>ورود</span>
      </Link>
    </nav>
  );
}
