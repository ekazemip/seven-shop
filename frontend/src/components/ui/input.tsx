export default function Input({
  id,
  label,
  placeholder,
  disabled = false,
  error,
  name,
  hideLabel = false,
}: {
  id: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  name?: string;
  hideLabel?: boolean;
}) {
  const borderClasses = error
    ? 'border-danger'
    : 'border-border enabled:hover:border-border-strong';
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`text-label ${hideLabel ? 'sr-only' : ''}`}>
        {label}
      </label>
      <input
        aria-invalid={Boolean(error)}
        id={id}
        className={`text-text text-body bg-raised border ${borderClasses} min-h-12 px-4 py-2 rounded-lg disabled:bg-surface disabled:text-text-disabled disabled:border-border placeholder:text-muted disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 ${error ? 'focus-visible:outline-danger' : 'focus-visible:outline-link'}`}
        disabled={disabled}
        placeholder={placeholder}
        aria-describedby={error ? `${id}-error` : undefined}
        name={name}
      />
      {error && (
        <p id={`${id}-error`} className="text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
