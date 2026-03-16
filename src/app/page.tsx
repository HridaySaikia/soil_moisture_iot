"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "var(--page-bg)", color: "var(--text-primary)" }}
    >
      <h1 className="text-4xl font-bold mb-4">
        Smart Plant Monitoring Platform
      </h1>

      <p className="text-lg max-w-xl mb-8" style={{ color: "var(--text-secondary)" }}>
        Monitor soil moisture in real-time using IoT sensors and a cloud dashboard.
        Track plant health, analyze moisture history, and receive alerts when plants need watering.
      </p>

      <div className="flex gap-4">
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
    </main>
  );
}