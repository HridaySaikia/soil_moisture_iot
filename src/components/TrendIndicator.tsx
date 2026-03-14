type TrendIndicatorProps = {
  current: number;
  previous: number | null;
};

export default function TrendIndicator({
  current,
  previous,
}: TrendIndicatorProps) {
  if (previous === null) {
    return (
      <div
        className="rounded-2xl border px-4 py-3 text-sm"
        style={{
          borderColor: "var(--border)",
          background: "var(--card)",
          color: "var(--text-secondary)",
        }}
      >
        No previous reading available
      </div>
    );
  }

  const diff = current - previous;
  const absDiff = Math.abs(diff);

  let label = "Stable";
  let symbol = "→";
  let color = "var(--text-secondary)";

  if (diff > 1) {
    label = "Increasing";
    symbol = "↑";
    color = "var(--success)";
  } else if (diff < -1) {
    label = "Decreasing";
    symbol = "↓";
    color = "var(--danger)";
  }

  return (
    <div
      className="rounded-2xl border px-4 py-3"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        Moisture Trend
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-xl font-semibold" style={{ color }}>
          {symbol}
        </span>
        <span className="text-base font-semibold" style={{ color }}>
          {label}
        </span>
      </div>

      <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
        {diff > 0 ? "+" : ""}
        {diff}% from previous reading
      </p>

      <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>
        Absolute change: {absDiff}%
      </p>
    </div>
  );
}