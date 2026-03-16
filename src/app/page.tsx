"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--page-bg)",
        color: "var(--text-primary)",
      }}
    >

      {/* NAVBAR */}
      <nav
        className="border-b backdrop-blur-xl"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-lg font-semibold">
            PlantMonitor
          </h1>

          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm">
              About
            </Link>

            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm"
            >
              Dashboard
            </Link>

            <ThemeToggle />
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-28 text-center">

        <h1 className="text-5xl font-bold leading-tight">
          Smart Plant Monitoring Platform
        </h1>

        <p
          className="mt-6 text-lg max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Monitor soil moisture in real-time using IoT sensors and a cloud
          dashboard. Track plant health, analyze moisture history, and receive
          alerts when plants need watering.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium"
          >
            Open Dashboard
          </Link>

          <Link
            href="/about"
            className="px-6 py-3 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            Learn More
          </Link>

        </div>

      </section>


      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <h2 className="text-3xl font-semibold text-center mb-14">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <h3 className="text-lg font-semibold mb-2">
              Real-Time Monitoring
            </h3>

            <p style={{ color: "var(--text-secondary)" }}>
              ESP32 sensors continuously transmit soil moisture data to the
              cloud dashboard for real-time visualization.
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <h3 className="text-lg font-semibold mb-2">
              Historical Analytics
            </h3>

            <p style={{ color: "var(--text-secondary)" }}>
              Analyze moisture trends over time with interactive charts and
              real-time sensor updates.
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <h3 className="text-lg font-semibold mb-2">
              Smart Alerts
            </h3>

            <p style={{ color: "var(--text-secondary)" }}>
              Automatic alerts notify users when soil moisture drops below
              configured thresholds.
            </p>
          </div>

        </div>

      </section>


      {/* ARCHITECTURE */}
      <section
        className="border-t py-20"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-5xl text-center px-6">

          <h2 className="text-3xl font-semibold mb-10">
            System Architecture
          </h2>

          <p
            className="text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Soil Sensor → ESP32 → REST API → MongoDB → Next.js Dashboard
          </p>

        </div>
      </section>


      {/* FOOTER */}
      <footer
        className="border-t py-8 text-center text-sm"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        © {new Date().getFullYear()} Smart Plant Monitoring Platform
      </footer>

    </main>
  );
}