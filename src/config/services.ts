import serviceCleansing from "@/assets/service-cleansing.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceHairRemoval from "@/assets/service-hair-removal.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import serviceBody from "@/assets/service-body.jpg";
import serviceManicure from "@/assets/service-manicure.jpg";
import serviceWeightLoss from "@/assets/service-weight-loss.jpg";

export interface ServiceData {
  slug: string;
  image: string;
  titleKey: string;
  descKey: string;
  longDescKey: string;
  benefitsKeys: string[];
  faqKeys: { q: string; a: string }[];
  metaTitlePt: string;
  metaDescPt: string;
  size: "featured" | "regular";
  highlight?: boolean;
}

export const services: ServiceData[] = [
  {
    slug: "pintura-interior",
    image: serviceCleansing,
    titleKey: "services.deepCleansing",
    descKey: "services.deepCleansingDesc",
    longDescKey: "servicePage.interiorLong",
    benefitsKeys: ["servicePage.interiorBenefit1", "servicePage.interiorBenefit2", "servicePage.interiorBenefit3", "servicePage.interiorBenefit4"],
    faqKeys: [
      { q: "servicePage.interiorFaq1Q", a: "servicePage.interiorFaq1A" },
      { q: "servicePage.interiorFaq2Q", a: "servicePage.interiorFaq2A" },
    ],
    metaTitlePt: "Pintura Interior no Montijo | PintaJá - Orçamento Grátis",
    metaDescPt: "Serviço de pintura interior profissional no Montijo e arredores. Paredes, tetos, rodapés. Tintas premium. Orçamento gratuito e sem compromisso.",
    size: "featured",
  },
  {
    slug: "pintura-exterior",
    image: serviceFacial,
    titleKey: "services.facialTreatments",
    descKey: "services.facialTreatmentsDesc",
    longDescKey: "servicePage.exteriorLong",
    benefitsKeys: ["servicePage.exteriorBenefit1", "servicePage.exteriorBenefit2", "servicePage.exteriorBenefit3", "servicePage.exteriorBenefit4"],
    faqKeys: [
      { q: "servicePage.exteriorFaq1Q", a: "servicePage.exteriorFaq1A" },
      { q: "servicePage.exteriorFaq2Q", a: "servicePage.exteriorFaq2A" },
    ],
    metaTitlePt: "Pintura Exterior no Montijo | PintaJá - Orçamento Grátis",
    metaDescPt: "Pintura de fachadas e exteriores no Montijo. Tintas resistentes às intempéries. Pintores profissionais. Orçamento gratuito.",
    size: "regular",
  },
  {
    slug: "pintura-comercial",
    image: serviceHairRemoval,
    titleKey: "services.hairRemoval",
    descKey: "services.hairRemovalDesc",
    longDescKey: "servicePage.comercialLong",
    benefitsKeys: ["servicePage.comercialBenefit1", "servicePage.comercialBenefit2", "servicePage.comercialBenefit3", "servicePage.comercialBenefit4"],
    faqKeys: [
      { q: "servicePage.comercialFaq1Q", a: "servicePage.comercialFaq1A" },
      { q: "servicePage.comercialFaq2Q", a: "servicePage.comercialFaq2A" },
    ],
    metaTitlePt: "Pintura Comercial no Montijo | PintaJá - Orçamento Grátis",
    metaDescPt: "Pintura de escritórios, lojas e espaços comerciais no Montijo. Horários flexíveis. Pintores certificados. Orçamento grátis.",
    size: "regular",
  },
  {
    slug: "preparacao-reparacao",
    image: serviceMassage,
    titleKey: "services.massages",
    descKey: "services.massagesDesc",
    longDescKey: "servicePage.preparacaoLong",
    benefitsKeys: ["servicePage.preparacaoBenefit1", "servicePage.preparacaoBenefit2", "servicePage.preparacaoBenefit3", "servicePage.preparacaoBenefit4"],
    faqKeys: [
      { q: "servicePage.preparacaoFaq1Q", a: "servicePage.preparacaoFaq1A" },
      { q: "servicePage.preparacaoFaq2Q", a: "servicePage.preparacaoFaq2A" },
    ],
    metaTitlePt: "Preparação e Reparação de Superfícies no Montijo | PintaJá",
    metaDescPt: "Preparação e reparação de paredes antes da pintura no Montijo. Tratamento de fissuras, humidades e aplicação de primários.",
    size: "featured",
  },
  {
    slug: "pintura-decorativa",
    image: serviceBody,
    titleKey: "services.bodyTreatments",
    descKey: "services.bodyTreatmentsDesc",
    longDescKey: "servicePage.decorativaLong",
    benefitsKeys: ["servicePage.decorativaBenefit1", "servicePage.decorativaBenefit2", "servicePage.decorativaBenefit3", "servicePage.decorativaBenefit4"],
    faqKeys: [
      { q: "servicePage.decorativaFaq1Q", a: "servicePage.decorativaFaq1A" },
      { q: "servicePage.decorativaFaq2Q", a: "servicePage.decorativaFaq2A" },
    ],
    metaTitlePt: "Pintura Decorativa no Montijo | PintaJá - Orçamento Grátis",
    metaDescPt: "Pintura decorativa, texturas e efeitos especiais no Montijo. Transforme o seu espaço com acabamentos únicos. Orçamento grátis.",
    size: "regular",
  },
  {
    slug: "pintura-tetos",
    image: serviceManicure,
    titleKey: "services.manicurePedicure",
    descKey: "services.manicurePedicureDesc",
    longDescKey: "servicePage.tetosLong",
    benefitsKeys: ["servicePage.tetosBenefit1", "servicePage.tetosBenefit2", "servicePage.tetosBenefit3", "servicePage.tetosBenefit4"],
    faqKeys: [
      { q: "servicePage.tetosFaq1Q", a: "servicePage.tetosFaq1A" },
      { q: "servicePage.tetosFaq2Q", a: "servicePage.tetosFaq2A" },
    ],
    metaTitlePt: "Pintura de Tetos no Montijo | PintaJá - Orçamento Grátis",
    metaDescPt: "Pintura e reparação de tetos no Montijo e arredores. Técnicas profissionais para acabamento perfeito. Orçamento gratuito.",
    size: "regular",
  },
  {
    slug: "impermeabilizacao",
    image: serviceWeightLoss,
    titleKey: "services.weightLoss",
    descKey: "services.weightLossDesc",
    longDescKey: "servicePage.impermeabilizacaoLong",
    benefitsKeys: ["servicePage.impermeabilizacaoBenefit1", "servicePage.impermeabilizacaoBenefit2", "servicePage.impermeabilizacaoBenefit3", "servicePage.impermeabilizacaoBenefit4"],
    faqKeys: [
      { q: "servicePage.impermeabilizacaoFaq1Q", a: "servicePage.impermeabilizacaoFaq1A" },
      { q: "servicePage.impermeabilizacaoFaq2Q", a: "servicePage.impermeabilizacaoFaq2A" },
    ],
    metaTitlePt: "Impermeabilização no Montijo | PintaJá - Orçamento Grátis",
    metaDescPt: "Impermeabilização de paredes e fachadas no Montijo. Proteção contra humidade e infiltrações. Orçamento gratuito.",
    size: "regular",
    highlight: true,
  },
];
