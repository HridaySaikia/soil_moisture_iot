export default function SignalWavesBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute w-[200%] h-[200%] opacity-20"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200 Q200 100 400 200 T800 200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <path
          d="M0 300 Q200 200 400 300 T800 300"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <path
          d="M0 400 Q200 300 400 400 T800 400"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <path
          d="M0 500 Q200 400 400 500 T800 500"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}