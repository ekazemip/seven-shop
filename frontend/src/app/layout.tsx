import type { Metadata } from 'next';
import { Geist, Geist_Mono, Vazirmatn } from 'next/font/google';
import './globals.css';
import AppThemeProvider from '@/components/theme-provider';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import MobileBottomNav from '@/components/layout/mobile-bottom-nav';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['arabic', 'latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SE7EN shop | لوازم خانگی ',
  description: 'آسایش، در انتخاب‌های شما.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="fa"
      className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} h-full antialiased`}
      dir="rtl"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col lg:pb-0 pb-24">
        <AppThemeProvider>
          <SiteHeader></SiteHeader>
          {children}
          <SiteFooter></SiteFooter>
          <MobileBottomNav></MobileBottomNav>
        </AppThemeProvider>
      </body>
    </html>
  );
}
