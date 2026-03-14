export default function SystemStatusCard({
  online,
  lastUpdated,
  points,
}: {
  online: boolean;
  lastUpdated: string;
  points: number;
}) {
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
        System Status
      </p>

      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Device
          </span>
          <span
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: online ? "var(--success)" : "var(--danger)" }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: online ? "var(--success)" : "var(--danger)" }}
            />
            {online ? "Online" : "Offline"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Last Sync
          </span>
          <span className="text-sm" style={{ color: "var(--text-primary)" }}>
            {lastUpdated}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            History Points
          </span>
          <span className="text-sm" style={{ color: "var(--text-primary)" }}>
            {points}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            API Status
          </span>
          <span className="text-sm" style={{ color: "var(--success)" }}>
            Healthy
          </span>
        </div>
      </div>
    </div>
  );
}