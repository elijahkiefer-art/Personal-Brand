import { ArrowUpRight, Globe, Share2 } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Automation Playbook',
    category: 'AI Workflow',
    description:
      'Ein vollautomatisierter Lead-Qualifizierungs- und Follow-up-Prozess, der Sales-Teams mehr Zeit für echte Gespräche lässt.',
    metrics: 'Zeitersparnis: 12h/Woche',
    tools: ['OpenAI', 'Make.com', 'Notion'],
    link: '#contact',
  },
  {
    title: 'NeuroUI Launchpad',
    category: 'Web Experience',
    description:
      'Launch einer KI-inspirierten Web Experience für ein SaaS-Startup mit interaktiven Demos und responsiven UI-Komponenten.',
    metrics: 'Conversion +38%',
    tools: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#contact',
  },
  {
    title: 'Creator Command Center',
    category: 'Personal Branding',
    description:
      'Digitale Präsenz für einen Content Creator inklusive Content-Planung, Newsletter-Automationen und Ressourcenbibliothek.',
    metrics: '500+ neue Subscriber',
    tools: ['React', 'Supabase', 'Zapier'],
    link: '#contact',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <Share2 className="h-4 w-4" />
            Projekte
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">Signatur-Projekte</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Eine Auswahl an Projekten, die zeigen, wie ich Technologie, Design und Strategie verbinde.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
            >
              <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
              <span className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-950/60 text-cyan-200">
                  <Globe className="h-5 w-5" />
                </span>
              </div>

              <p className="relative z-10 mt-6 text-slate-300 leading-relaxed">{project.description}</p>

              <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3 text-sm text-cyan-200/90">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/60 px-3 py-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
                    {tool}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-between text-sm text-slate-400">
                <span className="font-medium text-cyan-200">{project.metrics}</span>
                <a
                  href={project.link}
                  className="group/cta inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-500/20"
                >
                  Projekt anfragen
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
