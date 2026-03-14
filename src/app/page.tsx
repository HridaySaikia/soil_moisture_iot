import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Real-Time Plant Monitoring System</h1>
        <p className="text-gray-300">
          IoT-powered soil moisture visualization and alerts
        </p>
        <Link
          className="inline-block rounded-xl bg-white text-gray-900 px-5 py-2 font-medium hover:opacity-90"
          href="/dashboard"
        >
          Open Dashboard →
        </Link>
      </div>
    </main>
  );
}