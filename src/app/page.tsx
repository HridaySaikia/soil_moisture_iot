"use client";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  
} from "@clerk/nextjs";

import Logo from "@/components/Logo";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SignalWavesBackground from "@/components/SignalWavesBackground";
import { dark } from "@clerk/themes";


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

            <Show when="signed-out">
              <SignInButton
                mode="modal"
              >
                <button
                  className="rounded-lg border px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton
                mode="modal"
              >
                <button
                  className="rounded-lg px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: "var(--card)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton/>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>

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
              className="group inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                color: "white",
                boxShadow: "0 12px 30px rgba(37,99,235,0.22)",
              }}
            >
              Open Dashboard
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="#demo"
              className="group inline-flex w-full items-center justify-center rounded-2xl border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
              style={{
                borderColor: "var(--border)",
                background: "var(--card)",
                color: "var(--text-primary)",
              }}
            >
              Watch Demo
              <span className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5">
                ▷
              </span>
            </a>

            <a
              href="#features"
              className="inline-flex w-full items-center justify-center rounded-2xl border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
              style={{
                borderColor: "var(--border)",
                background: "transparent",
                color: "var(--text-primary)",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] sm:text-sm"
            style={{ color: "var(--accent)" }}
          >
            Live Demo
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            See the system in action
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            A real demonstration of the ESP32 hardware setup and the cloud dashboard
            working together in real time.
          </p>
        </div>

        <div
          className="mx-auto mt-10 max-w-5xl rounded-[28px] p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.28), rgba(34,197,94,0.22), rgba(168,85,247,0.22))",
          }}
        >
          <div
            className="overflow-hidden rounded-[27px] border"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div
              className="flex items-center justify-between border-b px-4 py-3"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-secondary)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <p
                className="text-xs sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Smart Plant Monitoring Demo
              </p>
            </div>
            <div className="relative">
              <div className="p-2">
                <div className="aspect-video w-full overflow-hidden rounded-2xl border"
                  style={{
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/--2swG9tPsI?rel=0&modestbranding=1&controls=1"
                    title="Smart Soil Monitoring Demo"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["ESP32 Hardware", "Live Dashboard", "Real-Time Data", "IoT Demo"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full px-4 py-2 text-xs sm:text-sm"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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

        <div className="mt-2">
          Developed by <span className="font-medium">Hridayananda Saikia</span>
        </div>

        <div className="mt-3 flex justify-center gap-6 text-sm">

          <a
            href="https://github.com/HridaySaikia"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://portfolio-full-new.vercel.app"
            target="_blank"
            className="hover:underline"
          >
            Portfolio
          </a>

        </div>
      </footer>
    </main>
  );
}