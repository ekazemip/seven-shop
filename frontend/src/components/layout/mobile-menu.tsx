'use client';
import Button from '../ui/button';
import { Menu, Heart, PackageSearch, House } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import type { KeyboardEvent } from 'react';
export default function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function handleOutsidePointer(event: PointerEvent) {
      if (!menuRef.current) return;
      if (!(event.target instanceof Node)) return;
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleOutsidePointer);
    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointer);
    };
  }, [isOpen]);
  function handleClose() {
    setIsOpen(false);
  }
  function handleToggle() {
    setIsOpen((previous) => !previous);
  }
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      setIsOpen(false);
      event.currentTarget.querySelector('button')?.focus();
    }
  }
  return (
    <div className="relative" onKeyDown={handleKeyDown} ref={menuRef}>
      <Button
        aria-label={`${isOpen ? 'بستن منو' : 'باز کردن منو'}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
      >
        <Menu size={20}></Menu>
      </Button>
      <nav
        className={`flex flex-col gap-2 p-4 text-foreground rounded-2xl absolute top-full border start-0 mt-2 z-50 w-56 shadow-lg glass transition-[opacity,translate,scale] duration-200 ease-out origin-top-right motion-reduce:transition-none ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}
        aria-label="منوی موبایل"
        inert={!isOpen}
        id="mobile-menu-panel"
      >
        <Link
          className="inline-flex gap-2 items-center justify-start min-h-12 min-w-12 rounded-lg w-full px-3"
          href={'/'}
          aria-label="خانه"
          onClick={handleClose}
        >
          <House size={20}></House>
          <span>خانه</span>
        </Link>
        <Link
          className="inline-flex gap-2 items-center justify-start min-h-12 min-w-12 rounded-lg w-full px-3"
          href={'/wishlist'}
          aria-label="علاقه مندی‌ها"
          onClick={handleClose}
        >
          <Heart size={20}></Heart>
          <span>علاقه مندی‌ها</span>
        </Link>
        <Link
          className="inline-flex gap-2 items-center justify-start min-h-12 min-w-12 rounded-lg relative w-full px-3"
          href={'/products'}
          aria-label="محصولات"
          onClick={handleClose}
        >
          <PackageSearch size={20}></PackageSearch>
          <span>محصولات </span>
        </Link>
      </nav>
    </div>
  );
}
