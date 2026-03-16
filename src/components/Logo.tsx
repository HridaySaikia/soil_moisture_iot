export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-blue-500">
        
        {/* plant */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute"
        >
          <path
            d="M12 18V10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 10C10 6 6 6 6 6C6 10 9 12 12 10Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M12 10C14 6 18 6 18 6C18 10 15 12 12 10Z"
            fill="white"
            opacity="0.9"
          />
        </svg>

        {/* wifi signal */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute -top-2"
        >
          <path
            d="M5 12C8.5 9 15.5 9 19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 15C10.5 13 13.5 13 16 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="leading-tight">
        <p className="text-lg font-semibold">PlantMonitor</p>
        <p className="text-xs opacity-70">Smart IoT Platform</p>
      </div>
    </div>
  );
}