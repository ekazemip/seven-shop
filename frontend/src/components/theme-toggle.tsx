'use client';
import { useTheme } from 'next-themes';
import Button from './ui/button';
export default function ThemeToggle() {
  const theme = useTheme();
  function handleToggle() {
    if (!theme.resolvedTheme) {
      return;
    }
    if (theme.resolvedTheme === 'dark') {
      theme.setTheme('light');
    }
    else{
      theme.setTheme('dark');
    }
  }
  return <Button onClick={handleToggle}>change theme</Button>;
}
