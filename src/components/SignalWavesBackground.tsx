export default function SignalWavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="h-full w-full opacity-100"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1440" y2="900">
            <stop offset="0%" stopColor="rgba(59,130,246,0.18)" />
            <stop offset="55%" stopColor="rgba(99,102,241,0.16)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.14)" />
          </linearGradient>
        </defs>

        {Array.from({ length: 18 }).map((_, i) => {
          const y = 40 + i * 42;
          return (
            <path
              key={i}
              d={`M -80 ${y} Q 360 ${y - 90} 720 ${y} T 1520 ${y}`}
              stroke="url(#waveStroke)"
              strokeWidth="1.4"
              opacity={0.85 - i * 0.02}
              fill="none"
            />
          );
        })}
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(99,102,241,0.08), transparent 30%), radial-gradient(circle at 15% 85%, rgba(14,165,233,0.08), transparent 24%)",
        }}
      />
    </div>
  );
}