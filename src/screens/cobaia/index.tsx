import React from "react";

const contributionGraph = Array.from({ length: 12 }, () =>
  Array.from({ length: 7 }, () =>
    Array.from({ length: 4 }, () => Math.floor(Math.random() * 7)),
  ),
);

const months = Array.from({ length: 12 }, (_, i) =>
  new Intl.DateTimeFormat("pt-BR", {
    month: "short",
  }).format(new Date(2026, i, 1)),
);

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export default function LocalCobaia() {
  console.log(months);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex gap-2 ">
        {/* Dias */}
        <div className="grid grid-rows-7 gap-1 pt-5 mr-2">
          {weekDays.map((day) => (
            <span
              key={day}
              className="size-3 text-[8px] leading-3 text-slate-400"
            >
              {day}
            </span>
          ))}
        </div>

        {/* Meses */}
        {contributionGraph.map((month, monthIndex) => (
          <div key={monthIndex}>
            <span className="block h-4 text-xs mb-2s text-slate-400">
              {months[monthIndex]}
            </span>

            <div className="grid grid-cols-4 gap-1">
              {month.map((day, dayIndex) =>
                day.map((contribution, weekIndex) => (
                  <div
                    key={`${monthIndex}-${dayIndex}-${weekIndex}`}
                    className="size-3 border rounded overflow-hidden border-slate-400"
                  >
                    <div
                      style={{ opacity: contribution / 6 }}
                      className="size-full bg-blue-600"
                    />
                  </div>
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
