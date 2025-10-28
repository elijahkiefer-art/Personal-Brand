import { Bot, Layout, Workflow, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: 'AI Automations',
      description: 'Intelligente Automatisierungslösungen mit modernster AI-Technologie.',
      features: [
        'Prozessautomatisierung',
        'Chatbot-Entwicklung',
        'Datenanalyse & ML',
        'API-Integrationen',
      ],
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: 'Web Design',
      description: 'Moderne, responsive Websites die begeistern und konvertieren.',
      features: [
        'Landing Pages',
        'Corporate Websites',
        'E-Commerce',
        'UI/UX Design',
      ],
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: 'Workflow Optimization',
      description: 'Optimierung und Digitalisierung bestehender Geschäftsprozesse.',
      features: [
        'Prozessanalyse',
        'Digitale Transformation',
        'Tool-Integration',
        'Effizienzsteigerung',
      ],
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Custom Solutions',
      description: 'Maßgeschneiderte Lösungen für individuelle Anforderungen.',
      features: [
        'Beratung',
        'Individuelle Entwicklung',
        'Support & Wartung',
        'Skalierbare Systeme',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Von AI-Automatisierungen bis zu modernem Web Design – ich biete maßgeschneiderte Lösungen für deine digitalen Herausforderungen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-cyan-400 transition-colors group-hover:scale-110 duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Hast du ein Projekt im Kopf? Lass uns darüber sprechen.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Kostenlose Beratung
          </a>
        </div>
      </div>
    </section>
  );
}
