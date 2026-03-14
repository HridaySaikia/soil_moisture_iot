export default function PlantHealthCard({
  moisturePct,
  threshold,
}: {
  moisturePct: number;
  threshold: number;
}) {
  let status = "Healthy";
  let subtitle = "Soil moisture is within the ideal range.";
  let badgeStyle = {
    background: "var(--success-soft)",
    color: "var(--success)",
    borderColor: "var(--success)",
  };

  if (moisturePct < threshold) {
    status = "Needs Water";
    subtitle = "Moisture is below threshold. Watering is recommended.";
    badgeStyle = {
      background: "var(--danger-soft)",
      color: "var(--danger)",
      borderColor: "var(--danger)",
    };
  } else if (moisturePct > 80) {
    status = "Too Wet";
    subtitle = "Soil appears overwatered. Monitor drainage conditions.";
    badgeStyle = {
      background: "rgba(14,165,233,0.12)",
      color: "var(--accent)",
      borderColor: "var(--accent)",
    };
  }

  return (
    <div
      className="rounded-3xl border p-5"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        Plant Health
      </p>

      <div className="mt-4">
        <span
          className="inline-flex rounded-full border px-3 py-1 text-sm font-semibold"
          style={badgeStyle}
        >
          {status}
        </span>
      </div>

      <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
        {subtitle}
      </p>

      <div className="mt-5 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span style={{ color: "var(--text-secondary)" }}>Moisture</span>
          <span style={{ color: "var(--text-primary)" }}>{moisturePct}%</span>
        </div>
        <div className="flex items-center justify-between">
          <span style={{ color: "var(--text-secondary)" }}>Threshold</span>
          <span style={{ color: "var(--text-primary)" }}>{threshold}%</span>
        </div>
      </div>
    </div>
  );
}