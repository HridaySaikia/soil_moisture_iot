export default function StatusBadge({ moisturePct }: { moisturePct: number }) {
  let label = "NORMAL";
  let classes = "bg-yellow-500/20 text-yellow-200 border-yellow-500/30";

  if (moisturePct < 30) {
    label = "DRY";
    classes = "bg-red-500/20 text-red-200 border-red-500/30";
  } else if (moisturePct > 70) {
    label = "WET";
    classes = "bg-green-500/20 text-green-200 border-green-500/30";
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${classes}`}
    >
      {label}
    </span>
  );
}