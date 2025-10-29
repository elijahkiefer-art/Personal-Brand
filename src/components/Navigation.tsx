import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  PanelsTopLeft,
  Sparkles,
  Workflow,
  Rocket,
  Quote,
  Mail,
  Users,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navigationItems: NavigationItem[] = [
  { href: '#home', label: 'Home', icon: PanelsTopLeft },
  { href: '#about', label: 'Über mich', icon: Users },
  { href: '#services', label: 'Services', icon: Bot },
  { href: '#projects', label: 'Projekte', icon: Rocket },
  { href: '#process', label: 'Workflow', icon: Workflow },
  { href: '#testimonials', label: 'Stimmen', icon: Quote },
  { href: '#contact', label: 'Kontakt', icon: Mail },
];

type IndicatorVariant = 'desktop' | 'mobile';

const indicatorEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const desktopHighlightRef = useRef<HTMLDivElement | null>(null);
  const mobileHighlightRef = useRef<HTMLDivElement | null>(null);
  const desktopItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mobileItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const registerItem = useCallback(
    (variant: IndicatorVariant, href: string) =>
      (element: HTMLAnchorElement | null) => {
        if (variant === 'desktop') {
          desktopItemRefs.current[href] = element;
        } else {
          mobileItemRefs.current[href] = element;
        }
      },
    [],
  );

  const updateIndicator = useCallback(
    (variant: IndicatorVariant) => {
      if (typeof window === 'undefined') {
        return;
      }

      const highlightRef = variant === 'desktop' ? desktopHighlightRef : mobileHighlightRef;
      const itemRefs = variant === 'desktop' ? desktopItemRefs.current : mobileItemRefs.current;
      const element = itemRefs[activeSection];
      const highlight = highlightRef.current;

      if (!highlight) {
        return;
      }

      if (!element || element.offsetParent === null) {
        highlight.style.opacity = '0';
        return;
      }

      const parent = element.offsetParent as HTMLElement | null;
      if (!parent) {
        return;
      }

      const parentRect = parent.getBoundingClientRect();
      const rect = element.getBoundingClientRect();
      const x = rect.left - parentRect.left;
      const width = rect.width;

      requestAnimationFrame(() => {
        highlight.style.opacity = '1';
        highlight.style.transform = `translateX(${x}px)`;
        highlight.style.width = `${width}px`;
      });
    },
    [activeSection],
  );

  const updateAllIndicators = useCallback(() => {
    updateIndicator('desktop');
    updateIndicator('mobile');
  }, [updateIndicator]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        rootMargin: '-40% 0px -45% 0px',
        threshold: 0.35,
      },
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.href.slice(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      updateAllIndicators();
    };

    const handleLoad = () => {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
      updateAllIndicators();
    };

    handleLoad();
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);
    window.addEventListener('hashchange', handleLoad);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('hashchange', handleLoad);
    };
  }, [updateAllIndicators]);

  useEffect(() => {
    updateAllIndicators();
  }, [activeSection, updateAllIndicators]);

  const desktopNav = useMemo(
    () => (
      <div className="hidden md:flex">
        <div className="relative flex items-center gap-6 overflow-hidden rounded-full border border-slate-800/60 bg-slate-950/80 px-6 py-3 backdrop-blur-2xl shadow-[0_20px_60px_-30px_rgba(56,189,248,0.55)]">
          <span className="pointer-events-none absolute inset-0 rounded-full border border-white/5" aria-hidden="true" />
          <span className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-fuchsia-500/25 opacity-40 blur-3xl" aria-hidden="true" />
          <span className="pointer-events-none absolute -inset-y-10 inset-x-24 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-transparent opacity-80 blur-3xl" aria-hidden="true" />

          <a
            href="#home"
            className="group relative flex items-center gap-3 rounded-full border border-transparent px-3 py-1.5 text-white transition-all duration-500 hover:border-cyan-400/40"
          >
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-slate-900/70">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/60 via-blue-500/30 to-fuchsia-500/60 opacity-80" aria-hidden="true" />
              <span className="absolute h-14 w-14 animate-spin-slow rounded-full border border-white/10" aria-hidden="true" />
              <Sparkles className="relative h-5 w-5 text-white transition-transform duration-500 group-hover:rotate-12" />
            </span>
            <div className="text-left">
              <p className="text-[0.7rem] uppercase tracking-[0.45em] text-cyan-200/70">Elijah Kiefer</p>
              <p className="text-lg font-semibold text-white">AI Innovation Studio</p>
            </div>
          </a>

          <div className="relative flex items-center">
            <div
              ref={desktopHighlightRef}
              className="pointer-events-none absolute inset-y-1 left-0 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/25 to-fuchsia-500/30 opacity-0 shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-500"
              style={{ transitionTimingFunction: indicatorEasing, transform: 'translateX(0)', width: '0px' }}
              aria-hidden="true"
            >
              <span className="absolute -top-3 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/80 via-blue-400/80 to-cyan-300/80" aria-hidden="true" />
            </div>
            <ul className="relative flex items-center gap-1 px-2 py-1 text-sm font-medium text-slate-300">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      ref={registerItem('desktop', item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2 transition-all duration-500 ${
                        isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="absolute inset-0 -z-10 rounded-full bg-slate-900/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                      <span className="absolute inset-0 -z-20 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-fuchsia-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                          isActive ? 'bg-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.65)]' : 'bg-slate-500 group-hover:bg-cyan-300'
                        }`}
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <a
            href="#contact"
            className="group relative hidden overflow-hidden rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/80 via-blue-600/70 to-fuchsia-600/80 px-5 py-2 text-sm font-semibold text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_35px_-20px_rgba(56,189,248,0.85)] md:inline-flex md:items-center md:gap-2"
          >
            <span className="absolute inset-0 -z-10 animate-nav-pulse rounded-full bg-gradient-to-r from-white/10 via-transparent to-white/10" aria-hidden="true" />
            Projekt starten
          </a>
        </div>
      </div>
    ),
    [activeSection, registerItem],
  );

  const mobileNav = useMemo(
    () => (
      <div className="md:hidden">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center pt-6">
          <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 backdrop-blur-xl shadow-[0_18px_45px_-25px_rgba(56,189,248,0.6)]">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-900/70">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/50 via-blue-500/30 to-fuchsia-500/50" aria-hidden="true" />
              <Sparkles className="relative h-5 w-5 text-white" />
            </span>
            <div className="text-left text-xs font-semibold text-slate-200">
              <p className="uppercase tracking-[0.4em] text-cyan-200/70">Elijah</p>
              <p className="text-sm">AI Innovation Studio</p>
            </div>
          </div>
        </div>
        <nav className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
          <div className="pointer-events-auto relative w-full max-w-xl overflow-hidden rounded-full border border-slate-800/60 bg-slate-950/85 px-2 py-2 backdrop-blur-2xl shadow-[0_25px_70px_-35px_rgba(59,130,246,0.65)]">
            <span className="pointer-events-none absolute -inset-[1px] rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-fuchsia-500/25 opacity-60 blur-2xl" aria-hidden="true" />
            <div
              ref={mobileHighlightRef}
              className="pointer-events-none absolute inset-y-1 left-2 rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-fuchsia-500/25 opacity-0 shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-all duration-500"
              style={{ transitionTimingFunction: indicatorEasing, transform: 'translateX(0)', width: '0px' }}
              aria-hidden="true"
            >
              <span className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/80 via-blue-400/80 to-cyan-300/80" aria-hidden="true" />
            </div>
            <ul className="relative flex items-center justify-between gap-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href} className="flex-1">
                    <a
                      href={item.href}
                      ref={registerItem('mobile', item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group relative flex flex-col items-center gap-1 rounded-full px-3 py-2 text-[0.75rem] font-semibold transition-all duration-500 ${
                        isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-900/60">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-fuchsia-500/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                        <Icon className={`relative h-5 w-5 transition-all duration-500 ${isActive ? 'text-cyan-200 drop-shadow-[0_0_12px_rgba(56,189,248,0.75)]' : 'text-slate-300 group-hover:text-cyan-200'}`} />
                      </span>
                      <span className="relative">
                        <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    ),
    [activeSection, registerItem],
  );

  return (
    <>
      <header className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'translate-y-0' : 'translate-y-0'}`}>
        <div className="pointer-events-auto hidden w-full max-w-6xl justify-center px-6 pt-6 md:flex">
          {desktopNav}
        </div>
      </header>
      {mobileNav}
    </>
  );
}
