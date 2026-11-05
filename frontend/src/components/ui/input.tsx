import type { ReactNode } from 'react';

export default function Input({
  id,
  label,
  placeholder,
  disabled = false,
  error,
  name,
  hideLabel = false,
  endAdornment,
}: {
  id: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  name?: string;
  hideLabel?: boolean;
  endAdornment?: ReactNode;
}) {
  const borderClasses = error
    ? 'border-danger'
    : 'border-border enabled:hover:border-border-strong';
  return (
    <div className="flex flex-col gap-2 w-full min-w-0">
      <label htmlFor={id} className={`text-label ${hideLabel ? 'sr-only' : ''}`}>
        {label}
      </label>
      <div className="relative w-full min-w-0">
        <input
          aria-invalid={Boolean(error)}
          id={id}
          className={`text-text text-body bg-raised border w-full min-w-0 ${borderClasses} min-h-12 px-4 py-2 rounded-md 
          disabled:bg-surface disabled:text-disabled disabled:border-border placeholder:text-muted disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 
          ${error ? 'focus-visible:outline-danger' : 'focus-visible:outline-link'}
          ${endAdornment ? 'pe-16' : ''}
          `}
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={error ? `${id}-error` : undefined}
          name={name}
        />

        {endAdornment && (
          <div className="absolute inset-y-0 end-1 flex items-center">{endAdornment}</div>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
