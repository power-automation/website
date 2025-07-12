"use client";
import Image from "next/image";

export default function LogoCarousel({ files }: { files: string[] }) {
  return (
    <div className="w-full overflow-hidden py-8 bg-gray-800/0">
      <div className="flex items-center space-x-8 animate-marquee">
        {Array.from({ length: 2 }).map((_, i) => (
          <div className="flex items-center space-x-8" key={i}>
            {files.map((logo, idx) => (
              <Image
                key={logo + idx}
                src={`/logos carousel/${logo}`}
                alt={`Logo ${idx + 1}`}
                width={64}
                height={64}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
