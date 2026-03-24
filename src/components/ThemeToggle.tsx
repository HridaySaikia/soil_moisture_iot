// "use client";

// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     const saved = localStorage.getItem("dashboard-theme") as "light" | "dark" | null;
//     const initialTheme = saved ?? "dark";
//     setTheme(initialTheme);

//     if (initialTheme === "dark") {
//       document.documentElement.setAttribute("data-theme", "dark");
//     } else {
//       document.documentElement.removeAttribute("data-theme");
//     }
//   }, []);

//   function toggleTheme() {
//     const nextTheme = theme === "dark" ? "light" : "dark";
//     setTheme(nextTheme);
//     localStorage.setItem("dashboard-theme", nextTheme);

//     if (nextTheme === "dark") {
//       document.documentElement.setAttribute("data-theme", "dark");
//     } else {
//       document.documentElement.removeAttribute("data-theme");
//     }
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="rounded-xl border px-3 py-2 text-sm font-medium transition"
//       style={{
//         background: "var(--card)",
//         color: "var(--text-primary)",
//         borderColor: "var(--border)",
//       }}
//     >
//       {theme === "dark" ? "☀ Light" : "🌙 Dark"}
//     </button>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dashboard-theme") as "light" | "dark" | null;

    const initialTheme = saved ?? "dark";

    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    setMounted(true);
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

  // 🚀 prevents flicker (VERY IMPORTANT)
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="group inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        background: "var(--card)",
        color: "var(--text-primary)",
        borderColor: "var(--border)",
      }}
    >
      <span className="transition-transform duration-300 group-hover:rotate-12">
        {theme === "dark" ? "☀" : "🌙"}
      </span>

      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}