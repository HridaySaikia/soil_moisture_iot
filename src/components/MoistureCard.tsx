import { Droplets } from "lucide-react";

export default function MoistureCard({ moisturePct }: { moisturePct: number }) {
  const clamped = Math.max(0, Math.min(100, moisturePct));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-300">Soil Moisture</p>
        <Droplets className="h-5 w-5 text-gray-300" />
      </div>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-4xl font-bold">{clamped}</span>
        <span className="text-gray-300 mb-1">%</span>
      </div>

      {/* progress bar */}
      <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-white"
          style={{ width: `${clamped}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-gray-400">
        Showing latest sensor reading
      </p>
    </div>
  );
}