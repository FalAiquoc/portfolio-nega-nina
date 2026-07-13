import { useEffect, useState } from 'react';
import { storeData } from './data';
import { Icon } from './components/Icon';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Estado do Quiz de Estilo
  const [quizOccasion, setQuizOccasion] = useState<string>('Trabalho');

  // Lookbooks baseados na ocasião selecionada
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

    // Cores da Loja de Roupas
    root.style.setProperty('--p-50', '#fff5f7'); // Rosa muito suave
    root.style.setProperty('--p-100', '#ffe4e6');
    root.style.setProperty('--p-500', storeData.colors.primaryHex); // Rosa Magenta
    root.style.setProperty('--p-600', '#9d174d');
    root.style.setProperty('--p-700', '#831843');
    root.style.setProperty('--p-800', '#500724');

    root.style.setProperty('--a-50', `${storeData.colors.accentHex}10`);
    root.style.setProperty('--a-100', `${storeData.colors.accentHex}20`);
    root.style.setProperty('--a-500', storeData.colors.accentHex); // Pink

    document.title = `${storeData.name} — Showroom de Moda Natal`;
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
    <div className="min-h-screen bg-slate-50 text-stone-900 antialiased selection:bg-rose-250 selection:text-rose-900">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center space-x-1">
              <span className="text-2xl font-black uppercase tracking-widest text-[#be185d]" style={{ fontFamily: 'var(--font-display)' }}>
                NEGA<span className="font-light italic text-stone-700">NINA</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#lookbook" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-rose-600 transition-colors">Guia de Estilo</a>
              <a href="#produtos" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-rose-600 transition-colors">Coleção</a>
              <a href="#sobre" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-rose-600 transition-colors">Showroom</a>
              <a href="#localizacao" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-rose-600 transition-colors">Localização</a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700 rounded-none transition-all hover:scale-105">
                <Icon name="ShoppingBag" className="mr-2" size={14} /> Atendimento VIP
              </a>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors">
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 border border-rose-200">
                ✨ Curadoria Exclusiva
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                Vista sua <span className="font-light italic block text-stone-500 mt-2">essência autêntica</span>
              </h1>
              <p className="text-base text-stone-600 font-serif leading-relaxed max-w-lg mx-auto lg:mx-0">
                {storeData.tagline}. {storeData.description} Peças fluidas e cortes refinados criados para a mulher moderna.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700 rounded-none shadow-md transition-all hover:scale-105">
                  <Icon name="ShoppingBag" className="mr-2" size={16} /> Consultar Catálogo
                </a>
                <a href="#lookbook" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-stone-700 bg-white border border-stone-250 hover:bg-stone-50 rounded-none transition-all">
                  Montar Looks
                </a>
              </div>
            </div>

            {/* Imagem Assimétrica estilo Editorial */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-6 -left-6 w-full h-full border border-rose-300 rounded-none pointer-events-none"></div>
                <div className="relative bg-white p-3 shadow-2xl rounded-none">
                  <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" alt="Nova Coleção Showroom" className="w-full h-[420px] object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GUIA DE ESTILO / LOOKBOOK INTERATIVO */}
      <section id="lookbook" className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
              Guia de Estilo <span className="font-light italic text-stone-500">Nega Nina</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-500 font-serif">
              Selecione a ocasião e confira a curadoria especial que nossas consultoras de imagem montaram para você brilhar.
            </p>
          </div>

          <div className="bg-stone-50 p-8 lg:p-12 border border-stone-200 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Opções de Ocasião */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-stone-800">Escolha o seu momento:</h3>
                
                <div className="flex flex-col space-y-3">
                  {Object.keys(lookbooks).map((occasion) => (
                    <button
                      key={occasion}
                      onClick={() => setQuizOccasion(occasion)}
                      className={`px-6 py-4 text-left font-bold uppercase tracking-widest text-xs transition-all border ${
                        quizOccasion === occasion
                          ? 'bg-[#be185d] text-white border-[#be185d] shadow-md pl-8'
                          : 'bg-white text-stone-600 border-stone-200 hover:border-[#be185d]'
                      }`}
                    >
                      ✨ {occasion === 'Trabalho' ? 'Corporativo & Trabalho' : occasion === 'Jantar' ? 'Jantar & Noite' : 'Finais de Semana & Praia'}
                    </button>
                  ))}
                </div>

                <div className="bg-white p-6 border border-stone-200 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#be185d] flex items-center">
                    <Icon name="Sparkles" className="mr-2" size={16} /> Look Recomendado
                  </h4>
                  <h5 className="text-lg font-bold font-serif">{lookbooks[quizOccasion].title}</h5>
                  <p className="text-xs text-stone-500 font-serif leading-relaxed">
                    {lookbooks[quizOccasion].description}
                  </p>
                  <ul className="text-xs text-stone-600 font-semibold space-y-2 pt-2">
                    {lookbooks[quizOccasion].pieces.map((piece, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Tag" className="mr-2 text-rose-500" size={12} /> {piece}
                      </li>
                    ))}
                  </ul>
                  <a href={getWhatsAppLink(`Olá, gostei do look sugerido para ${quizOccasion} (${lookbooks[quizOccasion].title}) e gostaria de consultar tamanhos disponíveis.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-700">
                    Consultar este look no WhatsApp <Icon name="ChevronRight" className="ml-1" size={12} />
                  </a>
                </div>
              </div>

              {/* Lado Visual do Lookbook */}
              <div className="relative bg-white p-3 border border-stone-250 shadow-lg min-h-[350px] overflow-hidden flex flex-col justify-between">
                <img src={lookbooks[quizOccasion].imageUrl} alt="Estilo selecionado" className="w-full h-80 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="p-3 text-center bg-stone-50 border-t border-stone-150">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Estilo {quizOccasion}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* VITRINE DE PRODUTOS */}
      <section id="produtos" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
              Curadoria <span className="font-light italic text-stone-500">da Estação</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-500 font-serif">Peças chaves selecionadas para compor seu armário cápsula com altíssima elegância.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storeData.products.map((product) => (
              <div key={product.id} className="bg-white rounded-none overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group">
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-102" loading="lazy" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-bold text-stone-800 line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-stone-500 font-serif leading-relaxed line-clamp-2">{product.description}</p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-stone-600">{product.price}</span>
                    <a href={getWhatsAppLink(`Gostaria de solicitar orçamento para o produto: ${product.name}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700">
                      Orçamento
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM (SOBRE NÓS) */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative p-3 border border-stone-200 bg-white shadow-xl">
                <img src={storeData.aboutImage} alt="Showroom Nega Nina" className="w-full h-96 object-cover grayscale-[10%]" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#be185d]">Nossa Filosofia</span>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Elegância que acompanha a <span className="font-light italic text-stone-500 block mt-2">mulher contemporânea</span>
              </h2>
              <p className="text-stone-600 font-serif leading-relaxed text-base font-light">
                {storeData.aboutText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 p-4 bg-stone-50 border border-stone-150">
                  <Icon name="Sparkles" className="text-rose-600" size={24} />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-stone-700">Tecidos Nobres</h4>
                    <p className="text-[10px] text-stone-400">Linho, seda e algodão egípcio de alto padrão.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-stone-50 border border-stone-150">
                  <Icon name="Scissors" className="text-rose-600" size={24} />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-stone-700">Costura Autoral</h4>
                    <p className="text-[10px] text-stone-400">Acabamento refinado feito para durar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO E CONTATO */}
      <section id="localizacao" className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>Visite Nosso Showroom</h2>
            <div className="w-12 h-0.5 bg-[#be185d] mx-auto"></div>
            <p className="text-stone-500 font-serif">Um espaço de moda íntimo e climatizado para receber você com total conforto em Lagoa Nova.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-white p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-700">Showroom Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-stone-50 rounded-none text-stone-500">
                      <Icon name="MapPin" size={18} />
                    </span>
                    <div>
                      <h4 className="font-bold text-stone-700 text-xs uppercase tracking-wider">Endereço</h4>
                      <p className="text-xs text-stone-500 font-serif mt-1">{storeData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-stone-50 rounded-none text-stone-500">
                      <Icon name="Phone" size={18} />
                    </span>
                    <div>
                      <h4 className="font-bold text-stone-700 text-xs uppercase tracking-wider">WhatsApp</h4>
                      <p className="text-xs text-stone-500 font-serif mt-1">{storeData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-stone-50 rounded-none text-stone-500">
                      <Icon name="Clock" size={18} />
                    </span>
                    <div>
                      <h4 className="font-bold text-stone-700 text-xs uppercase tracking-wider">Horários</h4>
                      <div className="text-xs text-stone-500 font-serif mt-1 space-y-1">
                        <p>{storeData.businessHours.weekdays}</p>
                        <p>{storeData.businessHours.saturday}</p>
                        <p>{storeData.businessHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-stone-150">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white bg-[#be185d] hover:bg-rose-700 transition-all shadow-md">
                  <Icon name="ShoppingBag" className="mr-2" size={14} /> Falar com Vendedora
                </a>
                <a href={storeData.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-700 bg-stone-100 hover:bg-stone-200 transition-all">
                  Como Chegar
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-96 lg:h-auto rounded-none overflow-hidden shadow-sm border border-stone-200 bg-white p-2">
              <iframe src={storeData.googleMapsEmbedUrl} className="w-full h-full border-0" allowFullScreen={false} loading="lazy" title="Localização Nega Nina"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left space-y-3">
              <span className="text-lg font-black uppercase tracking-widest text-white" style={{ fontFamily: 'var(--font-display)' }}>
                NEGA<span className="font-light italic text-stone-400">NINA</span>
              </span>
              <p className="text-[10px] text-stone-500 max-w-sm mx-auto md:mx-0">
                {storeData.tagline}
              </p>
            </div>
            <div className="text-center md:text-right space-y-4">
              <p className="text-[10px] text-stone-500">
                © {new Date().getFullYear()} Nega Nina. Todos os direitos reservados.
              </p>
              <p className="text-[10px] text-stone-500">
                Desenvolvido com carinho por{' '}
                <a href="https://github.com/FalAiquoc" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
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
