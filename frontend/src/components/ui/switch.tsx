export default function Switch({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}: {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="inline-flex items-center gap-2" htmlFor={id}>
      <input
        className="sr-only peer  "
        type="checkbox"
        role="switch"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
      <span
        className="relative inline-flex h-6 w-11 rounded-full bg-border-strong peer-checked:bg-primary 
      shrink-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-link 
      peer-disabled:opacity-40 peer-disabled:cursor-not-allowed"
      >
        <span
          className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-on-primary ${checked ? 'translate-x-5' : 'translate-x-0'} transition-transform duration-200 motion-reduce:transition-none`}
        ></span>
      </span>
      <span className="peer-disabled:text-disabled">{label}</span>
    </label>
  );
}
