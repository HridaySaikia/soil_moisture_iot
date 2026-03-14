"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MoistureChart({
  data,
}: {
  data: { time: string; moisture: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={320} minWidth={0} minHeight={100}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="moistureGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
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

        <Tooltip
          contentStyle={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            color: "var(--text-primary)",
            boxShadow: "var(--shadow-soft)",
          }}
          labelStyle={{ color: "var(--text-secondary)" }}
          itemStyle={{ color: "var(--text-primary)" }}
        />

        <Line
          type="monotone"
          dataKey="moisture"
          stroke="#1E90FF"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}