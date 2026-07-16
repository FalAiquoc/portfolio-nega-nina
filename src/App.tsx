import { useEffect, useState } from 'react';
import { storeData } from './data';
import { Icon } from './components/Icon';

// Componente de Logotipo Vetorial Sofisticado (Monograma minimalista com N curvo estilizado sob círculo dourado de alta-costura)
function Logo({ className = "h-10", dark = false }: { className?: string; dark?: boolean }) {
  const primaryColor = '#be185d'; // Rosa Magenta
  const textColor = dark ? '#0F172A' : '#FFFFFF';

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <svg className="h-full aspect-square overflow-visible" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke={primaryColor} strokeWidth="10" strokeLinecap="round">
          {/* Círculo oval de design e monograma N */}
          <path d="M 60 40 L 60 160 L 140 40 L 140 160" strokeWidth="16" />
          <circle cx="100" cy="100" r="85" stroke="#db2777" strokeWidth="6" strokeDasharray="10 6" />
        </g>
      </svg>
      <div className="flex flex-col leading-[0.9] text-left font-display">
        <span className="text-xl font-black tracking-[0.1em] uppercase" style={{ color: textColor }}>NEGA</span>
        <span className="text-[14px] font-light italic tracking-[0.25em] text-[#be185d]">NINA</span>
        <span className="text-[7px] font-bold tracking-[0.15em] text-slate-400">MODA AUTORAL</span>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Estado do Quiz de Estilo
  const [quizOccasion, setQuizOccasion] = useState<string>('Trabalho');

  // Lojas e Lookbooks da Coleção
  const lookbooks: Record<string, { title: string; description: string; pieces: string[]; imageUrl: string }> = {
    Trabalho: {
      title: 'Business Casual Moderno',
      description: 'Cortes limpos de alfaiataria que equilibram profissionalismo e sofisticação no dia a dia.',
      pieces: ['Blazer Estruturado Bege', 'Calça Pantalona Terracota', 'Cinto de Couro Fino'],
      imageUrl: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=800'
    },
    Jantar: {
      title: 'Noite Elegante & Marcante',
      description: 'Silhuetas sofisticadas e detalhes sutis para um jantar ou evento especial em Natal.',
      pieces: ['Vestido Midi de Seda Preto', 'Brincos Geométricos Dourados', 'Sandália de Tira Fina'],
      imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
    },
    Praia: {
      title: 'Sunset Fresh & Leve',
      description: 'Tecidos naturais, fluidos e cores frescas para as tardes quentes e ensolaradas do litoral.',
      pieces: ['Macacão de Linho Cru', 'Óculos de Sol Oversized', 'Bolsa de Palha Artesanal'],
      imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800'
    }
  };

  // Estados do Provador Virtual de Tamanho
  const [userHeight, setUserHeight] = useState<string>('');
  const [userWeight, setUserWeight] = useState<string>('');
  const [sizeSuggestion, setSizeSuggestion] = useState<string>('');

  const calculateSize = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseInt(userHeight);
    const w = parseInt(userWeight);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return;

    if (w < 55) setSizeSuggestion('PP (Tamanho 34/36)');
    else if (w < 65) setSizeSuggestion('P (Tamanho 38)');
    else if (w < 75) setSizeSuggestion('M (Tamanho 40/42)');
    else if (w < 85) setSizeSuggestion('G (Tamanho 44)');
    else setSizeSuggestion('GG (Tamanho 46/48)');
  };

  // Injeção de fontes e cores
  useEffect(() => {
    if (storeData.typography.importUrl) {
      const linkId = 'store-google-fonts';
      let fontLink = document.getElementById(linkId) as HTMLLinkElement;
      if (!fontLink) {
        fontLink = document.createElement('link');
        fontLink.id = linkId;
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
      }
      fontLink.href = storeData.typography.importUrl;
    }

    const root = document.documentElement;
    root.style.setProperty('--font-display-family', storeData.typography.displayFontFamily);
    root.style.setProperty('--font-body-family', storeData.typography.bodyFontFamily);

    // Cores da Loja de Moda
    root.style.setProperty('--p-50', '#fff5f7');
    root.style.setProperty('--p-100', '#ffe4e6');
    root.style.setProperty('--p-500', storeData.colors.primaryHex); // Rosa Magenta
    root.style.setProperty('--p-600', '#9d174d');
    root.style.setProperty('--p-700', '#831843');
    root.style.setProperty('--p-800', '#500724');

    root.style.setProperty('--a-50', `${storeData.colors.accentHex}10`);
    root.style.setProperty('--a-100', `${storeData.colors.accentHex}20`);
    root.style.setProperty('--a-500', storeData.colors.accentHex); // Pink

    document.title = `${storeData.name} — Curadoria de Moda Feminina Premium`;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWhatsAppLink = (msg?: string) => {
    const defaultMsg = msg || storeData.whatsappMessage;
    return `https://api.whatsapp.com/send?phone=${storeData.whatsappNumber}&text=${encodeURIComponent(defaultMsg)}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 antialiased selection:bg-rose-100 selection:text-[#be185d]">
      
      {/* LETREIRO MARQUEE DESLIZANTE DE MODA E TENDÊNCIAS */}
      <div className="bg-[#be185d] text-white text-[10px] font-black uppercase tracking-widest py-2.5 overflow-hidden relative z-50 border-b border-white/10">
        <div className="whitespace-nowrap flex space-x-12 animate-marquee">
          <span>✨ COLECÃO RESORT EM ALTA COSTURA DISPONÍVEL NO SHOWROOM EM NATAL!</span>
          <span>👗 GANHE 10% DE DESCONTO COMPRANDO O LOOK COMPLETO NO PIX!</span>
          <span>🧵 SERVIÇO DE AJUSTE FINO SOB MEDIDA GRATUITO NA COMPRA DAS PEÇAS!</span>
          <span>✨ COLECÃO RESORT EM ALTA COSTURA DISPONÍVEL NO SHOWROOM EM NATAL!</span>
        </div>
      </div>

      {/* TOPBAR */}
      <div className="bg-stone-900 text-stone-400 text-xs py-2 border-b border-stone-850 relative z-50 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5"><Icon name="Phone" size={13} className="text-[#be185d]" /> (84) 98800-0000</span>
            <span className="flex items-center gap-1.5"><Icon name="Sparkles" size={13} className="text-[#be185d]" /> Curadoria Premium Lagoa Nova</span>
            <a href="#localizacao" className="hover:text-white flex items-center gap-1.5 transition-colors"><Icon name="MapPin" size={13} className="text-[#be185d]" /> Showroom Presencial</a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#lookbook" className="hover:text-white transition-colors font-bold text-stone-355">Montar Looks</a>
            <div className="flex items-center space-x-3 pl-3 border-l border-stone-700">
              {storeData.instagramUrl && <a href={storeData.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Icon name="Instagram" size={14} /></a>}
              {storeData.facebookUrl && <a href={storeData.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Icon name="Facebook" size={14} /></a>}
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className={`fixed left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'top-0 bg-white shadow-lg py-2 border-b border-rose-50' : 'top-0 sm:top-18 bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="flex items-center transition-transform hover:scale-101 shrink-0">
              <Logo className="h-10 sm:h-11" />
            </a>
            
            <nav className="hidden lg:flex items-center space-x-8 text-xs font-black uppercase tracking-wider text-stone-700">
              <a href="#lookbook" className="hover:text-[#be185d] transition-colors">Guia de Estilo</a>
              <a href="#provador" className="hover:text-[#be185d] transition-colors">Provador Virtual</a>
              <a href="#produtos" className="hover:text-[#be185d] transition-colors">Catálogo</a>
              <a href="#sobre" className="hover:text-[#be185d] transition-colors">Atelier</a>
              <a href="#localizacao" className="hover:text-[#be185d] transition-colors">Showroom</a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white bg-[#be185d] hover:bg-rose-700 transition-all shadow-md shadow-pink-500/20">
                <Icon name="ShoppingBag" className="mr-2" size={14} /> WhatsApp Catalog
              </a>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#be185d] hover:bg-stone-100 transition-colors">
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-t border-stone-850 px-4 pt-4 pb-6 space-y-4 shadow-2xl text-stone-300 text-sm font-semibold">
            <a href="#lookbook" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 border-b border-stone-800 hover:text-[#be185d]">✨ Guia de Estilo</a>
            <a href="#provador" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 border-b border-stone-800 hover:text-[#be185d]">📐 Provador Virtual</a>
            <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 border-b border-stone-800 hover:text-[#be185d]">👗 Coleção</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 border-b border-stone-800 hover:text-[#be185d]">🧵 Atelier Autoral</a>
            <a href="#localizacao" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 border-b border-stone-800 hover:text-[#be185d]">📍 Showroom</a>
            
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#be185d] hover:bg-rose-700">
              <Icon name="ShoppingBag" className="mr-2" size={16} /> WhatsApp Atendimento
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION - Vogue Fashion Style Editorial */}
      <section id="hero" className="relative pt-36 pb-24 md:pt-56 md:pb-36 bg-[#F5F2EB] overflow-hidden border-b-4 border-[#be185d]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/12 w-[400px] h-[400px] rounded-full bg-[#ec4899] filter blur-[130px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/12 w-[550px] h-[550px] rounded-full bg-[#be185d] filter blur-[160px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#be185d03_1px,transparent_1px),linear-gradient(to_bottom,#be185d03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 text-xs font-black tracking-widest uppercase border border-[#be185d]/50 bg-[#be185d]/10 text-[#be185d]">
                ✨ CURADORIA DE MODA AUTORAL EM NATAL
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[0.94] text-stone-900 uppercase">
                Vista sua essência <br />
                <span className="text-[#be185d] italic font-light lowercase">com atitude.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-stone-600 font-serif leading-relaxed max-w-xl mx-auto lg:mx-0">
                {storeData.description} Nossas peças traduzem a sofisticação da mulher moderna unindo caimento sob medida e tecidos nobres.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href={getWhatsAppLink('Olá! Gostaria de falar com uma consultora de estilo no showroom.')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-500/30">
                  <Icon name="ShoppingBag" className="mr-2" size={16} /> Consultar Coleção
                </a>
                <a href="#lookbook" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-wider text-stone-700 border border-stone-300 hover:border-stone-850 hover:bg-stone-50 transition-all">
                  <Icon name="Sparkles" className="mr-2" size={16} /> Ver Looks da Estação
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 border border-[#be185d]/40 transform translate-x-3 translate-y-3 pointer-events-none"></div>
                <div className="relative bg-white p-3 border border-stone-200 shadow-2xl">
                  <img 
                    src={storeData.aboutImage} 
                    alt="Modelo Look de Alta Costura Nega Nina" 
                    className="w-full h-[400px] object-cover filter brightness-[0.96] grayscale-[20%]" 
                  />
                  <div className="absolute bottom-6 left-6 bg-stone-900/95 backdrop-blur-sm border-l-4 border-[#be185d] text-white p-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#be185d] font-black">Ajustes Gratuitos</p>
                    <p className="text-xs text-stone-300 font-light mt-0.5">Sob medida no showroom</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MARCAS PARCEIRAS / TEXTIL */}
      <section className="py-10 bg-stone-950 border-y border-stone-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] tracking-widest uppercase text-stone-500 font-bold mb-6">Tecidos e aviamentos premium</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 items-center justify-items-center opacity-85">
            {storeData.brands?.map((brand, idx) => (
              <div key={idx} className="text-center group pointer-events-none">
                <span className="font-display text-base sm:text-lg tracking-wider text-slate-350 font-semibold italic border-b border-rose-500/20 pb-1 group-hover:text-[#be185d] transition-colors">
                  {brand.name}
                </span>
                <span className="block text-[8px] text-slate-500 uppercase tracking-widest mt-1">{brand.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DA GRIFE */}
      <section className="py-8 bg-stone-900 border-b border-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            
            <div className="space-y-2 flex flex-col items-center">
              <span className="p-3 bg-pink-500/10 text-[#be185d] rounded-none border border-pink-500/20">
                <Icon name="Sparkles" size={22} />
              </span>
              <h4 className="font-display font-black text-xs uppercase tracking-wider">Moda Autoral</h4>
              <p className="text-[10px] text-stone-400">Design exclusivo desenvolvido internamente em Natal.</p>
            </div>
            
            <div className="space-y-2 flex flex-col items-center">
              <span className="p-3 bg-pink-500/10 text-[#be185d] rounded-none border border-pink-500/20">
                <Icon name="Scissors" size={22} />
              </span>
              <h4 className="font-display font-black text-xs uppercase tracking-wider">Ajustes Finos</h4>
              <p className="text-[10px] text-stone-400">Serviço de costureira própria para caimento perfeito.</p>
            </div>
            
            <div className="space-y-2 flex flex-col items-center">
              <span className="p-3 bg-pink-500/10 text-[#be185d] rounded-none border border-pink-500/20">
                <Icon name="Gift" size={22} />
              </span>
              <h4 className="font-display font-black text-xs uppercase tracking-wider">Embalagem Grife</h4>
              <p className="text-[10px] text-stone-400">Looks perfumados embalados para presente de alto padrão.</p>
            </div>
            
            <div className="space-y-2 flex flex-col items-center">
              <span className="p-3 bg-pink-500/10 text-[#be185d] rounded-none border border-pink-500/20">
                <Icon name="Truck" size={22} />
              </span>
              <h4 className="font-display font-black text-xs uppercase tracking-wider">Delivery VIP</h4>
              <p className="text-[10px] text-stone-400">Condicional de roupas no conforto do seu lar.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center col-span-2 md:col-span-1">
              <span className="p-3 bg-pink-500/10 text-[#be185d] rounded-none border border-pink-500/20">
                <Icon name="ShieldCheck" size={22} />
              </span>
              <h4 className="font-display font-black text-xs uppercase tracking-wider">Compra 100% Segura</h4>
              <p className="text-[10px] text-stone-400">Showroom protegido com monitoramento e estacionamento.</p>
            </div>

          </div>
        </div>
      </section>

      {/* GUIA DE ESTILO / LOOKBOOK INTERATIVO */}
      <section id="lookbook" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#be185d]">Elegância no Momento</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase">
              Lookbook <span className="text-[#be185d] italic font-light lowercase">da estação</span>
            </h2>
            <div className="w-16 h-1 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-500 text-sm sm:text-base font-light max-w-2xl mx-auto font-serif">
              Selecione o momento da sua agenda e visualize a curadoria sob medida para você arrasar.
            </p>
          </div>

          <div className="bg-[#FAF9F6] border border-stone-200 rounded-none p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <h3 className="text-base font-display font-black text-stone-900 uppercase tracking-wider border-b border-stone-250 pb-3">Selecione o Momento</h3>
                
                <div className="flex flex-col space-y-3">
                  {Object.keys(lookbooks).map((occasion) => (
                    <button
                      key={occasion}
                      onClick={() => setQuizOccasion(occasion)}
                      className={`px-6 py-4 text-left font-bold uppercase tracking-widest text-xs transition-all border ${
                        quizOccasion === occasion
                          ? 'bg-[#be185d] text-white border-[#be185d] shadow-lg pl-8'
                          : 'bg-white text-stone-600 border-stone-200 hover:border-[#be185d]'
                      }`}
                    >
                      ✨ {occasion === 'Trabalho' ? 'Corporativo / Business' : occasion === 'Jantar' ? 'Jantar / Noite Especial' : 'Finais de Semana / Sunset'}
                    </button>
                  ))}
                </div>

                <div className="bg-white p-6 border border-stone-200 shadow-inner space-y-4">
                  <h4 className="text-xs font-black uppercase text-[#be185d] tracking-wider flex items-center">
                    <Icon name="Sparkles" className="mr-2" size={16} /> Look Sugerido pelas Estilistas
                  </h4>
                  <h5 className="text-lg font-serif font-bold text-stone-900">{lookbooks[quizOccasion].title}</h5>
                  <p className="text-xs text-stone-500 leading-relaxed font-serif">
                    {lookbooks[quizOccasion].description}
                  </p>
                  <ul className="text-xs text-stone-700 font-semibold space-y-2 pt-2">
                    {lookbooks[quizOccasion].pieces.map((piece, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Tag" className="mr-2 text-rose-500" size={12} /> {piece}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-2">
                    <a 
                      href={getWhatsAppLink(`Olá, amei o look ${lookbooks[quizOccasion].title} para ${quizOccasion} do provador do site. Gostaria de ver o catálogo completo deste estilo.`)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#be185d] hover:text-rose-700"
                    >
                      Consultar Peças no WhatsApp <Icon name="ChevronRight" className="ml-1" size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative bg-white p-3 border border-stone-200 shadow-xl min-h-[350px] overflow-hidden flex flex-col justify-between">
                <img src={lookbooks[quizOccasion].imageUrl} alt="Estilo selecionado" className="w-full h-80 object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500" />
                <div className="p-3 text-center bg-stone-50 border-t border-stone-150">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Estilo {quizOccasion}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROVADOR VIRTUAL DE TAMANHOS */}
      <section id="provador" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#be185d]">📐 Fit Perfeito</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase">
              Provador Virtual <span className="text-[#be185d] italic font-light lowercase">de tamanhos</span>
            </h2>
            <div className="w-16 h-1 bg-[#be185d] mx-auto"></div>
            <p className="text-slate-500 text-sm sm:text-base font-light">
              Evite devoluções. Insira sua altura e peso estimado abaixo e recomendaremos o tamanho ideal de vestido ou alfaiataria.
            </p>
          </div>

          <div className="bg-[#FAF9F6] border border-slate-200 rounded-none p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <form onSubmit={calculateSize} className="space-y-6">
                <h3 className="text-base font-display font-black uppercase border-b border-stone-200 pb-3 tracking-wider text-stone-900">Suas Medidas</h3>
                
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-500 uppercase">Sua Altura (cm):</label>
                  <input
                    type="number"
                    placeholder="Ex: 168"
                    value={userHeight}
                    onChange={(e) => setUserHeight(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-none border border-stone-300 bg-white focus:outline-none focus:border-[#be185d] text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-500 uppercase">Seu Peso Estimado (kg):</label>
                  <input
                    type="number"
                    placeholder="Ex: 62"
                    value={userWeight}
                    onChange={(e) => setUserWeight(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-none border border-stone-300 bg-white focus:outline-none focus:border-[#be185d] text-sm"
                  />
                </div>

                <button type="submit" className="w-full py-4 text-xs font-black uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700 transition-all">
                  Descobrir Meu Tamanho Ideal
                </button>
              </form>

              <div className="bg-white p-8 rounded-none border border-stone-200 shadow-inner flex flex-col justify-center space-y-6 min-h-[300px]">
                {sizeSuggestion ? (
                  <div className="text-center space-y-4">
                    <div className="p-3 bg-pink-500/10 rounded-none inline-block text-[#be185d] border border-pink-500/25">
                      <Icon name="Scissors" size={28} />
                    </div>
                    <h4 className="text-stone-500 text-[10px] font-black uppercase tracking-widest">Recomendação Sob Medida</h4>
                    <div className="space-y-1">
                      <p className="text-xs text-stone-400">Seu Tamanho Recomendado:</p>
                      <p className="text-4xl font-extrabold text-[#be185d]">{sizeSuggestion}</p>
                    </div>
                    <div className="bg-[#FAF9F6] p-3 rounded-none border border-stone-200 inline-block text-xs text-stone-600 font-serif">
                      *Ajustes finos e barra podem ser feitos gratuitamente em nosso showroom.
                    </div>
                    <div className="pt-2">
                      <a href={getWhatsAppLink(`Olá, simulei meu tamanho no provador virtual e deu ${sizeSuggestion}. Gostaria de reservar vestidos Aurora nesse tamanho.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#be185d] hover:text-rose-700">
                        Reservar Tamanho no WhatsApp <Icon name="ChevronRight" className="ml-1" size={16} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-3 text-stone-450">
                    <Icon name="Shirt" className="mx-auto text-stone-300" size={36} />
                    <p className="text-xs font-bold uppercase tracking-wide">Provador Virtual Ativo</p>
                    <p className="text-xs text-stone-400 max-w-xs mx-auto leading-relaxed font-serif">Insira sua altura e peso para mapearmos o melhor corte e caimento para o seu corpo.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* VITRINE DE PRODUTOS */}
      <section id="produtos" className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#be185d]">Looks de Desejo</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase">
              Curadoria <span className="text-[#be185d] italic font-light lowercase">da estação</span>
            </h2>
            <div className="w-16 h-1 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-500 text-sm sm:text-base font-light font-serif">
              Clique nos itens para solicitar disponibilidade de cores e tamanhos às nossas consultoras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storeData.products.map((product) => (
              <div key={product.id} className="bg-white border border-stone-200 rounded-none overflow-hidden flex flex-col group hover:shadow-2xl hover:border-[#be185d]/50 transition-all duration-300 relative">
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#be185d] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-none z-20 shadow-md">
                    {product.tag}
                  </span>
                )}
                
                <div className="relative h-80 overflow-hidden bg-stone-100 border-b border-stone-200">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.98] grayscale-[15%] group-hover:grayscale-0" loading="lazy" />
                  <div className="absolute inset-0 bg-[#be185d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-stone-950 border border-white">Orçar no WhatsApp</span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-display font-extrabold text-stone-900 uppercase tracking-wide line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-stone-500 font-serif leading-relaxed line-clamp-3">{product.description}</p>
                  </div>
                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-xs font-black text-[#be185d] bg-pink-500/5 border border-pink-500/20 px-3 py-1">{product.price}</span>
                    <a href={getWhatsAppLink(`Olá, gostaria de saber opções e tamanhos disponíveis para: ${product.name} (${product.price}).`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700 transition-all border border-[#be185d]">
                      Ver Look <Icon name="ChevronRight" className="ml-1" size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: ATELIER E HISTÓRIA (WOW Factor) */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-3 border-2 border-[#be185d]/25 transform -translate-x-2 translate-y-2 pointer-events-none"></div>
                <div className="relative bg-stone-900 p-2 shadow-2xl">
                  <img 
                    src={storeData.aboutImage} 
                    alt="Atelier e showroom de Costura autoral Nega Nina" 
                    className="w-full h-96 object-cover filter brightness-95 grayscale-[15%]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#be185d] bg-[#be185d]/10 px-3 py-1 border border-[#be185d]/20">Moda Lenta & Autoral</span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 leading-tight uppercase">
                  Curadoria e costura <span className="text-[#be185d] italic font-light lowercase">independente</span>
                </h2>
              </div>
              
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light font-serif text-center lg:text-left">
                {storeData.aboutText}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 p-5 bg-[#FAF9F6] border border-stone-200">
                  <span className="p-3 bg-[#be185d] text-white rounded-none">
                    <Icon name="Scissors" size={24} />
                  </span>
                  <div>
                    <h4 className="font-display font-black text-stone-900 text-sm uppercase tracking-wide">Ajuste na Hora</h4>
                    <p className="text-xs text-stone-500 mt-0.5 font-serif">Equipe de alfaiates e costureiras na loja para marcar e ajustar a barra das calças e vestidos.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-5 bg-[#FAF9F6] border border-stone-200">
                  <span className="p-3 bg-[#be185d] text-white rounded-none">
                    <Icon name="Heart" size={24} />
                  </span>
                  <div>
                    <h4 className="font-display font-black text-stone-900 text-sm uppercase tracking-wide">Consultoria Grátis</h4>
                    <p className="text-xs text-stone-500 mt-0.5 font-serif">Mapeamento de estilo personalizado presencialmente para valorizar suas curvas e biotipo.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: DEPOIMENTOS DE CLIENTES VOGUE */}
      <section className="py-24 bg-[#FAF9F6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#be185d]">Opinião das clientes</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase">
              Quem usa <span className="text-[#be185d] italic font-light lowercase">recomenda</span>
            </h2>
            <div className="w-16 h-1 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-500 text-sm sm:text-base font-light font-serif">
              Veja a opinião de mulheres reais de Natal que se encontraram na modelagem Nega Nina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 border border-stone-200 relative">
              <div className="flex items-center space-x-1 text-[#be185d] mb-4">
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
              </div>
              <p className="text-stone-600 text-xs leading-relaxed italic mb-6 font-serif">
                "Os vestidos Aurora de seda têm um caimento surreal de lindo. Fui ao showroom na Prudente e a costureira fez o ajuste da barra em 20 minutos. Atendimento VIP!"
              </p>
              <div className="flex items-center space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Isabela Vasconcelos" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-display font-black text-stone-900 text-xs uppercase tracking-wider">Isabela Vasconcelos</h4>
                  <span className="text-[10px] text-stone-400">Cliente - Tirol</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-stone-200 relative">
              <div className="flex items-center space-x-1 text-[#be185d] mb-4">
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
              </div>
              <p className="text-stone-600 text-xs leading-relaxed italic mb-6 font-serif">
                "Uso muito a alfaiataria deles para reuniões e audiências. As calças pantalonas de linho não deformam e duram anos impecáveis. Sem dúvidas, o melhor caimento de Natal."
              </p>
              <div className="flex items-center space-x-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Dra. Aline Sales" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-display font-black text-stone-900 text-xs uppercase tracking-wider">Dra. Aline Sales</h4>
                  <span className="text-[10px] text-stone-400">Advogada - Petrópolis</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-stone-200 relative">
              <div className="flex items-center space-x-1 text-[#be185d] mb-4">
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
                <Icon name="Star" size={16} className="fill-[#be185d] text-[#be185d]" />
              </div>
              <p className="text-stone-600 text-xs leading-relaxed italic mb-6 font-serif">
                "Fiz a simulação do provador de tamanho no site e veio a indicação perfeita (tamanho M). A equipe de vendas me mandou fotos das estampas no WhatsApp. Encantada!"
              </p>
              <div className="flex items-center space-x-3">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Renata Valença" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-display font-black text-stone-900 text-xs uppercase tracking-wider">Renata Valença</h4>
                  <span className="text-[10px] text-stone-400">Cliente - Lagoa Nova</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ INTERATIVO MODA */}
      <section className="py-24 bg-white text-stone-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#be185d]">Dúvidas Gerais</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 uppercase">
              Perguntas <span className="text-[#be185d] italic font-light lowercase">Frequentes</span>
            </h2>
            <div className="w-16 h-1 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-550 text-sm sm:text-base font-light font-serif">
              Encontre respostas para o serviço de costureira, condicional e trocas de coleção.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Como funciona o serviço de Ajuste Fino na loja?",
                a: "Na compra de qualquer peça em nosso showroom presencial, as marcações e os ajustes (fazer barra de calças ou vestidos, ajustar cintura de saias) são realizados gratuitamente pela nossa costureira parceira do atelier."
              },
              {
                q: "Vocês enviam roupas em 'Condicional' para casa?",
                a: "Sim, para clientes cadastradas em Lagoa Nova, Tirol, Petrópolis e Capim Macio. Nós enviamos uma mala selecionada com os looks e tamanhos de sua preferência para você provar no conforto da sua residência."
              },
              {
                q: "Como funciona a política de trocas?",
                a: "A troca de coleções normais pode ser efetuada em até 30 dias após a data da compra no showroom, desde que a peça esteja com a etiqueta inviolada e sem indícios de uso."
              },
              {
                q: "Posso parcelar minhas compras no showroom?",
                a: "Sim, parcelamos em até 6x sem juros em todos os cartões de crédito para compras normais e em até 10x sem juros dependendo da coleção especial Resort."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left text-slate-950 font-display font-black text-sm uppercase tracking-wide"
                >
                  <span>{faq.q}</span>
                  <Icon
                    name={openFaqIndex === idx ? "Minus" : "Plus"}
                    className="text-[#be185d]"
                    size={16}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqIndex === idx ? "max-h-[300px] border-t border-slate-200" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-xs text-slate-600 leading-relaxed font-light bg-white font-serif">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO E CONTATO */}
      <section id="localizacao" className="py-24 bg-[#FAF9F6] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#be185d]">Venha nos ver</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase">Nosso Showroom Presencial</h2>
            <div className="w-16 h-1 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-500 text-sm sm:text-base font-light font-serif">
              Dispomos de atendimento privativo e climatizado na Prudente de Morais com estacionamento grátis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-5 bg-white p-8 rounded-none border border-stone-200 shadow-sm flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-display font-black text-stone-900 uppercase tracking-wide">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-[#FAF9F6] rounded-none text-stone-500 border border-stone-200">
                      <Icon name="MapPin" size={20} />
                    </span>
                    <div>
                      <h4 className="font-bold text-stone-850 text-xs uppercase tracking-wider">Endereço Showroom</h4>
                      <p className="text-xs text-stone-500 font-serif mt-1 leading-relaxed">{storeData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-[#FAF9F6] rounded-none text-stone-500 border border-stone-200">
                      <Icon name="Phone" size={20} />
                    </span>
                    <div>
                      <h4 className="font-bold text-stone-850 text-xs uppercase tracking-wider">WhatsApp Vendas</h4>
                      <p className="text-xs text-stone-500 font-serif mt-1">{storeData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-[#FAF9F6] rounded-none text-stone-500 border border-stone-200">
                      <Icon name="Clock" size={20} />
                    </span>
                    <div>
                      <h4 className="font-bold text-stone-850 text-xs uppercase tracking-wider">Horário do Showroom</h4>
                      <div className="text-xs text-stone-500 font-serif mt-1 space-y-1">
                        <p>{storeData.businessHours.weekdays}</p>
                        <p>{storeData.businessHours.saturday}</p>
                        <p>{storeData.businessHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-stone-200">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700 transition-all">
                  <Icon name="Phone" className="mr-2" size={16} /> Chamar no WhatsApp
                </a>
                <a href={storeData.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-700 bg-[#FAF9F6] border border-stone-200 hover:bg-slate-100 transition-all">
                  <Icon name="MapPin" className="mr-2 text-stone-500" size={16} /> Como Chegar (Google Maps)
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-96 lg:h-auto rounded-none overflow-hidden border border-stone-200 bg-white p-2">
              <iframe src={storeData.googleMapsEmbedUrl} className="w-full h-full border-0" allowFullScreen={false} loading="lazy" title="Localização Nega Nina"></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-450 py-16 border-t border-[#be185d]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-wider mb-4">Institucional</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#hero" className="hover:text-white transition-colors">Sobre a Nega Nina</a></li>
                <li><a href="#localizacao" className="hover:text-white transition-colors">Nosso Showroom</a></li>
                <li><a href={getWhatsAppLink('Olá! Gostaria de saber sobre parcerias e representações.')} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Trabalhe conosco</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-wider mb-4">Guia & Serviços</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#lookbook" className="hover:text-white transition-colors">Guia de Estilo Lookbook</a></li>
                <li><a href="#provador" className="hover:text-white transition-colors">Provador Virtual</a></li>
                <li><a href={getWhatsAppLink('Olá! Gostaria de agendar uma mala condicional na minha casa.')} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Solicitar Condicional</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-wider mb-4">Acompanhe-nos</h4>
              <ul className="space-y-2 text-xs">
                {storeData.instagramUrl && <li><a href={storeData.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center"><Icon name="Instagram" size={13} className="mr-2 text-[#be185d]" /> Instagram</a></li>}
                {storeData.facebookUrl && <li><a href={storeData.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center"><Icon name="Facebook" size={13} className="mr-2 text-[#be185d]" /> Facebook</a></li>}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-wider mb-4">Formas de Pagamento</h4>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase">
                <span className="bg-stone-900 px-2.5 py-1.5 border border-stone-800 text-center text-stone-300">💳 Crédito</span>
                <span className="bg-stone-900 px-2.5 py-1.5 border border-stone-800 text-center text-slate-300">⚡ Pix</span>
                <span className="bg-stone-900 px-2.5 py-1.5 border border-stone-800 text-center text-slate-300">📄 Boleto</span>
                <span className="bg-stone-900 px-2.5 py-1.5 border border-stone-800 text-center text-slate-300">✍️ Crediário</span>
              </div>
            </div>

          </div>

          <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs">
            <div className="space-y-2">
              <Logo className="h-10 mx-auto md:mx-0" />
              <p className="text-[10px] text-stone-500 font-light mt-2">
                © {new Date().getFullYear()} Nega Nina – Showroom Natal. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="text-center md:text-right space-y-2 text-stone-500 text-[9px] uppercase font-bold tracking-wider">
              <p>Atelier de Costura Autoral Lagoa Nova</p>
              <p>CNPJ: 22.890.109/0001-92</p>
              <p>
                Desenvolvido por{' '}
                <a href="https://github.com/FalAiquoc" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors text-slate-400">
                  Diogo Falcão (FalAiquoc)
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
