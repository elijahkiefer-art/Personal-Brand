import { useEffect, useId, useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';

const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Über mich' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projekte' },
  { href: '#process', label: 'Workflow' },
  { href: '#testimonials', label: 'Stimmen' },
  { href: '#contact', label: 'Kontakt' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const mobileMenuId = useId();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => setActiveSection(`#${entry.target.id}`));
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.25,
      },
    );

    navigationLinks.forEach((link) => {
      const element = document.getElementById(link.href.slice(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-3xl' : 'backdrop-blur-xl'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent" />
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6"
        aria-label="Hauptnavigation"
      >
        <div
          className={`relative flex w-full items-center justify-between gap-6 overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/80 px-5 py-4 backdrop-blur-2xl transition-all duration-500 ${
            isScrolled ? 'shadow-[0_25px_60px_-30px_rgba(14,165,233,0.65)]' : 'shadow-[0_30px_80px_-45px_rgba(14,165,233,0.55)]'
          }`}
        >
          <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5" aria-hidden="true" />
          <span className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 opacity-30 blur-xl" aria-hidden="true" />
          <span className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" aria-hidden="true" />

          <a
            href="#home"
            className="group relative z-10 flex items-center gap-3 text-white"
            onClick={closeMenu}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/40 transition-transform duration-500 group-hover:scale-105">
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
            </span>
            <div className="text-left">
              <p className="text-[0.7rem] uppercase tracking-[0.45em] text-cyan-200/70">Elijah Kiefer</p>
              <p className="text-lg font-semibold text-white">AI Innovation Studio</p>
            </div>
          </a>

          <ul className="relative z-10 hidden items-center gap-2 md:flex">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 blur-md transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute inset-[1px] rounded-full bg-slate-900/60 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-slate-500 group-hover:bg-cyan-300'
                        }`}
                      />
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 hidden md:flex">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500/80 via-blue-600/70 to-fuchsia-600/80 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40 transition-all duration-300 hover:shadow-cyan-400/60"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              Projekt starten
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="relative z-10 inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/70 p-2 text-slate-200 transition-all duration-300 hover:border-cyan-400/60 hover:text-white md:hidden"
            aria-label="Navigation öffnen"
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" aria-hidden="true" />
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id={mobileMenuId}
        className={`md:hidden transform border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-400/40 bg-cyan-500/10 text-white'
                        : 'text-slate-200 hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:text-white'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]' : 'bg-slate-500'
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            onClick={closeMenu}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/80 via-blue-600/70 to-fuchsia-600/80 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40 transition-all duration-300 hover:shadow-cyan-400/60"
          >
            Projekt starten
          </a>
        </div>
      </div>
    </header>
  );
}
