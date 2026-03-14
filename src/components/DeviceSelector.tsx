"use client";

export default function DeviceSelector({
  value,
  onChange,
  devices,
}: {
  value: string;
  onChange: (id: string) => void;
  devices: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border px-3 py-2 text-sm outline-none"
      style={{
        background: "var(--input-bg)",
        color: "var(--text-primary)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {devices.map((d) => (
        <option
          key={d}
          value={d}
          style={{
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
          }}
        >
          {d}
        </option>
      ))}
    </select>
  );
}