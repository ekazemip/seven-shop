import type { ReactNode } from 'react';
export default function Badge({
  children,
  variant = 'accent',
}: {
  children: ReactNode;
  variant?: 'accent'|'danger'|'success'|'warning';
}) {
  let variantClasses;
  if (variant === 'accent') {
    variantClasses = 'bg-accent text-on-accent';
  } else if (variant === 'success') {
    variantClasses = 'bg-success-soft text-success border border-success/30';
  } else if (variant === 'warning') {
    variantClasses = 'bg-warning-soft text-warning';
  } else if (variant === 'danger') {
    variantClasses = 'bg-danger-soft text-danger border border-danger/30';
  }
  return (
    <span
      className={`flex flex-wrap items-center gap-4 rounded-full px-2 py-1 text-caption  justify-center ${variantClasses}`}
    >{children}</span>
  );
}
