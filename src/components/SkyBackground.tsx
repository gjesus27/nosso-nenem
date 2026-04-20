export function SkyBackground() {
  // Deterministic positions to avoid SSR mismatch
  const stars = Array.from({ length: 40 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 100,
    size: 2 + (i % 3),
    delay: (i % 10) * 0.4,
    duration: 2.5 + (i % 5) * 0.5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-gold-soft"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 8px var(--gold-soft)",
          }}
        />
      ))}

      {/* Drifting clouds (CSS-only) */}
      <div
        className="absolute left-0 h-32 w-64 rounded-full opacity-60 blur-2xl"
        style={{
          top: "12%",
          background: "radial-gradient(ellipse, var(--cloud) 0%, transparent 70%)",
          animation: "drift 60s linear infinite",
        }}
      />
      <div
        className="absolute h-40 w-80 rounded-full opacity-50 blur-3xl"
        style={{
          top: "55%",
          background: "radial-gradient(ellipse, var(--cloud) 0%, transparent 70%)",
          animation: "drift 90s linear infinite",
          animationDelay: "-20s",
        }}
      />
      <div
        className="absolute h-24 w-56 rounded-full opacity-40 blur-2xl"
        style={{
          top: "78%",
          background: "radial-gradient(ellipse, var(--cloud) 0%, transparent 70%)",
          animation: "drift 75s linear infinite",
          animationDelay: "-40s",
        }}
      />
    </div>
  );
}
