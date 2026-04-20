import { useEffect, useState } from "react";
import heroSky from "@/assets/hero-sky.jpg";
import teddy from "@/assets/teddy.png";
import { SkyBackground } from "./SkyBackground";

export function Hero() {
  const [stage, setStage] = useState(0);
  // 0: "Nosso presentinho..."   1: "E queremos você conosco..."   2: suspense   3: revelação final

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 3200),
      setTimeout(() => setStage(2), 6400),
      setTimeout(() => setStage(3), 9000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      {/* Sky image bg */}
      <img
        src={heroSky}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--background) 20%, transparent) 0%, color-mix(in oklab, var(--background) 60%, transparent) 60%, var(--background) 100%)",
        }}
      />

      <SkyBackground />

      {/* Floating teddy */}
      <img
        src={teddy}
        alt="Ursinho"
        width={768}
        height={768}
        className="animate-float-slow pointer-events-none absolute right-2 top-6 z-[1] h-32 w-32 opacity-90 sm:right-12 sm:top-12 sm:h-44 sm:w-44 md:h-56 md:w-56"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="font-script mb-4 text-2xl text-gradient-gold sm:text-3xl animate-reveal-up">
          Chá Revelação
        </p>

        <div className="min-h-[7rem] sm:min-h-[9rem]">
          {stage === 0 && (
            <h1 className="animate-suspense font-display text-3xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
              Nosso presentinho de Deus
              <br />
              <span className="italic text-gradient-gold">está chegando</span>
            </h1>
          )}
          {stage === 1 && (
            <h1 className="animate-suspense font-display text-2xl font-light leading-tight text-foreground sm:text-4xl md:text-5xl">
              E queremos você conosco
              <br />
              <span className="italic">para descobrir…</span>
            </h1>
          )}
          {stage === 2 && (
            <h1 className="animate-suspense font-display text-3xl font-light tracking-[0.4em] text-foreground sm:text-5xl">
              <span className="opacity-60">. . .</span>
            </h1>
          )}
          {stage === 3 && (
            <div className="animate-suspense space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Será
              </p>
              <h1 className="font-display flex flex-col items-center gap-2 text-5xl font-medium leading-tight sm:text-6xl md:text-7xl">
                <span className="text-gradient-gold drop-shadow-sm">Lucca Miguel</span>
                <span className="font-script text-2xl font-normal text-muted-foreground sm:text-3xl">
                  ou
                </span>
                <span className="text-gradient-gold drop-shadow-sm">
                  Maria Cecília<span className="ml-1 text-foreground">?</span>
                </span>
              </h1>
              <p className="font-script text-xl text-gold sm:text-2xl">
                ✨ Venha descobrir com a gente ✨
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#evento"
            className="btn-elegant glass rounded-full px-8 py-3 text-xs uppercase tracking-[0.3em] text-foreground hover:bg-gold-soft/40"
          >
            Ver convite
          </a>
          <span className="text-xs text-muted-foreground">25 · 04 · 2026</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold-soft/60 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
