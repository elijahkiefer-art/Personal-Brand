import type { LucideIcon } from 'lucide-react';
import { Bot, Layout, Sparkles, Workflow } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    icon: Bot,
    title: 'AI Automations',
    description: 'Intelligente Automatisierungslösungen mit modernster AI-Technologie.',
    features: ['Prozessautomatisierung', 'Chatbot-Entwicklung', 'Datenanalyse & ML', 'API-Integrationen'],
  },
  {
    icon: Layout,
    title: 'Web Design',
    description: 'Moderne, responsive Websites die begeistern und konvertieren.',
    features: ['Landing Pages', 'Corporate Websites', 'E-Commerce', 'UI/UX Design'],
  },
  {
    icon: Workflow,
    title: 'Workflow Optimization',
    description: 'Optimierung und Digitalisierung bestehender Geschäftsprozesse.',
    features: ['Prozessanalyse', 'Digitale Transformation', 'Tool-Integration', 'Effizienzsteigerung'],
  },
  {
    icon: Sparkles,
    title: 'Custom Solutions',
    description: 'Maßgeschneiderte Lösungen für individuelle Anforderungen.',
    features: ['Beratung', 'Individuelle Entwicklung', 'Support & Wartung', 'Skalierbare Systeme'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.45)] mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Von AI-Automatisierungen bis zu modernem Web Design – ich biete maßgeschneiderte Lösungen für deine digitalen
            Herausforderungen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900/70 text-cyan-300 transition-transform duration-500 group-hover:scale-110">
                  <span className="absolute inset-0 rounded-xl border border-cyan-400/30" aria-hidden="true" />
                  <span className="absolute -inset-2 -z-10 rounded-[22px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <Icon aria-hidden="true" className="h-10 w-10" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mb-6 mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="relative z-10 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Line */}
                <div className="relative z-10 mt-6 h-px w-full overflow-hidden rounded-full bg-slate-800">
                  <span className="block h-full w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Hast du ein Projekt im Kopf? Lass uns darüber sprechen.
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-base font-semibold text-white transition-all duration-500"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 opacity-90 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            <span className="absolute inset-[1px] rounded-full border border-white/10" aria-hidden="true" />
            <span
              className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
              aria-hidden="true"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(165,243,252,0.5), transparent 55%)' }}
            />
            <span className="relative">Kostenlose Beratung</span>
          </a>
        </div>
      </div>
    </section>
  );
}
