"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("dashboard-theme") as "light" | "dark" | null;
    const initialTheme = saved ?? "dark";
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("dashboard-theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl border px-3 py-2 text-sm font-medium transition"
      style={{
        background: "var(--card)",
        color: "var(--text-primary)",
        borderColor: "var(--border)",
      }}
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}