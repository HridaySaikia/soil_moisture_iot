"use client";

export default function MoistureGauge({ value }: { value: number }) {
  const safeValue = Math.max(0, Math.min(100, value));

  const stroke = 18;
  const radius = 110;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (safeValue / 100) * circumference;

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "dark";

  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        borderColor: "var(--border)",
        background: isDark
          ? `
            radial-gradient(circle at top left, rgba(34,197,94,0.10), transparent 28%),
            radial-gradient(circle at top right, rgba(14,165,233,0.10), transparent 24%),
            var(--card)
          `
          : `
            radial-gradient(circle at top left, rgba(34,197,94,0.08), transparent 26%),
            radial-gradient(circle at top right, rgba(14,165,233,0.08), transparent 22%),
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.96))
          `,
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Live Moisture Level
          </p>

          <h2
            className="mt-1 text-2xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Soil Moisture
          </h2>
        </div>

        <div
          className="rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
          }}
        >
          Real-time
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="relative h-[280px] w-full max-w-[500px]">
          <svg viewBox="0 0 260 180" className="h-full w-full">
            <path
              d="M 20 150 A 110 110 0 0 1 240 150"
              fill="none"
              stroke={isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.14)"}
              strokeWidth={stroke}
              strokeLinecap="round"
            />

            {safeValue > 0 && (
              <path
                d="M 20 150 A 110 110 0 0 1 240 150"
                fill="none"
                stroke="var(--accent)"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                  filter: isDark
                    ? "drop-shadow(0 0 8px rgba(34,197,94,0.45))"
                    : "drop-shadow(0 1px 2px rgba(14,165,233,0.18))",
                }}
              />
            )}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pt-14">
            <span
              className="text-7xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {safeValue}%
            </span>

            <span
              className="mt-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              current moisture
            </span>
          </div>
        </div>

        <div
          className="mt-2 flex w-full justify-between text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>Dry</span>
          <span>Optimal</span>
          <span>Wet</span>
        </div>
      </div>
    </div>
  );
}