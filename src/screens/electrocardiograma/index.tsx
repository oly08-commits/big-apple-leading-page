import React from "react";

const ECG_BEAT = [
  0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, -1, -3, 0, 12, -6, -2, 0, 0, 0,
  0, 1, 3, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0,
];

const ECG = [...ECG_BEAT, ...ECG_BEAT, ...ECG_BEAT, ...ECG_BEAT];

function createPoints(
  data: number[],
  width: number,
  height: number,
  scale = 4,
) {
  const center = height / 2;
  const step = width / (data.length - 1);

  return data
    .map((value, index) => {
      const x = index * step;
      const y = center - value * scale;

      return `${x},${y}`;
    })
    .join(" ");
}

export default function ECGScreen() {
  const width = 1000;
  const height = 200;

  const points = createPoints(ECG, width, height);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-green-900/30 bg-black">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          {/* Grid horizontal */}
          <g className="text-green-500/10" stroke="currentColor">
            {Array.from({ length: 9 }).map((_, i) => {
              const y = (height / 8) * i;

              return <line key={`h-${i}`} x1="0" y1={y} x2={width} y2={y} />;
            })}

            {/* Grid vertical */}
            {Array.from({ length: 21 }).map((_, i) => {
              const x = (width / 20) * i;

              return <line key={`v-${i}`} x1={x} y1="0" x2={x} y2={height} />;
            })}
          </g>

          {/* ECG */}
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
          />
        </svg>
      </div>
    </main>
  );
}
