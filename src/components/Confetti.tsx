export function Confetti() {
  const pieces = Array.from({ length: 24 }, (_, i) => ({
    left: (i * 41) % 100,
    delay: (i % 8) * 1.2,
    duration: 8 + (i % 5),
    color: ["var(--gold)", "var(--blush)", "var(--sky)", "var(--gold-soft)"][i % 4],
    size: 6 + (i % 4) * 2,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-sm opacity-70"
          style={{
            left: `${p.left}%`,
            top: 0,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            background: p.color,
            animation: `confetti-fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
