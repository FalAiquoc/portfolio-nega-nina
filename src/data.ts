import type { StoreData } from './types';

export const storeData: StoreData = {
  name: 'Nega Nina',
  tagline: 'Moda feminina autoral com elegância, atitude e leveza em Lagoa Nova',
  description: 'Coleções exclusivas que traduzem a sofisticação da mulher moderna com conforto e qualidade de tecidos premium. Venha se encantar com nosso showroom!',
  aboutText: 'A Nega Nina é mais do que uma loja de roupas; é um espaço de expressão de estilo e auto-estima feminina em Natal. Com uma curadoria minuciosa de tecidos nobres e modelagens impecáveis, oferecemos peças versáteis que acompanham a mulher contemporânea do trabalho aos momentos de lazer, sempre priorizando elegância e conforto.',
  aboutImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
  phone: '(84) 98800-0000',
  phoneFormatted: '84988000000',
  whatsappNumber: '5584988000000',
  whatsappMessage: 'Olá! Gostaria de tirar dúvidas sobre peças do catálogo ou agendar uma visita ao showroom.',
  address: 'Av. Prudente de Morais, 3857 - Lagoa Nova, Natal - RN, 59020-400',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.210459590483!2d-35.2157502!3d-5.8115598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301c43d8393bb%3A0xe54e6fa16b0b2303!2sAv.%20Prudente%20de%20Morais%2C%203857%20-%20Lagoa%20Nova%2C%20Natal%20-%20RN%2C%2059020-400!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr',
  googleMapsDirectionsUrl: 'https://maps.app.goo.gl/u1XvXQ5V9c7s6b6C8',
  businessHours: {
    weekdays: 'Segunda a Sexta: 09:00 às 19:00',
    saturday: 'Sábado: 09:00 às 17:00',
    sunday: 'Domingo: Fechado',
  },
  colors: {
    primaryHex: '#be185d', // Rosa Magenta Sofisticado
    accentHex: '#ec4899',  // Rosa Claro Vibrante
  },
  typography: {
    displayFontFamily: 'Montserrat',
    bodyFontFamily: 'Lora',
    importUrl: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap',
  },
  features: [
    {
      title: 'Curadoria Exclusiva',
      description: 'Peças selecionadas a dedo seguindo as maiores tendências globais de moda.',
      iconName: 'Sparkles',
    },
    {
      title: 'Consultoria de Imagem',
      description: 'Ajuda especializada no showroom para encontrar o look perfeito para seu estilo.',
      iconName: 'Users',
    },
    {
      title: 'Ajustes Finos Internos',
      description: 'Serviço sob medida para que cada peça se adapte perfeitamente ao seu caimento.',
      iconName: 'Scissors',
    },
  ],
  products: [
    {
      id: 'prod-1',
      name: 'Vestidos Fluídos e Macacões',
      description: 'Modelagens leves, estampas exclusivas e tecidos respiráveis perfeitos para o clima de Natal.',
      price: 'A partir de R$ 189,90',
      iconName: 'Shirt',
      imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'prod-2',
      name: 'Alfaiataria Feminina Moderna',
      description: 'Blazers estruturados, calças pantalonas e bermudas sociais com costura reforçada de alto padrão.',
      price: 'A partir de R$ 220,00',
      iconName: 'ShoppingBag',
      imageUrl: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'prod-3',
      name: 'Acessórios e Bolsas Curadas',
      description: 'Cintos de couro legítimo, semijoias exclusivas e bolsas de design autoral para complementar seu look.',
      price: 'A partir de R$ 79,90',
      iconName: 'Tag',
      imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    },
  ],
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
};
