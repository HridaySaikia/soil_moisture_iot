export default function SignalWavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1440" y2="900">
            <stop offset="0%" stopColor="rgba(59,130,246,0.16)" />
            <stop offset="55%" stopColor="rgba(99,102,241,0.14)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.12)" />
          </linearGradient>

          <linearGradient id="glowLine" x1="0" y1="0" x2="1440" y2="900">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1440" height="900" fill="transparent" />

        {Array.from({ length: 18 }).map((_, i) => {
          const y = 40 + i * 42;
          return (
            <path
              key={i}
              d={`M -80 ${y} Q 360 ${y - 90} 720 ${y} T 1520 ${y}`}
              stroke="url(#waveStroke)"
              strokeWidth="1.2"
              opacity={0.7 - i * 0.02}
              fill="none"
            />
          );
        })}

        <g filter="url(#softGlow)">
          <path
            d="M 1040 110 Q 1120 155 1200 215 T 1380 330"
            stroke="url(#glowLine)"
            strokeWidth="1.8"
            opacity="0.9"
            fill="none"
          />
          <path
            d="M 1120 540 Q 1180 575 1240 630 T 1400 760"
            stroke="url(#glowLine)"
            strokeWidth="1.5"
            opacity="0.8"
            fill="none"
          />
          <path
            d="M 180 90 Q 260 135 340 200 T 500 315"
            stroke="url(#glowLine)"
            strokeWidth="1.3"
            opacity="0.7"
            fill="none"
          />
          <path
            d="M 620 690 Q 720 735 830 790 T 1080 900"
            stroke="url(#glowLine)"
            strokeWidth="1.5"
            opacity="0.75"
            fill="none"
          />
        </g>
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(99,102,241,0.10), transparent 30%), radial-gradient(circle at 15% 85%, rgba(14,165,233,0.10), transparent 24%)",
        }}
      />
    </div>
  );
}