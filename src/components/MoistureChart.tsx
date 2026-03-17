"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartPoint = {
  time: string;
  moisture: number;
  fullTime?: string;
};

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: ChartPoint }>;
}) {
  if (!active || !payload || payload.length === 0) return null;

  const point = payload[0].payload;

  return (
    <div
      className="rounded-xl border px-3 py-2 text-sm"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text-primary)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <p style={{ color: "var(--text-secondary)" }}>
        {point.fullTime ?? point.time}
      </p>
      <p className="mt-1 font-medium">{point.moisture}% moisture</p>
    </div>
  );
}

export default function MoistureChart({ data }: { data: ChartPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />

        <XAxis
          dataKey="time"
          stroke="var(--text-secondary)"
          tick={{ fill: "var(--text-secondary)" }}
        />

        <YAxis
          domain={[0, 100]}
          stroke="var(--text-secondary)"
          tick={{ fill: "var(--text-secondary)" }}
        />

        <Tooltip content={<CustomTooltip />} />

        <Line
          type="monotone"
          dataKey="moisture"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}