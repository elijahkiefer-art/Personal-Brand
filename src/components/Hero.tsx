import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 flex items-center justify-center relative overflow-hidden scroll-mt-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(124,58,237,0.25),_transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.2),_transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(12,74,110,0.35),_transparent_55%)] opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8 opacity-0 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Elijah Kiefer
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.6)]"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 opacity-0 animate-fade-in animation-delay-200">
            Dualer Student | AI Automation Specialist | Web Designer
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-400">
            Ich entwickle intelligente Automatisierungslösungen und moderne Webdesigns,
            die Unternehmen helfen, effizienter zu arbeiten und digital zu wachsen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in animation-delay-600">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-white transition-all duration-500"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 opacity-90 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
              <span className="relative flex items-center gap-2">
              Projekt starten
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-cyan-200 transition-all duration-500"
            >
              <span className="absolute inset-0 rounded-full border border-cyan-400/40 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-300/70 group-hover:bg-slate-900/80" aria-hidden="true" />
              <span className="absolute inset-[1px] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <span className="relative flex items-center gap-2">
              Meine Services
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center opacity-0 animate-fade-in animation-delay-800">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900/70 text-slate-300 transition-all duration-500 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.45)]"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-fuchsia-500/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900/70 text-slate-300 transition-all duration-500 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.45)]"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-fuchsia-500/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900/70 text-slate-300 transition-all duration-500 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.45)]"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-fuchsia-500/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-left sm:grid-cols-3 opacity-0 animate-fade-in animation-delay-1000">
            {[ 
              {
                label: 'Status',
                value: 'Offen für neue Projekte Q2',
              },
              {
                label: 'Standort',
                value: 'Stuttgart · Remote first',
              },
              {
                label: 'Antwortzeit',
                value: 'Ø 24 Stunden',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative z-10 text-xs uppercase tracking-[0.3em] text-cyan-200/80">{item.label}</div>
                <div className="relative z-10 mt-3 text-lg font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-[1200ms]">
        <div className="w-6 h-10 rounded-full border border-cyan-400/50 bg-slate-900/60 backdrop-blur-xl">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
