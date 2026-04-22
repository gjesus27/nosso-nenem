import { Confetti } from "@/components/Confetti";
import { Countdown } from "@/components/Countdown";
import { FloatingBalloons } from "@/components/FloatingBalloons";
import { Hero } from "@/components/Hero";
import { RsvpForm } from "@/components/RsvpForm";
import couple from "@/assets/gallery-couple.jpeg";
import test from "@/assets/gallery-test.jpeg";
import us1 from "@/assets/gallery-ultrasound-1.jpeg";
import us2 from "@/assets/gallery-ultrasound-2.jpeg";
import teddy from "@/assets/teddy.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function openLocation() {
  const wazeUrl =
    "https://waze.com/ul?q=Av.%20Francisco%20Poeta%20das%20Chagas%20297%20Diadema";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Av. Francisco Poeta das Chagas, 297, Serraria, Diadema");

  const wazeWindow = window.open(wazeUrl, "_blank");
  if (!wazeWindow) {
    window.location.href = mapsUrl;
    return;
  }

  setTimeout(() => {
    try {
      if (wazeWindow.closed === false) return;
    } catch {
      // Ignore cross-origin access errors.
    }
  }, 1500);
}

export default function App() {
  useScrollReveal();

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <FloatingBalloons />
      <Confetti />

      <Hero />

      <section className="relative px-6 py-20 sm:py-24">
        <div className="reveal-on-scroll glass shadow-elegant mx-auto max-w-2xl rounded-3xl px-8 py-12 text-center sm:px-14 sm:py-16">
          <div className="mb-6 flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold-soft" />
            <span className="font-script text-lg">palavra de Deus</span>
            <span className="h-px w-10 bg-gold-soft" />
          </div>
          <blockquote className="font-display text-2xl font-light italic leading-relaxed text-foreground sm:text-3xl md:text-4xl">
            "Os filhos são{" "}
            <span className="text-gradient-gold not-italic font-medium">herança do Senhor</span>,
            uma recompensa que ele dá."
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Salmos 127:3 · NVI
          </p>
        </div>
      </section>

      <section
        id="evento"
        className="relative px-6 py-24 sm:py-32"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal-on-scroll font-script text-2xl text-gradient-gold">
            Salve a data
          </p>
          <h2 className="reveal-on-scroll font-display mt-3 text-4xl font-light text-foreground sm:text-5xl">
            Te esperamos para esse momento
            <br />
            <em className="italic">tão especial</em>
          </h2>

          <div className="reveal-on-scroll glass shadow-elegant mx-auto mt-12 max-w-xl rounded-3xl p-8 sm:p-12">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Sábado
                </div>
                <div className="font-display mt-1 text-6xl font-light text-gradient-gold sm:text-7xl">
                  25
                </div>
                <div className="font-display text-lg italic text-foreground">abril · 2026</div>
              </div>
              <div className="h-24 w-px bg-gold-soft" />
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Horário
                </div>
                <div className="font-display mt-1 text-5xl font-light text-foreground sm:text-6xl">
                  18<span className="text-gold">:</span>00
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gold-soft/40 pt-6">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Local
              </div>
              <p className="font-display mt-2 text-xl text-foreground sm:text-2xl">
                Av. Francisco Poeta das Chagas, 297
              </p>
              <p className="text-sm text-muted-foreground">Serraria · Diadema</p>

              <button
                onClick={openLocation}
                className="btn-elegant mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-soft"
                style={{ background: "var(--gradient-gold)" }}
              >
                <span aria-hidden>📍</span> Ver Local
              </button>
            </div>
          </div>

          <div className="reveal-on-scroll mt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Faltam
            </p>
            <Countdown />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-2xl">
          <img
            src={teddy}
            alt=""
            aria-hidden
            width={768}
            height={768}
            className="animate-float-medium reveal-on-scroll mx-auto mb-8 h-28 w-28 opacity-90"
            loading="lazy"
          />
          <blockquote className="reveal-on-scroll font-display text-2xl font-light italic leading-relaxed text-foreground sm:text-4xl">
            "Nossa maior alegria será ter
            <br />
            <span className="text-gradient-gold">você com a gente</span>
            <br />
            nesse momento tão especial."
          </blockquote>
        </div>
      </section>

      <section
        className="relative px-6 py-24 sm:py-32"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="reveal-on-scroll font-script text-2xl text-gradient-gold">
              Nossa história
            </p>
            <h2 className="reveal-on-scroll font-display mt-3 text-4xl font-light sm:text-5xl">
              Cada momento <em className="italic">guardado</em> com amor
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {[
              { src: couple, alt: "Foto do casal", tall: true },
              { src: us1, alt: "Ultrassom" },
              { src: us2, alt: "Ultrassom" },
              { src: test, alt: "Momento especial", tall: true },
            ].map((img, index) => (
              <div
                key={index}
                className={`reveal-on-scroll btn-elegant shadow-elegant group relative overflow-hidden rounded-2xl ${
                  img.tall ? "row-span-2 aspect-[3/5]" : "aspect-square"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 text-center sm:py-32">
        <div className="reveal-on-scroll mx-auto max-w-xl">
          <p className="font-script text-2xl text-gradient-gold">🎁 Sugestão de mimo</p>
          <h2 className="font-display mt-3 text-3xl font-light sm:text-4xl">
            Se desejar nos presentear com carinho
          </h2>
          <div className="glass shadow-soft mt-8 rounded-2xl p-8">
            <p className="font-display text-2xl italic text-foreground sm:text-3xl">
              Fraldas tamanho <span className="text-gradient-gold not-italic">M ou G</span>{" "}
              <span aria-hidden>💛</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Mas o mais importante é a sua presença
            </p>
          </div>
        </div>
      </section>

      <section
        id="rsvp"
        className="relative px-6 py-24 sm:py-32"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <p className="reveal-on-scroll font-script text-2xl text-gradient-gold">
              💛 Confirme sua presença
            </p>
            <h2 className="reveal-on-scroll font-display mt-3 text-4xl font-light sm:text-5xl">
              Você é parte <em className="italic">dessa história</em>
            </h2>
            <p className="reveal-on-scroll mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              Preencha rapidinho para sabermos te esperar com todo carinho.
            </p>
          </div>

          <div className="reveal-on-scroll mt-10">
            <RsvpForm />
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-12 bg-gold-soft" />
            <span className="font-script text-xl">com amor</span>
            <span className="h-px w-12 bg-gold-soft" />
          </div>
          <p className="font-display text-2xl font-light italic text-foreground sm:text-3xl">
            "Esperamos você para viver esse
            <br />
            momento <span className="text-gradient-gold not-italic">inesquecível</span> conosco."
          </p>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            25 · 04 · 2026 · Diadema
          </p>
        </div>
      </footer>
    </main>
  );
}
