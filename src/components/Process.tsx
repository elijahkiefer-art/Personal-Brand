import type { ComponentType } from 'react';
import { BrainCircuit, Compass, Rocket, Workflow } from 'lucide-react';

type Step = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  detail: string;
};

const STEPS: Step[] = [
  {
    icon: Compass,
    title: 'Discovery & Vision',
    description: 'Wir definieren Ziele, Zielgruppe und Impact.',
    detail: 'Kickoff-Workshop, Brand-Audit, Zieldefinition',
  },
  {
    icon: BrainCircuit,
    title: 'Concept & Strategy',
    description: 'Strukturierte Roadmap mit KI-gestützten Insights.',
    detail: 'User Journeys, Automations, Content-Plan',
  },
  {
    icon: Workflow,
    title: 'Build & Automate',
    description: 'Designsysteme, Prototyping und smarte Automationen.',
    detail: 'Design Sprints, Dev-Setup, Iterationen',
  },
  {
    icon: Rocket,
    title: 'Launch & Elevate',
    description: 'Rollout, Testing und kontinuierliches Monitoring.',
    detail: 'Launch Support, KPI Tracking, Optimierung',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6 scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.12),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Workflow</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Von der Idee bis zum Launch: ein klar strukturierter Prozess, der Qualität, Geschwindigkeit und Innovation vereint.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/40 via-blue-500/30 to-transparent md:block" />
          <div className="space-y-12">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col gap-6 rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 md:flex-row ${
                    isLeft ? 'md:pr-24 md:text-right' : 'md:flex-row-reverse md:pl-24 md:text-left'
                  }`}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" aria-hidden="true" />
                  <div className="relative z-10 flex flex-col gap-3 md:w-1/2">
                    <div className="inline-flex items-center gap-3 self-start rounded-full border border-cyan-400/30 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 md:self-auto md:justify-self-end">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-fuchsia-500/40 text-white shadow-[0_0_20px_rgba(34,211,238,0.45)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="relative z-10 md:w-1/2">
                    <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100">
                      {step.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
