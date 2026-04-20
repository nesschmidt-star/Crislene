/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Leaf, Apple, Brain, Activity, Clock, MapPin, Phone, ChevronRight } from "lucide-react";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
    <div className="w-full px-12 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-yellow">
          <span className="font-bold text-white text-xl">C</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold tracking-tight uppercase text-brand-brown leading-none">Crislene Carvalho</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-brand-brown/50 mt-1 font-bold">Nutricionista</span>
        </div>
      </div>
      <div className="hidden md:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em]">
        {["Início", "Metodologia", "Serviços", "Blog"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-brand-yellow transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="px-6 py-2 rounded-full bg-brand-yellow text-brand-brown font-bold text-xs uppercase tracking-tighter transition-all hover:shadow-lg active:scale-95">
        Agendar Consulta
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center px-12 pt-20 overflow-hidden bg-brand-beige">
    <div className="grid grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="col-span-12 lg:col-span-7 space-y-6"
      >
        <div className="inline-block px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-2 bg-brand-brown text-brand-yellow">
          Nutrição Clínica & Funcional
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight text-brand-brown">
          Equilíbrio que vem de <span className="italic text-brand-yellow">dentro</span>
        </h1>
        <p className="text-lg max-w-xl opacity-90 leading-relaxed text-brand-brown">
          Planos alimentares personalizados que respeitam sua rotina, cultura e objetivos. Descubra como a nutrição consciente pode transformar sua vitalidade.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-4 rounded-full bg-brand-brown text-brand-beige font-bold text-sm uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-brown/20">
            Conhecer Programas
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-brand-brown text-brand-brown font-bold text-sm uppercase tracking-widest transition-all hover:bg-brand-brown hover:text-white active:scale-95">
            Meu Instagram
          </button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-12 lg:col-span-5 relative grid grid-cols-6 gap-3"
      >
        <div className="col-span-4 row-span-2 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
            alt="Crislene Carvalho"
            className="w-full h-full object-cover grayscale-[10%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-brown/80 to-transparent">
            <p className="text-white font-serif italic text-xl">"Comer bem é um ato de amor-próprio"</p>
          </div>
        </div>
        
        <div className="col-span-2 space-y-3">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1965&auto=format&fit=crop"
              alt="Crislene Carvalho"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1965&auto=format&fit=crop"
              alt="Atendimento"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="col-span-2 aspect-square rounded-2xl overflow-hidden shadow-xl mt-[-20%]"
        >
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
            alt="Healthy Life"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-yellow opacity-10 z-0 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-brown opacity-5 z-0 blur-3xl" />
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      num: "01",
      title: "Emagrecimento",
      desc: "Estratégias sustentáveis sem restrições severas."
    },
    {
      num: "02",
      title: "Performance",
      desc: "Nutrição esportiva para otimizar seus resultados."
    },
    {
      num: "03",
      title: "Gestantes",
      desc: "Acompanhamento nutricional para uma gestação saudável."
    },
    {
      num: "04",
      title: "Exames",
      desc: "Solicitação e interpretação de exames laboratoriais."
    }
  ];

  return (
    <section id="serviços" className="px-12 py-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-4 group cursor-default"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow flex items-center gap-2">
              <span className="opacity-40">{s.num}.</span> {s.title}
            </h3>
            <p className="text-sm text-brand-brown opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 pt-12"
        >
          <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1965&auto=format&fit=crop" className="rounded-2xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2012&auto=format&fit=crop" className="rounded-2xl aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1974&auto=format&fit=crop" className="rounded-2xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-4 block">Formação & Propósito</span>
        <h2 className="text-5xl font-serif text-brand-brown mb-8 leading-tight">Crislene Carvalho</h2>
        <div className="space-y-6 text-brand-brown/70 text-lg leading-relaxed">
          <p>
            Com anos de experiência clínica, acredito que a nutrição vai muito além do que está no prato. É sobre conexão, autoconhecimento e liberdade alimentar.
          </p>
          <p>
            Minha abordagem é baseada em evidências científicas sólidas, aliadas a uma escuta empática para entender a sua história e rotina. Não entrego apenas um papel, entrego um caminho sustentável para a sua saúde.
          </p>
        </div>
        
        <div className="mt-12 flex gap-12 border-t border-brand-brown/10 pt-12">
          <div>
            <p className="text-3xl font-serif text-brand-brown font-bold">+500</p>
            <p className="text-sm uppercase tracking-wider text-brand-brown/60">Vidas Transformadas</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-brand-brown font-bold">100%</p>
            <p className="text-sm uppercase tracking-wider text-brand-brown/60">Personalizado</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Emagrecimento Saudável",
      text: "A Cris mudou minha relação com a comida. Hoje como de tudo sem culpa e consegui atingir meu peso ideal com leveza.",
      image: "https://i.pravatar.cc/150?u=mariana"
    },
    {
      name: "Ricardo Gomes",
      role: "Atleta Amador",
      text: "Minha performance nos treinos deu um salto absurdo. O plano alimentar é prático e focado nos meus horários de corrida.",
      image: "https://i.pravatar.cc/150?u=ricardo"
    },
    {
      name: "Camila Matos",
      role: "Saúde da Mulher",
      text: "Atendimento humano e acolhedor. Me sinto ouvida e as orientações são muito fáceis de aplicar no dia a dia corrido.",
      image: "https://i.pravatar.cc/150?u=camila"
    }
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Experiências Reais</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-brown">O que dizem meus pacientes</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[32px] bg-brand-beige/30 border border-brand-brown/5 relative"
            >
              <div className="flex gap-1 mb-6 text-brand-yellow">
                <Leaf className="w-4 h-4 fill-current" />
                <Leaf className="w-4 h-4 fill-current" />
                <Leaf className="w-4 h-4 fill-current" />
                <Leaf className="w-4 h-4 fill-current" />
                <Leaf className="w-4 h-4 fill-current" />
              </div>
              <p className="text-brand-brown/80 text-lg italic mb-10 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-brand-yellow ring-offset-2" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-brand-brown leading-none">{t.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-brown/50 mt-1 font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => (
  <section className="py-32 bg-brand-yellow/10">
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <div className="flex justify-center mb-6">
        <div className="bg-brand-brown text-white p-4 rounded-full">
          <Instagram className="w-8 h-8" />
        </div>
      </div>
      <h2 className="text-4xl font-serif text-brand-brown mb-4">Acompanhe no Instagram</h2>
      <a href="https://www.instagram.com/crisllenecarvalho/" className="text-brand-brown font-medium hover:text-brand-yellow transition-colors underline underline-offset-8">@crisllenecarvalho</a>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <a key={i} href="#" className="aspect-square overflow-hidden group relative">
          <img 
            src={`https://picsum.photos/seed/nutri${i}/600/600`} 
            alt="Instagram feed" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Instagram className="text-white w-8 h-8" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contato" className="w-full px-12 py-8 bg-brand-beige text-brand-brown border-t border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] uppercase tracking-widest opacity-60 text-center md:text-left">
        &copy; {new Date().getFullYear()} Crislene Carvalho. Todos os direitos reservados.
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest font-bold">
        <span className="opacity-40">CRN: 12345/P</span>
        <a href="https://www.instagram.com/crisllenecarvalho/" className="hover:text-brand-yellow transition-colors">Instagram: @crisllenecarvalho</a>
        <span>WhatsApp: (11) 99999-9999</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige selection:bg-brand-yellow selection:text-brand-brown">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
