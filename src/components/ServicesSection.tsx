import { User, HeartHandshake, Smile, Flower2, Zap, Network, FileCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: User,
    title: 'Terapia Individual',
    description: 'Espacio seguro para trabajar ansiedad, depresión, autoestima y crecimiento personal.',
    duration: '45-50 minutos de sesión',
    bgColor: 'bg-accent-blue/20',
    hoverBg: 'bg-accent-blue/20',
    message: 'Hola%20Karen,%20me%20interesa%20terapia%20individual',
  },
  {
    icon: HeartHandshake,
    title: 'Terapia de Pareja',
    description: 'Resuelve conflictos, mejora comunicación y reconecta emocionalmente con tu pareja.',
    duration: '1 hora de sesión',
    bgColor: 'bg-accent-pink/40',
    hoverBg: 'bg-accent-pink/20',
    message: 'Hola%20Karen,%20me%20interesa%20terapia%20de%20pareja',
  },
  {
    icon: Smile,
    title: 'Psicología Infantil',
    description: 'Apoyo en manejo emocional, conducta, adaptación escolar y desarrollo saludable.',
    duration: '45 minutos de sesión',
    bgColor: 'bg-accent-sand',
    hoverBg: 'bg-accent-sand/30',
    message: 'Hola%20Karen,%20me%20interesa%20psicología%20infantil',
  },
  {
    icon: Flower2,
    title: 'Tanatología',
    description: 'Acompañamiento profesional en procesos de duelo, pérdidas y transiciones vitales.',
    duration: '45-50 minutos de sesión',
    bgColor: 'bg-accent-green/40',
    hoverBg: 'bg-accent-green/20',
    message: 'Hola%20Karen,%20me%20interesa%20tanatología',
  },
];

const tableData = [
  { service: 'Terapia Individual', duration: '45-50 minutos', target: 'Adolescentes y adultos', objective: 'Ansiedad, depresión, autoestima, crecimiento personal y desarrollo de herramientas de afrontamiento' },
  { service: 'Terapia de Pareja', duration: '1 hora', target: 'Parejas en conflicto', objective: 'Resolución de conflictos, mejora de comunicación, reconexión emocional y reparación relacional' },
  { service: 'Psicología Infantil', duration: '45 minutos', target: 'Niños y adolescentes', objective: 'Manejo emocional, conducta, adaptación escolar, autorregulación y desarrollo saludable' },
  { service: 'Tanatología', duration: '45-50 minutos', target: 'Personas en duelo', objective: 'Acompañamiento en procesos de pérdida, duelo anticipado y transiciones vitales' },
  { service: 'Evaluación TDAH', duration: '4 sesiones', target: 'Niños 5+ y adultos', objective: 'Diagnóstico científico de déficit atencional mediante pruebas neuropsicológicas estandarizadas' },
  { service: 'Diagnóstico TEA/Autismo', duration: '4 sesiones', target: 'Niños 2+ y adultos', objective: 'Detección del Espectro Autista evaluando comunicación social, patrones conductuales e integración sensorial' },
  { service: 'Certificados Clínicos', duration: 'Depende de complejidad', target: 'Requiere evaluación previa', objective: 'Valoraciones clínicas oficiales respaldadas por cédula Federal (11009616) para trámites laborales, escolares, legales e institucionales' },
];

const neuroServices = [
  {
    icon: Zap,
    title: 'Valoración TDAH',
    description: 'Evaluación neuropsicológica completa de atención, memoria, funciones ejecutivas e impulsividad. Aplicable a niños desde 5 años y adultos. Incluye seguimiento y recomendaciones terapéuticas.',
    message: 'Hola%20Karen,%20me%20interesa%20valoración%20TDAH',
  },
  {
    icon: Network,
    title: 'Diagnóstico TEA',
    description: 'Pruebas estandarizadas para evaluar comunicación social, patrones conductuales e integración sensorial. Aplicable desde los 2 años hasta adultos. Diagnóstico diferencial de autismo con reportes clinicamente documentados.',
    message: 'Hola%20Karen,%20me%20interesa%20diagnóstico%20de%20autismo',
  },
  {
    icon: FileCheck,
    title: 'Certificados Clínicos',
    description: 'Valoraciones clínicas oficiales respaldadas por cédula Federal (11009616) para trámites laborales, escolares, legales e institucionales. Documentos reconocidos por autoridades educativas y laborales.',
    message: 'Hola%20Karen,%20necesito%20un%20certificado%20clínico',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-32 bg-secondary px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full border border-primary/10 bg-card text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-6 inline-block shadow-sm">
            ¿Cómo puedo ayudarte?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Modalidades de Atención</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-light">Servicios especializados diseñados para cada etapa de la vida</p>
        </motion.div>

        {/* Services Table */}
        <motion.div 
          className="bg-card rounded-xl overflow-hidden shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="sr-only">Servicios de psicología clínica y neuropsicología ofrecidos por Karen Trujillo en Cancún</caption>
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gradient-primary text-primary-foreground font-bold text-xs uppercase tracking-wider">Servicio</th>
                  <th className="text-left p-4 bg-gradient-primary text-primary-foreground font-bold text-xs uppercase tracking-wider">Duración</th>
                  <th className="text-left p-4 bg-gradient-primary text-primary-foreground font-bold text-xs uppercase tracking-wider">Dirigido a</th>
                  <th className="text-left p-4 bg-gradient-primary text-primary-foreground font-bold text-xs uppercase tracking-wider">Objetivo Terapéutico</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="p-4 font-bold text-primary">{row.service}</td>
                    <td className="p-4 text-muted-foreground">{row.duration}</td>
                    <td className="p-4 text-muted-foreground">{row.target}</td>
                    <td className="p-4 text-muted-foreground text-sm">{row.objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesData.map((service, index) => (
            <motion.article 
              key={service.title}
              className="group bg-card p-8 rounded-xl shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">{service.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-grow">{service.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">{service.duration}</p>
                <a 
                  href={`https://wa.me/529983211547?text=${service.message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg ${service.hoverBg} text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all text-center`}
                >
                  Agendar
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Neuropsychology Section */}
        <motion.div 
          className="relative rounded-2xl overflow-hidden bg-gradient-primary text-primary-foreground shadow-2xl shadow-primary/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20" />
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl" />
          <div className="absolute -left-20 bottom-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-10 md:p-20">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold italic mb-6">Neuropsicología y Diagnósticos Especializados</h2>
              <p className="text-primary-foreground/80 font-light text-lg">Evaluaciones científicas y estandarizadas para comprender el funcionamiento cognitivo, emocional y conductual. Todos nuestros diagnósticos están respaldados por pruebas validadas internacionalmente.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {neuroServices.map((service, index) => (
                <div key={service.title} className="glass-dark border border-primary-foreground/10 p-8 rounded-xl hover:bg-primary-foreground/5 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-6 h-6 text-accent-blue group-hover:text-primary-foreground transition-colors" />
                    <h3 className="text-xl font-bold text-accent-blue group-hover:text-primary-foreground transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-primary-foreground/70 text-sm font-light leading-relaxed mb-6">{service.description}</p>
                  <a 
                    href={`https://wa.me/529983211547?text=${service.message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent-blue hover:text-primary-foreground transition-colors"
                  >
                    Solicitar Información <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
