"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--page-bg)",
        color: "var(--text-primary)",
      }}
    >
      {/* Navbar */}
      <nav
        className="border-b backdrop-blur-xl"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <button
              onClick={() => router.back()}
              className="rounded-lg border px-4 py-2 text-sm"
              style={{ borderColor: "var(--border)" }}
            >
              ← Back
            </button>

            <Link href="/" className="text-lg font-semibold">
              PlantMonitor
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium">
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

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p
            className="text-sm uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            About the Platform
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            A cloud-connected IoT system for intelligent plant monitoring
          </h1>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            This project combines embedded systems, cloud APIs, database
            storage, and a modern web dashboard to monitor soil moisture in
            real time. It was built to demonstrate a complete IoT workflow
            using ESP32 and a full-stack deployment pipeline.
          </p>
        </div>
      </section>

      {/* Overview cards */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <h3 className="text-lg font-semibold">IoT Hardware Layer</h3>
            <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
              ESP32 reads soil moisture data from the sensor and sends it to the
              cloud using REST API calls.
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <h3 className="text-lg font-semibold">Cloud Data Layer</h3>
            <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
              Sensor readings are stored in MongoDB Atlas and accessed through
              deployed Next.js API routes hosted on Vercel.
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <h3 className="text-lg font-semibold">Visualization Layer</h3>
            <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
              A responsive dashboard displays live moisture values, trends,
              alerts, device status, and plant health insights.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-2">
        <div
          className="rounded-2xl border p-8"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <h2 className="text-2xl font-semibold">Technology Stack</h2>
          <ul
            className="mt-5 space-y-3"
            style={{ color: "var(--text-secondary)" }}
          >
            <li>• ESP32 Microcontroller</li>
            <li>• Capacitive Soil Moisture Sensor</li>
            <li>• Next.js Frontend + API Routes</li>
            <li>• MongoDB Atlas Cloud Database</li>
            <li>• Vercel Deployment</li>
            <li>• Recharts for data visualization</li>
          </ul>
        </div>

        <div
          className="rounded-2xl border p-8"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <h2 className="text-2xl font-semibold">System Workflow</h2>
          <div
            className="mt-5 space-y-3 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>Soil Sensor → ESP32</p>
            <p>ESP32 → Cloud API</p>
            <p>Cloud API → MongoDB Atlas</p>
            <p>MongoDB Atlas → Live Dashboard</p>
          </div>
        </div>

        <div
          className="rounded-2xl border p-8 lg:col-span-2"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <h2 className="text-2xl font-semibold">Project Objective</h2>
          <p className="mt-4 leading-8" style={{ color: "var(--text-secondary)" }}>
            The objective of this project is to create a practical, real-time
            IoT monitoring system that helps users observe plant moisture levels
            remotely, identify dry-soil conditions quickly, and visualize sensor
            data through a clean and modern cloud dashboard.
          </p>
        </div>
      </section>

      {/* Footer */}
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