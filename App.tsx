import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  ChevronDown,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Target,
  TrendingUp,
  Smartphone,
  Layout
} from 'lucide-react';

import { Button } from './components/Button';
import { FlowCard } from './components/FlowCard';
import { FLOW_EXAMPLES, PRICING_TIERS, TESTIMONIALS, FAQS } from './constants';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5527998350659?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais.', '_blank');
  };

  return (
    <div className="min-h-screen font-body bg-white selection:bg-crimson/20 selection:text-crimson overflow-x-hidden">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass-panel border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-8 h-8 bg-crimson rounded-lg flex items-center justify-center mr-2 shadow-lg shadow-crimson/30 flex-shrink-0">
                 <span className="text-white font-bold font-sans text-lg">L</span>
              </div>
              <span className="font-sans font-bold text-xl text-dark tracking-tight">Leadhouse</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {['Soluções', 'Exemplos', 'Preços', 'FAQ'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase().replace('çõ', 'co').replace('ç', 'c'))}
                  className="text-sm font-medium text-gray-600 hover:text-crimson transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="primary" size="sm" onClick={handleWhatsAppClick}>
                Falar com especialista
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-dark p-2 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-[fadeIn_0.2s_ease-out]">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Soluções', 'Exemplos', 'Preços', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('çõ', 'co').replace('ç', 'c'))}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-dark hover:bg-gray-50 rounded-md"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4">
                 <Button fullWidth onClick={handleWhatsAppClick}>WhatsApp</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Redesigned */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-crimson/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Copy */}
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 animate-[fadeInUp_0.5s_ease-out]">
              <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-1.5 rounded-full border border-red-100 mb-6">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson"></span>
                </span>
                <span className="text-xs font-semibold text-crimson uppercase tracking-wide whitespace-nowrap">Automação que vende</span>
              </div>
              
              <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-dark leading-[1.1] tracking-tight text-balance mb-6">
                Fluxos Typebot para corretores que <span className="text-crimson">convertem</span>.
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 text-balance">
                Automação conversacional que qualifica leads, agenda visitas e filtra curiosos. Leads prontos para o seu tráfego pago.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full">
                <Button size="lg" onClick={handleWhatsAppClick} fullWidth className="sm:w-auto shadow-xl shadow-crimson/20">
                  Falar com um especialista
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm text-gray-500">
                 <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Mais VGV</span>
                 <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Menos Curiosos</span>
              </div>
            </div>

            {/* Right Column: Interactive Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px] animate-[fadeInRight_0.7s_ease-out]">
              {/* Decorator Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-crimson/20 to-blue-500/20 blur-[60px] rounded-full -z-10 transform translate-y-10"></div>
              
              {/* Phone Container */}
              <div className="relative bg-dark rounded-[2.5rem] p-2 shadow-2xl border-[6px] border-dark ring-1 ring-gray-900/10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-dark rounded-b-2xl z-20"></div>
                
                <div className="relative bg-white rounded-[2rem] overflow-hidden h-[600px] w-full">
                  {/* Status Bar Simulation */}
                  <div className="bg-gray-50 h-12 border-b border-gray-100 flex items-center justify-center">
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Demonstração Interativa</p>
                  </div>

                  {/* Typebot Iframe */}
                  <iframe
                    src="https://typebot.co/my-typebot-k1b2ldl"
                    width="100%"
                    height="100%"
                    className="border-none w-full h-[calc(100%-3rem)]"
                    title="Typebot Demo"
                    allow="camera; microphone; autoplay; encrypted-media;"
                  ></iframe>
                  
                  {/* Gradient Overlay at bottom for smooth fade if needed, mainly decorative */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                 <div className="bg-green-100 p-2 rounded-full">
                    <MessageSquare size={20} className="text-green-600" />
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-medium">Status</p>
                    <p className="text-sm font-bold text-dark">Bot Online</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Soluções (Services) */}
      <section id="solucoes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-dark mb-4">Nossas Soluções</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Do template pronto à gestão completa de tráfego.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1: Typebot */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Fluxos Typebot</h3>
              <p className="text-gray-600 mb-6">
                Captação, qualificação e pré-venda automáticas. Otimize sua taxa de conversão com respostas imediatas.
              </p>
              
              <div className="space-y-3 mb-8">
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Exemplos de uso:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Lançamentos', 'Captação Padrão', 'Lead Quente', 'Agendamento', 'Pré-filtro Imóveis', 'Funil Múltipla Escolha'].map((item) => (
                    <div key={item} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                <p className="text-sm text-crimson font-medium flex items-start">
                  <TrendingUp size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  "Corretor que não usa automação perde cliente para quem responde mais rápido."
                </p>
              </div>

              <Button variant="outline" fullWidth onClick={handleWhatsAppClick}>
                Saber mais sobre Fluxos
              </Button>
            </div>

            {/* Service 2: Traffic */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Tráfego Pago Imobiliário</h3>
              <p className="text-gray-600 mb-6">
                Gestão completa de mídia paga focada em performance e vendas, com inteligência de dados.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { text: 'Setup de campanhas (Meta/Google)', icon: Layout },
                  { text: 'Criação de anúncios e criativos', icon: Smartphone },
                  { text: 'Segmentação avançada de público', icon: Target },
                  { text: 'Relatórios de performance', icon: TrendingUp },
                  { text: '1 Typebot Pro incluso no pacote', icon: CheckCircle2, highlight: true }
                ].map((feat, idx) => (
                  <li key={idx} className={`flex items-start ${feat.highlight ? 'font-bold text-dark' : 'text-gray-600'}`}>
                    <feat.icon size={20} className={`mr-3 flex-shrink-0 ${feat.highlight ? 'text-green-500' : 'text-gray-400'}`} />
                    <span className="text-sm">{feat.text}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary" fullWidth onClick={handleWhatsAppClick}>
                Consultar Tráfego Pago
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Examples (Static) */}
      <section id="exemplos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-dark mb-4">Modelos Validados</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Estruturas lógicas prontas para aplicar no seu negócio hoje.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLOW_EXAMPLES.map((flow) => (
              <FlowCard key={flow.id} flow={flow} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-sans font-bold text-dark">Planos Flexíveis</h2>
            <p className="text-gray-600 mt-4 text-balance">Escolha a melhor forma de começar a automatizar seu atendimento.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {PRICING_TIERS.map((tier, idx) => (
                <div 
                  key={idx} 
                  className={`relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col h-full ${
                    tier.highlight 
                      ? 'ring-2 ring-crimson shadow-xl md:scale-105 z-10' 
                      : 'border border-gray-200 shadow-sm hover:shadow-lg transition-shadow'
                  }`}
                >
                   {tier.highlight && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-crimson text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                         Recomendado
                      </div>
                   )}
                   <h3 className="text-xl font-bold text-dark mb-1">{tier.name}</h3>
                   <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
                   
                   <div className="mb-6 pb-6 border-b border-gray-100">
                      <span className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">{tier.price}</span>
                      {tier.periodicity && <span className="text-gray-500 text-sm font-medium block mt-1">{tier.periodicity}</span>}
                   </div>
                   
                   <ul className="space-y-4 mb-8 flex-grow">
                      {tier.features.map((feat, i) => (
                         <li key={i} className="flex items-start text-sm text-gray-600 leading-tight">
                            <CheckCircle2 size={18} className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="pt-0.5">{feat}</span>
                         </li>
                      ))}
                   </ul>

                   <Button 
                      variant={tier.highlight ? 'primary' : 'outline'} 
                      fullWidth
                      onClick={handleWhatsAppClick}
                   >
                      {tier.cta}
                   </Button>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-dark text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/10 rounded-full blur-3xl pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 items-center">
               <div className="lg:col-span-1 text-center lg:text-left">
                  <h2 className="text-3xl font-sans font-bold mb-4">Resultados Reais</h2>
                  <p className="text-gray-400 mb-8">Veja quem já está escalando vendas com nossos fluxos.</p>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                     <div className="flex -space-x-3">
                        {TESTIMONIALS.map((t) => (
                           <div key={t.id} className="relative w-10 h-10 rounded-full bg-gray-800 border-2 border-dark overflow-hidden z-0 hover:z-10 hover:scale-110 transition-transform">
                             <img 
                               src={t.image} 
                               alt={t.author} 
                               className="w-full h-full object-cover" 
                               referrerPolicy="no-referrer"
                             />
                           </div>
                        ))}
                        <div className="relative z-0 w-10 h-10 rounded-full bg-gray-800 border-2 border-dark flex items-center justify-center text-xs font-medium text-gray-300">
                           +150
                        </div>
                     </div>
                     <div className="text-sm font-bold text-white">
                        Corretores
                     </div>
                  </div>
               </div>
               
               <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                  {TESTIMONIALS.map((t) => (
                     <div key={t.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                        <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                        <div className="flex items-center gap-4">
                           <img 
                             src={t.image} 
                             alt={t.author} 
                             className="w-10 h-10 rounded-full object-cover border border-gray-500" 
                             referrerPolicy="no-referrer"
                           />
                           <div>
                              <p className="font-bold text-white text-sm">{t.author}</p>
                              <p className="text-crimson text-xs uppercase tracking-wider font-medium">{t.role}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-sans font-bold text-dark text-center mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-4">
               {FAQS.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                     <button 
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                     >
                        <span className="font-medium text-dark pr-4 text-balance">{faq.question}</span>
                        <ChevronDown 
                           size={20} 
                           className={`text-gray-400 flex-shrink-0 transform transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180' : ''}`} 
                        />
                     </button>
                     <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                     >
                        <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-gray-50/50">
                           {faq.answer}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-10 mb-12 text-center md:text-left">
               <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                  <div className="flex items-center mb-6">
                     <div className="w-8 h-8 bg-crimson rounded-lg flex items-center justify-center mr-2">
                        <span className="text-white font-bold font-sans text-lg">L</span>
                     </div>
                     <span className="font-sans font-bold text-xl tracking-tight">Leadhouse</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     Especialistas em automação e tráfego para o mercado imobiliário.
                  </p>
                  <div className="flex space-x-4">
                     <a href="#" className="text-gray-400 hover:text-crimson transition-colors"><Instagram size={20} /></a>
                     <a href="#" className="text-gray-400 hover:text-crimson transition-colors"><Linkedin size={20} /></a>
                  </div>
               </div>

               <div>
                  <h4 className="font-bold mb-6">Soluções</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                     <li><a href="#" className="hover:text-white transition-colors">Fluxos Typebot</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Tráfego Pago</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Consultoria</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-bold mb-6">Links Úteis</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                     <li><a href="#" className="hover:text-white transition-colors">Exemplos</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-bold mb-6">Contato</h4>
                  <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-center md:items-start">
                     <li className="flex items-center"><Mail size={16} className="mr-2" /> contato@leadhouse.com.br</li>
                     <li className="flex items-center"><MapPin size={16} className="mr-2" /> São Paulo, SP</li>
                  </ul>
               </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-sm text-gray-500">© {new Date().getFullYear()} Leadhouse. Todos os direitos reservados.</p>
               <div className="flex space-x-6 text-sm text-gray-500">
                  <a href="#" className="hover:text-white transition-colors">Termos</a>
                  <a href="#" className="hover:text-white transition-colors">Privacidade</a>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
}

export default App;