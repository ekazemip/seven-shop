export default function Input({
  id,
  label,
  placeholder,
  disabled = false,
  error,
}: {
  id: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}){
  const borderClasses = error ? 'border-danger' : 'border-border';
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        aria-invalid={Boolean(error)}
        id={id}
        className={`text-foreground bg-surface border ${borderClasses} min-h-12 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
        disabled={disabled}
        placeholder={placeholder}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
