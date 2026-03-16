export default function About() {
  return (
    <main
      className="min-h-screen px-6 py-20"
      style={{ background: "var(--page-bg)", color: "var(--text-primary)" }}
    >
      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold">
          About the Project
        </h1>

        <p>
          This project is an IoT-based smart plant monitoring system designed
          to measure soil moisture in real time using an ESP32 microcontroller
          and capacitive soil moisture sensor.
        </p>

        <p>
          Sensor data is transmitted to a cloud API where it is stored in a
          MongoDB database and visualized through a modern web dashboard
          built with Next.js.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Key Features
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Real-time soil moisture monitoring</li>
          <li>Historical moisture charts</li>
          <li>Device online/offline detection</li>
          <li>Dry soil alert system</li>
          <li>Cloud database storage</li>
          <li>ESP32 IoT sensor integration</li>
        </ul>

      </div>
    </main>
  );
}