import { Code, Dumbbell, Target, Zap } from 'lucide-react';

export default function About() {
  const interests = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'AI Automations',
      description: 'Entwicklung intelligenter Automatisierungslösungen, die Prozesse optimieren und Zeit sparen.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Kreation moderner, responsiver Websites mit fokus auf User Experience und Performance.',
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Sport & Fitness',
      description: 'Leidenschaftlicher Fußballer und Gym-Enthusiast. Balance zwischen Code und Kraft.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Duales Studium',
      description: 'Kombination aus praktischer Erfahrung und theoretischem Wissen in der Tech-Branche.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Über mich
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ein dualer Student mit einer Leidenschaft für Technologie, Design und einem aktiven Lebensstil.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-cyan-400 transition-colors">
                {interest.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {interest.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/30">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-slate-400 text-sm">Engagement</div>
          </div>
          <div className="text-center p-6 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/30">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              AI
            </div>
            <div className="text-slate-400 text-sm">Fokus</div>
          </div>
          <div className="text-center p-6 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/30">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-400 text-sm">Motivation</div>
          </div>
          <div className="text-center p-6 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/30">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <div className="text-slate-400 text-sm">Potenzial</div>
          </div>
        </div>
      </div>
    </section>
  );
}
