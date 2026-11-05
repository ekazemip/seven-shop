import type { ReactNode } from 'react';
export default function Chip({
  children,
  selected = false,
  onClick,
}: {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}) {
  let styleClasses;
  if (selected) {
    styleClasses = 'bg-soft text-link border-soft-border';
  } else {
    styleClasses = 'bg-transparent text-text-2 border-border-strong';
  }
  return (
    <button
      className={`inline-flex text-label border rounded-full items-center gap-2 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link ${styleClasses} `}
      type="button"
      onClick={onClick}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}
