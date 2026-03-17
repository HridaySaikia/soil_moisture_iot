"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

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
      <nav
        className="border-b backdrop-blur-xl"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => router.back()}
              className="rounded-lg border px-4 py-2 text-sm"
              style={{ borderColor: "var(--border)" }}
            >
              ← Back
            </button>

            <Link href="/">
            <Logo />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
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

            <Show when="signed-out">
              <SignInButton mode="modal">
                <button
                  className="rounded-lg border px-4 py-2 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p
            className="text-xs uppercase tracking-[0.2em] sm:text-sm"
            style={{ color: "var(--accent)" }}
          >
            About the Platform
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            A cloud-connected IoT system for intelligent plant monitoring
          </h1>

          <p
            className="mt-6 text-base leading-8 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            This project combines embedded systems, cloud APIs, database
            storage, and a modern web dashboard to monitor soil moisture in
            real time. It was built to demonstrate a complete IoT workflow
            using ESP32 and a full-stack deployment pipeline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
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

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pb-24">
        <div
          className="rounded-2xl border p-6 sm:p-8"
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
          className="rounded-2xl border p-6 sm:p-8"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <h2 className="text-2xl font-semibold">System Workflow</h2>
          <div
            className="mt-5 space-y-3 text-base sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>Soil Sensor → ESP32</p>
            <p>ESP32 → Cloud API</p>
            <p>Cloud API → MongoDB Atlas</p>
            <p>MongoDB Atlas → Live Dashboard</p>
          </div>
        </div>

        <div
          className="rounded-2xl border p-6 sm:p-8 lg:col-span-2"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <h2 className="text-2xl font-semibold">Project Objective</h2>
          <p
            className="mt-4 leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            The objective of this project is to create a practical, real-time
            IoT monitoring system that helps users observe plant moisture levels
            remotely, identify dry-soil conditions quickly, and visualize sensor
            data through a clean and modern cloud dashboard.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <p
            className="text-xs uppercase tracking-[0.28em] sm:text-sm"
            style={{ color: "var(--accent)" }}
          >
            Developer
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Designed and developed by
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            A full-stack IoT platform built to combine embedded systems, cloud APIs,
            real-time monitoring, and modern dashboard design into one polished product experience.
          </p>
        </div>


        <div
          className="mx-auto mt-10 max-w-3xl rounded-[34px] p-[1px] transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(34,197,94,0.25), rgba(168,85,247,0.25))",
          }}
        >
          <div
            className="rounded-[32px] border p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] sm:p-10"
            style={{
              borderColor: "var(--border)",
              background: "linear-gradient(145deg, var(--card), var(--bg-secondary))",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left side */}
              <div className="flex flex-col justify-between">
                <div>
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(34,197,94,0.16), rgba(59,130,246,0.16))",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    HS
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    Hridayananda Saikia
                  </h3>

                  <p
                    className="mt-3 text-sm leading-7 sm:text-base"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    B.Tech Electronics & Communication Engineering, Tezpur University.
                    Passionate about embedded systems, IoT platforms, and full-stack development.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["Embedded Systems", "IoT", "Full Stack", "Cloud Dashboard"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full px-4 py-2 text-xs transition-all duration-300 hover:scale-105 hover:shadow-md sm:text-sm"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div
                className="rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-secondary)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-[0.24em]"
                  style={{ color: "var(--accent)" }}
                >
                  Connect
                </p>

                <h4 className="mt-3 text-xl font-semibold">
                  Explore more of my work
                </h4>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--text-secondary)" }}
                >
                  View source code, projects, and portfolio work through the links below.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="https://github.com/HridaySaikia"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(37,99,235,0.95))",
                      color: "white",
                      boxShadow: "0 10px 24px rgba(37,99,235,0.18)",
                    }}
                  >
                    View GitHub
                  </a>

                  <a
                    href="https://portfolio-full-new.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Visit Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="border-t"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:text-left">
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Smart Plant Monitoring Platform
            </p>
            <p
              className="mt-1 text-xs sm:text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Developed by Hridayananda Saikia
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/hridaysaikia"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            >
              GitHub
            </a>

            <a
              href="https://portfolio-full-new.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            >
              Portfolio
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}