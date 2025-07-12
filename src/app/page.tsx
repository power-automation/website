import fs from "fs";
import path from "path";
import LogoCarousel from "@/components/LogoCarousel";
import HomeCarousel from "@/components/HomeCarousel";

export default function Home() {
  const logosDir = path.join(process.cwd(), "public", "logos carousel");
  const files = fs.readdirSync(logosDir).filter((file) =>
    /\.(png|jpe?g|svg|webp|gif)$/.test(file)
  );
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
          <HomeCarousel />
        </div>
      </div>
      <main className="py-10">
        <h2 className="text-2xl font-semibold text-green-600 p-5">Brands We Support</h2>
        <LogoCarousel files={files} />
        <section className="mb-10 p-5">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Repairable Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-bold">
            {[
              "AC Drives (VFD)", "DC Drives", "PLCs (CPU, Digital & Analog Modules)", "HMI Displays",
              "Servo Motors", "Servo Drives", "SMPS (Power Supply)", "Actuators", "Analog Circuits",
              "CNC Controllers & Displays", "DCS Cards", "Electron Microscope", "Encoders & Resolvers",
              "Field Exciters", "Flame & Burner Controller", "Flow Meter", "Generator Controls",
              "Hydraulic Valves", "Industrial Monitor S69", "Level Controllers", "Logic Circuits",
              "Medical Devices", "Microcontrollers & Microprocessors", "Operator Interfaces",
              "Panel Meters", "Pneumatic Valve", "Power Controllers", "Pressure Control Units",
              "Process Control Units", "Sequence Controllers", "Signal Converters", "Signal Transmitters",
              "Soft Starters", "Stepper Motor Controllers", "Valve Controllers"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-800 text-white rounded px-3 py-2 shadow">
                <span className="text-green-400">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
