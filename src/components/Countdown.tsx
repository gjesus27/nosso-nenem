import { useEffect, useState } from "react";

const TARGET = new Date("2026-04-25T18:00:00-03:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Dias", value: t.days },
    { label: "Horas", value: t.hours },
    { label: "Minutos", value: t.minutes },
    { label: "Segundos", value: t.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5">
      {items.map((it) => (
        <div
          key={it.label}
          className="glass shadow-soft btn-elegant flex flex-col items-center justify-center rounded-2xl px-2 py-4 sm:py-6"
        >
          <div
            className="font-display text-3xl font-light tabular-nums sm:text-5xl text-gradient-gold"
            suppressHydrationWarning
          >
            {mounted ? String(it.value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
