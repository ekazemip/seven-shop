import type { ReactNode } from 'react';
export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
  type = 'button',
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
  className = '',
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  disabled?: false | true;
  onClick?: () => void;
  'aria-label'?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  className?: string;
}) {
  let variantClasses;
  if (variant === 'primary') {
    variantClasses =
      'bg-primary text-on-primary border-transparent enabled:hover:bg-primary-hover enabled:active:bg-primary-active';
  } else if (variant === 'secondary') {
    variantClasses =
      '	bg-transparent text-text border-border-strong enabled:hover:bg-raised enabled:active:bg-overlay';
  } else if (variant === 'accent') {
    variantClasses =
      'bg-accent border-transparent text-on-accent enabled:hover:bg-accent-hover enabled:active:bg-accent-hover';
  } else if (variant === 'ghost') {
    variantClasses =
      'bg-transparent border-transparent text-link enabled:hover:bg-primary-soft enabled:active:bg-overlay';
  }

  return (
    <button
      className={`${className} inline-flex items-center justify-center gap-2 min-h-12 px-4 py-2 rounded-lg text-label enabled:cursor-pointer ${variantClasses} border disabled:bg-raised disabled:text-text-disabled disabled:border-border disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link transition-colors duration-150
`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
}
