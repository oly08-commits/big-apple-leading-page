import React from "react";
import "./style.css";

const WAVES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  height: Math.floor(Math.random() * 70) + 30,
  delay: `${(Math.random() * 0.8).toFixed(2)}s`,
  duration: `${(Math.random() * 0.5 + 0.6).toFixed(2)}s`,
}));

export default function WavesScreen() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4">
      <div
        className="
          flex h-20 w-full max-w-xl
          items-center justify-center
          gap-[3px] overflow-hidden
        "
      >
        {WAVES.map((wave) => (
          <span
            key={wave.id}
            className="
              w-[3px] min-w-[3px]
              rounded-full
              bg-green-500
              animate-wave
            "
            style={{
              height: `${wave.height}%`,
              animationDelay: wave.delay,
              animationDuration: wave.duration,
            }}
          />
        ))}
      </div>
    </main>
  );
}
