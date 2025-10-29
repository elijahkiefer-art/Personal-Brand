import type { LucideIcon } from 'lucide-react';
import { Code, Dumbbell, Target, Zap } from 'lucide-react';

type Interest = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const INTERESTS: Interest[] = [
  {
    icon: Code,
    title: 'AI Automations',
    description: 'Entwicklung intelligenter Automatisierungslösungen, die Prozesse optimieren und Zeit sparen.',
  },
  {
    icon: Target,
    title: 'Web Design',
    description: 'Kreation moderner, responsiver Websites mit Fokus auf User Experience und Performance.',
  },
  {
    icon: Dumbbell,
    title: 'Sport & Fitness',
    description: 'Leidenschaftlicher Fußballer und Gym-Enthusiast. Balance zwischen Code und Kraft.',
  },
  {
    icon: Zap,
    title: 'Duales Studium',
    description: 'Kombination aus praktischer Erfahrung und theoretischem Wissen in der Tech-Branche.',
  },
];

const STATS = [
  { label: 'Engagement', value: '100%' },
  { label: 'Fokus', value: 'AI' },
  { label: 'Motivation', value: '24/7' },
  { label: 'Potenzial', value: '∞' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Über mich
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ein dualer Student mit einer Leidenschaft für Technologie, Design und einem aktiven Lebensstil.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {INTERESTS.map((interest) => {
            const Icon = interest.icon;

            return (
              <div
                key={interest.title}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900/70 text-cyan-300">
                  <span className="absolute inset-0 rounded-xl border border-cyan-400/25" aria-hidden="true" />
                  <span className="absolute -inset-2 -z-10 rounded-[22px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <Icon aria-hidden="true" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {interest.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 text-center backdrop-blur-xl"
            >
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" aria-hidden="true" />
              <div className="relative z-10 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text">
                {stat.value}
              </div>
              <div className="relative z-10 mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
