import { Quote, Sparkles } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Elijah hat unser Onboarding komplett revolutioniert. Seine Automationen sparen uns wöchentlich Stunden und die Experience fühlt sich wie ein Boutique-Produkt an.',
    name: 'Lena Hartwig',
    role: 'COO @ GrowthForge',
  },
  {
    quote:
      'Die Personal-Brand-Seite sieht nicht nur fantastisch aus, sie performt auch. Wir konnten die Buchungen für Erstgespräche innerhalb von 6 Wochen verdoppeln.',
    name: 'Marco Klein',
    role: 'Founder @ CreatorLab',
  },
  {
    quote:
      'Von der Idee bis zum Launch war alles strukturiert, schnell und kreativ. Elijah kombiniert Strategie mit einem starken Gefühl für Design.',
    name: 'Sofia Mendes',
    role: 'Marketing Lead @ Nova.ai',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(192,132,252,0.18),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-100">
            <Sparkles className="h-4 w-4" />
            Stimmen
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">Was andere sagen</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Vertrauen entsteht durch Ergebnisse. Ein Auszug aus Projekten, die bleibenden Eindruck hinterlassen haben.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/40"
            >
              <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
              <span className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <Quote className="relative z-10 h-10 w-10 text-fuchsia-300" />
              <blockquote className="relative z-10 mt-6 flex-1 text-slate-200">{testimonial.quote}</blockquote>
              <figcaption className="relative z-10 mt-8">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
