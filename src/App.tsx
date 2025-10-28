import { Github, Linkedin, Mail, Code, Dumbbell, Target, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
