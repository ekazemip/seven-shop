import type { ReactNode } from 'react';
export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  'aria-label' :ariaLabel
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: false | true;
  onClick?: () => void;
  'aria-label'?:string;
}) {
  let variantClasses;
  if (variant === 'primary') {
    variantClasses = 'bg-primary text-on-primary enabled:hover:bg-primary-hover';
  } else if (variant === 'secondary') {
    variantClasses =
      '	bg-surface text-foreground border border-border enabled:hover:bg-primary-soft';
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 min-h-12 px-4 py-2 rounded-lg font-medium ${variantClasses} disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
`}
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
