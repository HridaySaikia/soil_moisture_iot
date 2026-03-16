export default function About() {
  return (
    <main
      className="min-h-screen px-6 py-24"
      style={{
        background: "var(--page-bg)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-3xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold">
          About This Project
        </h1>

        <p style={{ color: "var(--text-secondary)" }}>
          This project demonstrates a full-stack IoT system for monitoring soil
          moisture using embedded sensors and a cloud dashboard.
        </p>

        <h2 className="text-2xl font-semibold">
          Technology Stack
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>ESP32 Microcontroller</li>
          <li>Capacitive Soil Moisture Sensor</li>
          <li>Next.js Web Dashboard</li>
          <li>MongoDB Atlas Cloud Database</li>
          <li>REST API Communication</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Project Objective
        </h2>

        <p style={{ color: "var(--text-secondary)" }}>
          The goal of this system is to enable intelligent plant monitoring
          through IoT devices that transmit environmental data to a cloud
          platform for analysis and visualization.
        </p>

      </div>
    </main>
  );
}