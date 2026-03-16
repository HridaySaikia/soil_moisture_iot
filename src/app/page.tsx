"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Logo from "@/components/Logo";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SignalWavesBackground from "@/components/SignalWavesBackground";

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

            <SignedOut>
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
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero section with signal waves */}
      <section className="relative isolate overflow-hidden">
        <SignalWavesBackground />

        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <div
            className="mx-auto mb-6 inline-flex rounded-full border px-4 py-2 text-sm"
            style={{
              borderColor: "var(--border)",
              background: "rgba(99,102,241,0.10)",
              color: "var(--text-primary)",
            }}
          >
            IoT-Powered Smart Monitoring
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Smart Plant Monitoring
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #60a5fa 0%, #22d3ee 45%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              with Real-Time Intelligence
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-3xl text-base leading-8 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Monitor soil moisture in real-time using ESP32 sensors, cloud APIs,
            and a responsive dashboard. Track plant health, visualize trends,
            and receive alerts when watering is needed.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="w-full rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white sm:w-auto"
            >
              Open Dashboard
            </Link>

            <Link
              href="/about"
              className="w-full rounded-2xl border px-6 py-3 sm:w-auto"
              style={{ borderColor: "var(--border)" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
              cloud dashboard for live monitoring.
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
              historical sensor readings.
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
              Get alerts when moisture drops below threshold so watering can be
              done at the right time.
            </p>
          </div>
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