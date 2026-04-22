/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Leaf, Sun, Sprout, Brain, Activity, Clock, MapPin, Phone, ChevronRight } from "lucide-react";

export default function App() {
  const WHATSAPP_BASE = "https://wa.me/553182308742";
  const INSTAGRAM_URL = "https://www.instagram.com/crisllenecarvalho/";
  
  const msgPrograms = encodeURIComponent("Olá, quero conhecer mais sobre os programas.");
  const msgAppointment = encodeURIComponent("Olá, quero agendar uma consulta.");

  return (
    <div className="min-h-screen bg-brand-beige selection:bg-brand-yellow selection:text-brand-brown">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="w-full px-12 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-brand-yellow/10">
              <img
                src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=100&h=100&auto=format&fit=crop"
                alt="Girassol"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight uppercase text-brand-brown leading-none">Crislene Carvalho</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-brown/50 mt-1 font-bold">Nutricionista</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            {["Início", "Metodologia", "Programas", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand-yellow transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href={`${WHATSAPP_BASE}?text=${msgAppointment}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-brand-yellow text-brand-brown font-bold text-xs uppercase tracking-tighter transition-all hover:shadow-lg active:scale-95 text-center"
          >
            Agendar Consulta
          </a>
        </div>
      </nav>

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
              Equilíbrio para as <span className="italic text-brand-yellow">nutrividas</span>
            </h1>
            <p className="text-lg max-w-xl opacity-90 leading-relaxed text-brand-brown">
              Seja bem-vinda ao seu despertar. Com o Método Girassol, ajudo você a encontrar sua melhor versão através de uma nutrição consciente, leve e verdadeiramente transformadora.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={`${WHATSAPP_BASE}?text=${msgPrograms}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-brand-brown text-brand-beige font-bold text-sm uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-brown/20 text-center"
              >
                Conhecer Programas
              </a>
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-brand-brown text-brand-brown font-bold text-sm uppercase tracking-widest transition-all hover:bg-brand-brown hover:text-white active:scale-95 text-center"
              >
                Meu Instagram
              </a>
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
                src="https://images.unsplash.com/photo-1571019623119-f0607ce678a1?q=80&w=2070&auto=format&fit=crop"
                alt="Crislene Carvalho - criscorrida"
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-brown/80 to-transparent">
                <p className="text-white font-serif italic text-xl">"Equilíbrio e movimento para as nutrividas"</p>
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

            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-yellow opacity-10 z-0 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-brown opacity-5 z-0 blur-3xl" />
          </motion.div>
        </div>
      </section>

      <section id="metodologia" className="py-24 bg-brand-brown text-brand-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-full border-2 border-brand-yellow/30 p-12 flex items-center justify-center relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dashed border-brand-yellow/20 rounded-full"
              />
              <div className="text-center relative z-10">
                <Sun className="w-20 h-20 text-brand-yellow mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,187,57,0.4)]" />
                <h3 className="text-4xl font-serif mb-4 italic">Método Girassol</h3>
                <p className="text-brand-yellow uppercase tracking-widest text-xs font-bold">O despertar da sua nutrição</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm">Base do Atendimento</span>
            <h2 className="text-5xl font-serif leading-tight">Por que o <span className="italic text-brand-yellow">Girassol?</span></h2>
            <p className="text-brand-beige/70 text-lg leading-relaxed">
              Assim como o girassol busca a luz para florescer, meu método foca em encontrar clareza e energia na sua alimentação. É uma jornada de autoconhecimento onde você é a protagonista da sua saúde.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Sempre em Busca da Luz", desc: "Foco no que te traz vitalidade e energia.", icon: Sun },
                { title: "Raízes Fortes", desc: "Baseamos sua dieta no que é sustentável para você.", icon: Sprout },
                { title: "Crescimento Constante", desc: "Evolução gradual e duradoura.", icon: Leaf },
                { title: "Florescer com Leveza", desc: "Sem restrições severas, apenas equilíbrio.", icon: Brain }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <item.icon className="w-6 h-6 text-brand-yellow mb-3" />
                  <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-brand-beige/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="programas" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Programas Especiais</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-brown">Escolha sua <span className="italic text-brand-yellow">jornada</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "DesincháFlex",
                desc: "Protocolo de emagrecimento para você que está buscando um resultado rápido e imediato. Ou seja, acontece o processo de eliminação do inchaço e da retenção de líquidos, para impulsionar o seu processo de emagrecimento.",
                type: "Resultado Imediato"
              },
              {
                title: "Girassol Smart",
                desc: "É o meu acompanhamento de 90 dias para você que está buscando emagrecer livre de dietas sem graça, e acontece por meio de formulário. Você recebe o questionário e, através das suas respostas, damos início à sua trajetória.",
                type: "Acompanhamento 90 dias"
              },
              {
                title: "Método Girassol",
                desc: "É a minha metodologia de acompanhamento nutricional de 90 dias para mulheres que desejam ter uma transformação real na sua trajetória, sem precisar sofrer com dieta.",
                type: "Metodologia Exclusiva"
              }
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group p-8 rounded-[40px] bg-brand-beige/20 border border-brand-brown/5 hover:border-brand-yellow/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-yellow/10 flex flex-col h-full"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full">{p.type}</span>
                </div>
                <h3 className="text-3xl font-serif text-brand-brown mb-6 group-hover:text-brand-yellow transition-colors">{p.title}</h3>
                <p className="text-brand-brown/70 leading-relaxed mb-8 flex-grow">
                  {p.desc}
                </p>
                <a 
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o programa ${p.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-brown font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
                >
                  Saiba mais <ChevronRight className="w-4 h-4 text-brand-yellow" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop" 
                  alt="Crislene Carvalho - crisprof" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow rounded-full -z-10 blur-2xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-brown rounded-full -z-10 blur-2xl opacity-10"></div>
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

      <section id="especialidades" className="px-12 py-20 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
          <span className="text-brand-yellow font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Outras Áreas</span>
          <h2 className="text-2xl font-serif text-brand-brown underline decoration-brand-yellow/30 underline-offset-8">Especialidades Adicionais</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              num: "01",
              title: "Emagrecimento",
              desc: "Estratégias sustentáveis sem restrições severas."
            },
            {
              num: "02",
              title: "Saúde da Mulher",
              desc: "Acompanhamento especializado em cada fase da vida feminina."
            },
            {
              num: "03",
              title: "Gestantes",
              desc: "Acompanhamento para uma gestação saudável e segura."
            },
            {
              num: "04",
              title: "Exames",
              desc: "Solicitação e interpretação de exames laboratoriais."
            }
          ].map((s, idx) => (
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

      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Experiências Reais</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-brown">Nossas <span className="italic text-brand-yellow">nutrividas</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                role: "Emagrecimento Saudável",
                text: "A Cris mudou minha relação com a comida. Hoje como de tudo sem culpa e consegui atingir meu peso ideal com leveza.",
                image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop"
              },
              {
                name: "Ana Godoy",
                role: "Saúde e Bem-estar",
                text: "O acompanhamento com a Cris foi um divisor de águas. Melhorei minha disposição e níveis de energia logo nas primeiras semanas.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
              },
              {
                name: "Camila Matos",
                role: "Saúde da Mulher",
                text: "Atendimento humano e acolhedor. Me sinto ouvida e as orientações são muito fáceis de aplicar no dia a dia corrido.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
              }
            ].map((t, idx) => (
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

      <section className="py-32 bg-brand-yellow/10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-brand-brown text-white p-4 rounded-full">
              <Instagram className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-4xl font-serif text-brand-brown mb-4">Acompanhe no Instagram</h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-brown font-medium hover:text-brand-yellow transition-colors underline underline-offset-8">@crisllenecarvalho</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden group relative">
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

      <footer id="contato" className="w-full px-12 py-8 bg-brand-beige text-brand-brown border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-[10px] uppercase tracking-widest opacity-60">
              &copy; {new Date().getFullYear()} Crislene Carvalho. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest font-bold">
              <span className="opacity-40">CRN: 12345/P</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">Instagram: @crisllenecarvalho</a>
              <span>WhatsApp: (31) 8230-8742</span>
            </div>
          </div>
          <div className="flex justify-end">
            <a 
              href={`${WHATSAPP_BASE}?text=${msgAppointment}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full bg-brand-yellow text-brand-brown font-bold text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:scale-105 active:scale-95 shadow-xl shadow-brand-yellow/20 text-center"
            >
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
