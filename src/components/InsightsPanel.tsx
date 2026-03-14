export default function InsightsPanel({
  moisturePct,
  threshold,
  online,
}: {
  moisturePct: number;
  threshold: number;
  online: boolean;
}) {
  const insights: string[] = [];

  if (!online) {
    insights.push("Device is currently offline. Check power or Wi-Fi.");
  } else {
    insights.push("Device is actively sending readings to the dashboard.");
  }

  if (moisturePct < threshold) {
    insights.push("Soil moisture is below the configured threshold.");
    insights.push("Recommended action: water the plant.");
  } else if (moisturePct > 80) {
    insights.push("Soil moisture is high. Avoid overwatering.");
  } else {
    insights.push("Moisture is within a healthy range.");
  }

  insights.push("This dashboard supports multiple IoT devices.");

  return (
    <div
      className="rounded-3xl border p-5"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="flex items-center justify-between">
        <h3 style={{ color: "var(--text-primary)" }} className="text-lg font-semibold">
          Smart Insights
        </h3>

        <span
          className="rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
            background: "var(--accent-soft)",
          }}
        >
          AI-style
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border p-3 text-sm"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}