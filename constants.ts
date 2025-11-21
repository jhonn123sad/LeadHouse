import { Building2, Home, Key, TrendingUp, Zap, BarChart3, PenTool, Users } from 'lucide-react';
import { FlowExample, PricingTier, Testimonial, FAQItem } from './types';

export const FLOW_EXAMPLES: FlowExample[] = [
  {
    id: 'launch',
    title: 'Lançamento de Empreendimento',
    description: 'Captura interessados, qualifica por intenção (compra/locação) e agenda visitas VIP.',
    icon: Building2,
    steps: ['Lead', 'Pré-qualificação', 'Agenda', 'Pré-venda'],
    kpi: '+40% de qualificação'
  },
  {
    id: 'standard',
    title: 'Captação Padrão',
    description: 'Segmenta por tipo imóvel, faixa de preço e urgência do lead. Filtra curiosos.',
    icon: Home,
    steps: ['Interesse', 'Localização', 'Orçamento', 'Agendamento'],
    kpi: 'Redução de 32% no CPL'
  },
  {
    id: 'openhouse',
    title: 'Open House / Visita',
    description: 'Cria senso de urgência, gerencia vagas limitadas e confirma presença automaticamente.',
    icon: Key,
    steps: ['Convite', 'Dados', 'Urgência', 'Calendário'],
    kpi: '85% de comparecimento'
  },
  {
    id: 'seller',
    title: 'Captação de Vendedor',
    description: 'Persuade proprietário a pedir avaliação e coleta dados essenciais do imóvel.',
    icon: TrendingUp,
    steps: ['Oferta Avaliação', 'Dados Imóvel', 'Contato', 'Agendamento'],
    kpi: 'Captação 2x mais rápida'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Template Pronto',
    price: 'R$ 200',
    periodicity: '/ template',
    features: ['Template validado', 'Instalação rápida', 'Sem mensalidade do fluxo', 'Suporte na implementação'],
    cta: 'Falar com especialista'
  },
  {
    name: 'Pro',
    description: 'Typebot Personalizado',
    price: 'A partir de R$ 500',
    features: ['Criado do zero', 'Fluxo sob medida', 'Branding da imobiliária', 'Integração com CRM', 'Estratégia avançada'],
    cta: 'Falar com especialista',
    highlight: true
  },
  {
    name: 'Tráfego Pago',
    description: 'Gestão Completa',
    price: 'Sob Consulta',
    features: ['Gestão + otimização', 'Criativos + anúncios', 'Relatórios semanais', '1 Typebot Pro incluso', 'Segmentação avançada'],
    cta: 'Falar com especialista'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Reduzimos nosso tempo de resposta para zero e a qualificação automática limpou 80% dos curiosos.",
    author: "Carlos Mendes",
    role: "Diretor da Mendes Imóveis",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    quote: "O fluxo de Open House lotou nossa agenda em 2 dias. Simplesmente funciona.",
    author: "Fernanda Lima",
    role: "Corretora Autônoma",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    quote: "A experiência do cliente melhorou muito. Eles já chegam na visita sabendo o que querem.",
    author: "Ricardo Souza",
    role: "Gestor de Tráfego Imob",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Preciso de integração com CRM?",
    answer: "Não é obrigatório. O Typebot exporta dados para planilhas (Google Sheets) automaticamente, mas também integramos com os principais CRMs do mercado se precisar."
  },
  {
    question: "Funciona bem no celular?",
    answer: "Perfeitamente. Nossa metodologia é Mobile-First, garantindo que a experiência seja fluida como uma conversa de WhatsApp."
  },
  {
    question: "O que está incluso no plano de Tráfego?",
    answer: "Inclui toda a gestão de campanhas (Meta/Google), criação de anúncios, relatórios de performance e 1 fluxo Typebot Pro incluso para sua necessidade."
  },
  {
    question: "Como funciona o pagamento dos fluxos?",
    answer: "Para os planos Starter e Pro, o pagamento é único por projeto entregue. Não cobramos mensalidade sobre o uso do Typebot (você usa sua conta ou plano gratuito)."
  }
];