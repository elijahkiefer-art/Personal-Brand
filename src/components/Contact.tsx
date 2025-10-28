import type { LucideIcon } from 'lucide-react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

type ContactCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  actionLabel?: string;
};

const CONTACT_CARDS: ContactCard[] = [
  {
    icon: Mail,
    title: 'Email',
    description: 'hello@elijahkiefer.com',
    href: 'mailto:hello@elijahkiefer.com',
    actionLabel: 'hello@elijahkiefer.com',
  },
  {
    icon: MessageSquare,
    title: 'Verfügbarkeit',
    description: 'Ich antworte in der Regel innerhalb von 24 Stunden',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kontakt
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Bereit, dein nächstes Projekt zu starten? Schreib mir eine Nachricht und lass uns darüber sprechen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900/70 text-cyan-300">
                      <span className="absolute inset-0 rounded-xl border border-cyan-400/30" aria-hidden="true" />
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-white font-semibold">{card.title}</h3>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-cyan-300"
                        >
                          <span className="h-1 w-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_6px_rgba(34,211,238,0.7)]" />
                          {card.actionLabel}
                        </a>
                      ) : (
                        <p className="text-slate-400">{card.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quote */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-6 backdrop-blur-xl">
              <span className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/30" aria-hidden="true" />
              <p className="relative z-10 text-slate-300 italic mb-4">
                "Die beste Zeit, um anzufangen, war gestern. Die zweitbeste Zeit ist jetzt."
              </p>
              <p className="relative z-10 text-slate-500 text-sm">— Lass uns loslegen</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" aria-hidden="true" />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 transition-colors duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 transition-colors duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  placeholder="deine@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 text-sm font-medium">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 transition-colors duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  placeholder="Erzähl mir von deinem Projekt..."
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-4 text-base font-semibold text-white transition-all duration-500"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 opacity-90 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <span className="absolute inset-[1px] rounded-full border border-white/10" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-80" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(165,243,252,0.45), transparent 55%)' }} aria-hidden="true" />
                <span className="relative flex items-center gap-2">
                  Nachricht senden
                  <Send className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8">
          <div className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
          <p className="text-slate-500 text-sm">
            © 2025 Elijah Kiefer. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </section>
  );
}
