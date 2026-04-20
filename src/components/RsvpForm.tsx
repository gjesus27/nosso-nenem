import { useState } from "react";

const WHATSAPP_NUMBER = "5511999999999"; // placeholder — pode ser editado

export function RsvpForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("0");
  const [kids, setKids] = useState<"Sim" | "Não">("Não");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Olá! Quero confirmar presença no chá revelação.

Nome: ${name || "—"}
Quantidade de acompanhantes: ${guests}
Vou levar crianças? ${kids}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="glass shadow-elegant rounded-3xl p-6 sm:p-10">
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Seu nome
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como você se chama?"
            className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold-soft"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Acompanhantes
            </label>
            <input
              type="number"
              min="0"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold-soft"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Levará crianças?
            </label>
            <div className="flex gap-2">
              {(["Não", "Sim"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setKids(opt)}
                  className={`btn-elegant flex-1 rounded-xl border px-4 py-3 text-sm transition ${
                    kids === opt
                      ? "border-gold bg-gold-soft/40 text-foreground"
                      : "border-border bg-background/60 text-muted-foreground hover:border-gold-soft"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn-elegant animate-glow-pulse mt-2 w-full rounded-2xl px-6 py-4 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground"
          style={{ background: "var(--gradient-gold)" }}
        >
          Confirmar Presença no WhatsApp
        </button>
        <p className="text-center text-xs text-muted-foreground">
          Ao confirmar, abriremos o WhatsApp com sua mensagem prontinha 💛
        </p>
      </div>
    </form>
  );
}
