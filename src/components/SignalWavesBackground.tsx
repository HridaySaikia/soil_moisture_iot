export default function SignalWavesBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute w-[200%] h-[200%] opacity-20"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave 1 */}
        <path
          d="M0 200 Q200 100 400 200 T800 200 T1200 200 T1600 200"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />

        {/* Wave 2 */}
        <path
          d="M0 300 Q200 200 400 300 T800 300 T1200 300 T1600 300"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />

        {/* Wave 3 */}
        <path
          d="M0 400 Q200 300 400 400 T800 400 T1200 400 T1600 400"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />

        {/* Wave 4 */}
        <path
          d="M0 500 Q200 400 400 500 T800 500 T1200 500 T1600 500"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />

        {/* Wave 5 */}
        <path
          d="M0 600 Q200 500 400 600 T800 600 T1200 600 T1600 600"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />

        {/* Wave 6 */}
        <path
          d="M0 700 Q200 600 400 700 T800 700 T1200 700 T1600 700"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}