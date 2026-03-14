type AlertItem = {
  time: string;
  message: string;
  type: "info" | "warning" | "success";
};

export default function AlertHistory({ alerts }: { alerts: AlertItem[] }) {
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
          Recent Activity
        </h3>

        <span style={{ color: "var(--text-secondary)" }} className="text-sm">
          {alerts.length} events
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {alerts.length === 0 ? (
          <p style={{ color: "var(--text-secondary)" }} className="text-sm">
            No recent alerts yet.
          </p>
        ) : (
          alerts.map((alert, idx) => {
            let badgeStyle = {};

            if (alert.type === "warning") {
              badgeStyle = {
                background: "var(--danger-soft)",
                color: "var(--danger)",
              };
            } else if (alert.type === "success") {
              badgeStyle = {
                background: "var(--success-soft)",
                color: "var(--success)",
              };
            } else {
              badgeStyle = {
                background: "var(--accent-soft)",
                color: "var(--accent)",
              };
            }

            return (
              <div
                key={idx}
                className="flex items-start justify-between rounded-xl border p-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-secondary)",
                }}
              >
                <div>
                  <p style={{ color: "var(--text-primary)" }} className="text-sm">
                    {alert.message}
                  </p>

                  <p style={{ color: "var(--text-secondary)" }} className="text-xs mt-1">
                    {alert.time}
                  </p>
                </div>

                <span
                  className="rounded-full px-2 py-1 text-xs font-medium"
                  style={badgeStyle}
                >
                  {alert.type}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}