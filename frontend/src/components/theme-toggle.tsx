'use client';
import { useTheme } from 'next-themes';
import Button from './ui/button';
import { Moon, Sun } from 'lucide-react';
export default function ThemeToggle() {
  const theme = useTheme();
  function handleToggle() {
    if (!theme.resolvedTheme) {
      return;
    }
    if (theme.resolvedTheme === 'dark') {
      theme.setTheme('light');
    } else {
      theme.setTheme('dark');
    }
  }

  return (
    <Button onClick={handleToggle} aria-label="تغییر حالت نمایش">
      <Moon className="theme-icon-moon" />
      <Sun className="theme-icon-sun" />
    </Button>
  );
}
