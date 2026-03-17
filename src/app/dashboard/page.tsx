"use client";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import DeviceSelector from "@/components/DeviceSelector";
import ThresholdControl from "@/components/ThresholdControl";
import MoistureChart from "@/components/MoistureChart";
import MoistureGauge from "@/components/MoistureGauge";
import PlantHealthCard from "@/components/PlantHealthCard";
import SystemStatusCard from "@/components/SystemStatusCard";
import InsightsPanel from "@/components/InsightsPanel";
import AlertHistory from "@/components/AlertHistory";
import RangeSelector from "@/components/RangeSelector";
import ThemeToggle from "@/components/ThemeToggle";
import TrendIndicator from "@/components/TrendIndicator";
import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";

type Reading = {
  deviceId: string;
  moistureRaw: number;
  moisturePct: number;
  createdAt: string;
};

export default function DashboardPage() {
  const devices = ["plant-01", "plant-02", "plant-03"];
  const [deviceId, setDeviceId] = useState(devices[0]);
  const [latest, setLatest] = useState<Reading | null>(null);
  const [history, setHistory] = useState<Reading[]>([]);
  const [threshold, setThreshold] = useState(30);
  const [range, setRange] = useState("1h");
  const router = useRouter();

  useEffect(() => {
    let alive = true;
    let loading = false;

    async function load() {
      if (loading) return;
      loading = true;

      try {
        const [latestRes, histRes] = await Promise.all([
          fetch(`/api/moisture/latest?deviceId=${deviceId}`, {
            cache: "no-store",
          }),
          fetch(`/api/moisture/history?deviceId=${deviceId}&limit=120`, {
            cache: "no-store",
          }),
        ]);

        let latestJson = { latest: null as Reading | null };
        let histJson = { history: [] as Reading[] };

        if (latestRes.ok) {
          latestJson = await latestRes.json();
        } else {
          console.error("Latest API failed:", await latestRes.text());
        }

        if (histRes.ok) {
          histJson = await histRes.json();
        } else {
          console.error("History API failed:", await histRes.text());
        }

        if (!alive) return;

        const nextHistory = histJson.history ?? [];
        const nextLatest =
          nextHistory.length > 0
            ? nextHistory[nextHistory.length - 1]
            : latestJson.latest ?? null;

        setHistory(nextHistory);
        setLatest(nextLatest);
      } catch (error) {
        console.error("Dashboard polling error:", error);
      } finally {
        loading = false;
      }
    }

    load();
    const t = setInterval(load, 5000);

    return () => {
      alive = false;
      clearInterval(t);
    };
  }, [deviceId]);

  const latestReading =
  history.length > 0 ? history[history.length - 1] : latest;

  const moisturePct = latestReading?.moisturePct ?? 0;

  const filteredHistory = useMemo(() => {
    const now = Date.now();

    const rangeMsMap: Record<string, number> = {
      "15m": 15 * 60 * 1000,
      "1h": 60 * 60 * 1000,
      "6h": 6 * 60 * 60 * 1000,
      "24h": 24 * 60 * 60 * 1000,
    };

    const selectedRangeMs = rangeMsMap[range] ?? 60 * 60 * 1000;

    return history.filter((reading) => {
      const readingTime = new Date(reading.createdAt).getTime();
      return now - readingTime <= selectedRangeMs;
    });
  }, [history, range]);

  const previousMoisture =
    filteredHistory.length >= 2
      ? filteredHistory[filteredHistory.length - 2].moisturePct
      : null;

  const isDryAlert =
    latestReading?.moisturePct !== undefined &&
    latestReading.moisturePct < threshold;

  const lastUpdated = latestReading?.createdAt
    ? new Date(latestReading.createdAt).toLocaleString()
    : "No data yet";

  const online = latestReading?.createdAt
    ? Date.now() - new Date(latestReading.createdAt).getTime() < 120000
    : false;

  const chartData = useMemo(() => {
    return filteredHistory.map((r) => ({
      time: new Date(r.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      moisture: r.moisturePct,
      fullTime: new Date(r.createdAt).toLocaleString(),
    }));
  }, [filteredHistory]);

  const alerts = useMemo(() => {
    const items: {
      time: string;
      message: string;
      type: "info" | "warning" | "success";
    }[] = [];

    if (latestReading) {
      items.push({
        time: new Date(latestReading.createdAt).toLocaleString(),
        message: `New reading received from ${latestReading.deviceId}: ${latestReading.moisturePct}% moisture`,
        type: "info",
      });
    }

    if (isDryAlert) {
      items.push({
        time: new Date().toLocaleString(),
        message: `Moisture dropped below threshold (${threshold}%).`,
        type: "warning",
      });
    }

    if (online) {
      items.push({
        time: new Date().toLocaleString(),
        message: "Device is online and reporting normally.",
        type: "success",
      });
    }

    return items;
  }, [latestReading, isDryAlert, threshold, online]);

  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--page-bg)",
        color: "var(--text-primary)",
      }}
    >
      <header
        className="sticky top-0 z-20 border-b backdrop-blur-xl"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <button
              onClick={() => router.back()}
              className="rounded-lg border px-3 py-2 text-sm"
              style={{ borderColor: "var(--border)" }}
            >
              ← Back
            </button>

            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle />
            
            <Show when="signed-in">
              <UserButton />
            </Show>

            <DeviceSelector
              value={deviceId}
              onChange={setDeviceId}
              devices={devices}
            />
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                online ? "bg-emerald-400" : "bg-red-400"
              }`}
            />
            <span
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:py-8">
        {isDryAlert && (
          <div
            className="rounded-2xl border p-4"
            style={{
              borderColor: "var(--danger)",
              background: "var(--danger-soft)",
              color: "var(--danger)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            ⚠️ Alert: Soil is dry ({latestReading?.moisturePct}%). Consider
            watering the plant.
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MoistureGauge value={moisturePct} />
          </div>

          <div className="space-y-6">
            <PlantHealthCard
              moisturePct={moisturePct}
              threshold={threshold}
            />
            <SystemStatusCard
              online={online}
              lastUpdated={lastUpdated}
              points={chartData.length}
            />
          </div>
        </div>

        <TrendIndicator current={moisturePct} previous={previousMoisture} />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:col-span-2">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Moisture History</h2>
                <p className="text-sm text-gray-400">
                  Real-time trend of soil moisture readings
                </p>
              </div>
              <RangeSelector value={range} onChange={setRange} />
            </div>

            <div className="mt-5 h-[260px] sm:h-[320px]">
              <MoistureChart data={chartData} />
            </div>

            {chartData.length === 0 && (
              <p className="mt-3 text-sm text-gray-400">
                No history yet. Incoming ESP32 readings will appear here.
              </p>
            )}
          </div>

          <div className="space-y-6">
            <ThresholdControl deviceId={deviceId} onChange={setThreshold} />
            <InsightsPanel
              moisturePct={moisturePct}
              threshold={threshold}
              online={online}
            />
          </div>
        </div>

        <AlertHistory alerts={alerts} />
      </section>
    </main>
  );
}