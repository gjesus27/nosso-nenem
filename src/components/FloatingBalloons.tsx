export function FloatingBalloons() {
  const balloons = [
    { left: 8, color: "var(--blush)", delay: 0, duration: 22 },
    { left: 22, color: "var(--sky)", delay: 6, duration: 28 },
    { left: 78, color: "var(--gold-soft)", delay: 3, duration: 25 },
    { left: 92, color: "var(--blush)", delay: 10, duration: 30 },
    { left: 50, color: "var(--sky)", delay: 14, duration: 26 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {balloons.map((b, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${b.left}%`,
            bottom: 0,
            animation: `balloon-rise ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <div
            className="h-14 w-12 rounded-full opacity-70 shadow-soft"
            style={{
              background: `radial-gradient(circle at 35% 30%, color-mix(in oklab, ${b.color} 60%, white), ${b.color})`,
            }}
          />
          <div
            className="mx-auto h-16 w-px"
            style={{ background: "color-mix(in oklab, var(--ink) 30%, transparent)" }}
          />
        </div>
      ))}
    </div>
  );
}
