"use client";

import { useEffect, useState } from "react";

export default function ThresholdControl({
  deviceId,
  onChange,
}: {
  deviceId: string;
  onChange: (v: number) => void;
}) {
  const key = `threshold:${deviceId}`;
  const [value, setValue] = useState(30);

  useEffect(() => {
    const saved = localStorage.getItem(key);
    const v = saved ? Number(saved) : 30;
    const safe = Number.isFinite(v) ? Math.max(5, Math.min(90, v)) : 30;
    setValue(safe);
    onChange(safe);
  }, [deviceId, key, onChange]);

  function update(v: number) {
    setValue(v);
    localStorage.setItem(key, String(v));
    onChange(v);
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
        Dry Alert Threshold
      </p>

      <div className="mt-3 flex items-center gap-3">
        <input
          type="range"
          min={5}
          max={90}
          value={value}
          onChange={(e) => update(Number(e.target.value))}
          className="w-full"
        />
        <span
          className="w-12 text-right font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {value}%
        </span>
      </div>

      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
        Alert if moisture goes below this value.
      </p>
    </div>
  );
}