export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 ring-1 ring-white/10 backdrop-blur-sm">
        <svg
          width="24"
          height="24"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-400"
        >
          {/* outer signal arcs */}
          <path
            d="M48 18C54 22 58 29 58 37"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M16 18C10 22 6 29 6 37"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* inner signal arcs */}
          <path
            d="M43 23C47 26 50 31 50 36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M21 23C17 26 14 31 14 36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* stem */}
          <path
            d="M32 50V30"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* left leaf */}
          <path
            d="M32 33C27 33 22 30 20 24C27 23 31 25 32 33Z"
            fill="currentColor"
            opacity="0.9"
          />

          {/* right leaf */}
          <path
            d="M32 29C37 29 42 25 44 19C37 19 33 21 32 29Z"
            fill="currentColor"
          />

          {/* soil/base */}
          <path
            d="M22 54H42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="leading-tight">
        <p className="text-base font-semibold">PlantMonitor</p>
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          Smart IoT Platform
        </p>
      </div>
    </div>
  );
}