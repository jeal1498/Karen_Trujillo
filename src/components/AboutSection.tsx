import { GraduationCap, Brain, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-32 px-6 bg-card relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-10 -left-10 text-[12rem] font-serif leading-none text-accent-sand/40 select-none opacity-50">"</div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 relative z-10">
              Neuropsicología con <br />
              <span className="italic text-primary-light">Calidez Humana.</span>
            </h2>

            {/* Response Block */}
            <div className="p-6 bg-accent-blue/10 border-l-4 border-accent-blue rounded-lg text-base leading-relaxed text-foreground font-medium mb-6">
              <p>
                Soy <strong>Psicóloga Karen Trujillo</strong> (Cédula Federal: 11009616), especialista certificada en 
                Neuropsicología Clínica, egresada de la Universidad Modelo de Quintana Roo. Con más de 7 años de 
                experiencia en Cancún, ofrezco evaluaciones neuropsicológicas científicas de TDAH y Autismo, 
                combinando rigor diagnóstico con genuina empatía.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg text-justify">
              <p>
                Mi enfoque <strong className="text-primary">integrativo y humanista</strong> une lo mejor de la evidencia científica 
                con la calidez de la escucha activa. No solo diagnostico condiciones como TDAH, Autismo o 
                ansiedad; te brindo herramientas prácticas validadas en investigación para que transformes 
                tu vida desde raíces profundas.
              </p>
              <p>
                Creo profundamente que el espacio terapéutico debe ser <strong className="text-primary">seguro, confidencial y 
                profesional</strong>. Cada sesión respeta tu ritmo, tus valores y tu singularidad como 
                persona. La psicología no es solo diagnosticar; es acompañar.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="px-4 py-3 rounded-lg bg-success/10 border border-success/20">
                <p className="text-[10px] font-bold text-success uppercase tracking-wider mb-1">Cédula Federal</p>
                <p className="text-sm font-bold text-primary">11009616</p>
              </div>
              <div className="px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Experiencia</p>
                <p className="text-sm font-bold">7+ años</p>
              </div>
              <div className="px-4 py-3 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                <p className="text-[10px] font-bold text-accent-blue uppercase tracking-wider mb-1">Formación</p>
                <p className="text-sm font-bold text-primary">Universidad Modelo</p>
              </div>
            </div>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div 
            className="order-1 lg:order-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 mt-8">
              <div className="bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 p-8 rounded-2xl h-40 flex flex-col justify-end border border-accent-blue/10 hover:shadow-lg transition-all">
                <span className="text-4xl font-serif font-bold text-primary">+7</span>
                <span className="text-xs uppercase tracking-widest text-primary/70 mt-2">Años de Experiencia</span>
              </div>
              <div className="bg-gradient-to-br from-accent-sand to-accent-sand/50 p-8 rounded-2xl h-56 flex flex-col justify-end hover:shadow-lg transition-all">
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <span className="text-sm font-bold text-primary">Licenciada en Psicología</span>
                <span className="text-[10px] text-primary/60 uppercase">Universidad Modelo, QRoo</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-accent-pink/30 to-accent-pink/10 p-8 rounded-2xl h-56 flex flex-col justify-end hover:shadow-lg transition-all">
                <Brain className="w-8 h-8 text-primary mb-3" />
                <span className="text-sm font-bold text-primary">Neuropsicología Clínica</span>
                <span className="text-[10px] text-primary/60 uppercase">Especialidad Certificada</span>
              </div>
              <div className="bg-gradient-primary p-8 rounded-2xl h-40 flex flex-col justify-end text-primary-foreground hover:shadow-lg transition-all">
                <Heart className="w-6 h-6 mb-3 text-accent-pink" />
                <span className="font-serif italic text-xl">"Ciencia y Empatía"</span>
                <span className="text-xs opacity-80 mt-2">Mi filosofía profesional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
