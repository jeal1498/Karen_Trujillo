import { ArrowRight, Brain, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-soft-gradient">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-pink/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div 
          className="lg:col-span-7 text-center lg:text-left space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-2 mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Disponible - Agenda Abierta 2025</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] text-balance">
            Tu Salud Mental, <br />
            <span className="gradient-text font-normal italic">Mi Prioridad</span>
          </h1>

          <p className="text-muted-foreground text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
            Psicóloga especializada en Neuropsicología y Psicoterapia Clínica. Un espacio seguro en <strong className="text-primary">Cancún</strong> para sanar, crecer y entender tu mente con enfoque científico y humanista.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="#contacto" 
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Agendar Sesión <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#servicios" 
              onClick={(e) => scrollToSection(e, '#servicios')}
              className="bg-card text-primary border-2 border-primary py-4 px-10 rounded-lg font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest shadow-sm"
            >
              Ver Especialidades
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent-sand border-2 border-card flex items-center justify-center text-[10px] font-bold text-primary shadow-md">KT</div>
              <div className="w-10 h-10 rounded-full bg-accent-blue border-2 border-card flex items-center justify-center shadow-md">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="w-10 h-10 rounded-full bg-accent-pink border-2 border-card flex items-center justify-center shadow-md">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">7+ años de experiencia</p>
              <p className="text-xs text-muted-foreground/70">Enfoque Integrativo & Humano</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-[8px] border-card float-animation">
            <img 
              src="https://psicologakarentrujillo.com.mx/Psicologa_Karen_Trujillo.webp" 
              alt="Psicóloga Karen Trujillo especialista en psicología clínica y neuropsicología en Cancún, Quintana Roo" 
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            
            <div className="absolute bottom-6 right-6 glass p-5 rounded-2xl shadow-lg max-w-[220px] backdrop-blur-xl">
              <div className="flex items-start gap-2 mb-3">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-primary">5.0</span>
              </div>
              <p className="text-xs font-serif italic text-primary leading-relaxed">"Tu bienestar emocional y cognitivo es mi compromiso."</p>
              <p className="text-[10px] font-bold text-primary/60 mt-3 uppercase tracking-wider">— Psic. Karen</p>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-accent-sand rounded-2xl rotate-6 scale-95 -z-10 opacity-40" />
          <div className="absolute inset-0 bg-accent-pink rounded-2xl rotate-3 scale-90 -z-10 opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
