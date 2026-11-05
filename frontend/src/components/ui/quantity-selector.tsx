import MinusIcon from '@/components/icons/minus-icon';
import PlusIcon from '@/components/icons/plus-icon';
export default function QuantitySelector({
  value,
  min = 1,
  max = 10,
  onChange,
}: {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}) {
  const disabledItemMin = value <= min;
  const disabledItemMax = value >= max;
  function handleIncrease() {
    if (value >= max) return;
    onChange(value + 1);
  }
  function handleDecrease() {
    if (value <= min) return;
    onChange(value - 1);
  }
  return (
    <div className="inline-flex w-fit items-center bg-raised border border-border gap-1 rounded-xl p-1">
      <button
        className="inline-flex size-9 items-center justify-center rounded-lg bg-overlay text-link 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:opacity-40 disabled:cursor-not-allowed hover:bg-overlay/70"
        type="button"
        aria-label="کاهش تعداد"
        disabled={disabledItemMin}
        onClick={handleDecrease}
      >
        <MinusIcon></MinusIcon>
      </button>
      <span className="w-8 text-center text-label text-text tabular-nums">{value}</span>
      <button
        className="inline-flex size-9 items-center justify-center rounded-lg bg-overlay text-link 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:opacity-40 disabled:cursor-not-allowed hover:bg-overlay/70"
        type="button"
        aria-label="افزایش تعداد"
        disabled={disabledItemMax}
        onClick={handleIncrease}
      >
        <PlusIcon></PlusIcon>
      </button>
    </div>
  );
}
