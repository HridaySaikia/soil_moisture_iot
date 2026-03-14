"use client";

const ranges = ["15m", "1h", "6h", "24h"];

export default function RangeSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => onChange(range)}
          className={`rounded-full px-3 py-1.5 text-sm transition ${
            value === range
              ? "bg-white text-black"
              : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
}