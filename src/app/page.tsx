"use client";
import Logo from "@/components/Logo";
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
      <nav
        className="border-b backdrop-blur-xl"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/about" className="text-sm">
              About
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white"
            >
              Dashboard
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Real-time Plant Monitoring Platform
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Monitor soil moisture in real-time using IoT sensors and a cloud
          dashboard. Track plant health, analyze moisture history, and receive
          alerts when plants need watering.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="w-full rounded-xl bg-blue-500 px-6 py-3 font-medium text-white sm:w-auto"
          >
            Open Dashboard
          </Link>

          <Link
            href="/about"
            className="w-full rounded-xl border px-6 py-3 sm:w-auto"
            style={{ borderColor: "var(--border)" }}
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24">
        <h2 className="mb-10 text-center text-2xl font-semibold sm:mb-14 sm:text-3xl">
          Platform Features
        </h2>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <h3 className="mb-2 text-lg font-semibold">Real-Time Monitoring</h3>
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
            <h3 className="mb-2 text-lg font-semibold">Historical Analytics</h3>
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
            <h3 className="mb-2 text-lg font-semibold">Smart Alerts</h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Automatic alerts notify users when soil moisture drops below
              configured thresholds.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-t py-16 sm:py-20"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="mb-8 text-2xl font-semibold sm:mb-10 sm:text-3xl">
            System Architecture
          </h2>

          <p
            className="text-base sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Soil Sensor → ESP32 → REST API → MongoDB → Next.js Dashboard
          </p>
        </div>
      </section>

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