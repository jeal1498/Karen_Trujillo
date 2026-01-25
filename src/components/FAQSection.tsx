import { ChevronDown, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: '¿Dónde se llevan a cabo las sesiones psicológicas?',
    answer: 'Atiendo presencialmente en mi consultorio privado ubicado en Cancún, zona céntrica de Hacienda de Chinconcuac (SM200 M49 L2, Circuito 1587B, 77539). El espacio es confidencial y diseñado para tu comodidad. También ofrezco sesiones en línea a través de plataformas seguras para pacientes foráneos. Ambas modalidades son igual de efectivas para la psicoterapia.',
  },
  {
    question: '¿Cuánto dura una sesión de terapia individual?',
    answer: 'Las sesiones de psicoterapia individual duran 45-50 minutos. Este tiempo es suficiente para abordar tus preocupaciones, aprender herramientas prácticas y crear un plan de acción. Las evaluaciones neuropsicológicas requieren sesiones más extensas: divididas en múltiples citas según la complejidad del caso.',
  },
  {
    question: '¿Cuáles son tus costos y formas de pago?',
    answer: 'Los costos varían según el tipo de servicio (terapia individual, evaluación neuropsicológica, etc.). Aceptamos efectivo y transferencias bancarias. Contacta directamente por WhatsApp para detalles específicos y promociones disponibles.',
  },
  {
    question: '¿Atiendo a menores de edad?',
    answer: 'Sí, ofrezco psicología infantil y juvenil. Es recomendable que al menos uno de los padres/tutores esté presente en la sesión inicial. Mis espacios están diseñados para que los niños se sientan cómodos y seguros durante el proceso terapéutico.',
  },
  {
    question: '¿Cuál es el proceso para una evaluación neuropsicológica?',
    answer: 'El proceso incluye: 1) Entrevista inicial y antecedentes; 2) Aplicación de pruebas neuropsicológicas estandarizadas; 3) Análisis e interpretación de resultados; 4) Sesión de devolución con recomendaciones. Todo depende de tu caso específico.',
  },
  {
    question: '¿Garantizas confidencialidad en las sesiones?',
    answer: 'Absolutamente sí. La confidencialidad es un derecho fundamental del paciente. Todo lo que compartas en terapia está protegido por secreto profesional, excepto en casos de riesgo inmediato (criterios legales). Tu privacidad es sagrada.',
  },
  {
    question: '¿Cuál es la diferencia entre TDAH y Autismo (TEA)?',
    answer: 'El TDAH afecta principalmente atención, hiperactividad, impulsividad y funciones ejecutivas; se diagnostica con pruebas de concentración y memoria. El Autismo (TEA) impacta comunicación social, patrones de conducta repetitivos e integración sensorial; requiere evaluación diferente con pruebas estandarizadas de interacción. Ambos pueden coexistir (comorbilidad) y son diagnosticables en la infancia y adultez.',
  },
  {
    question: '¿Aceptas seguros de salud o planes médicos?',
    answer: 'Aceptó efectivo y transferencias bancarias directo. Para información sobre cobertura de seguros o reembolsos, contacta por WhatsApp al +52 998 321 1547. Algunos seguros de salud pueden reembolsar evaluaciones neuropsicológicas bajo ciertas condiciones.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 bg-card px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground font-light">Resuelve tus dudas sobre mis servicios de neuropsicología y psicoterapia</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card hover:bg-secondary border-2 border-border hover:border-accent-blue rounded-lg transition-all data-[state=open]:border-primary data-[state=open]:bg-primary/[0.02] data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="p-6 font-bold text-primary hover:text-primary-dark transition-colors text-left [&[data-state=open]>span]:bg-primary [&[data-state=open]>span]:text-primary-foreground hover:no-underline">
                  <span className="flex-1">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground text-sm font-light leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="mt-12 p-8 bg-gradient-to-r from-accent-pink/20 to-accent-blue/10 rounded-xl border border-accent-pink/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-serif italic text-lg mb-4">"¿Tienes más preguntas? Estoy aquí para escucharte sin juzgarte."</p>
          <a 
            href="https://wa.me/529983211547?text=Hola%20Karen,%20tengo%20algunas%20preguntas" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contacta por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
