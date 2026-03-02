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
  introKey: string;
  processKeys: string[];
  benefitsKeys: string[];
  faqKeys: { q: string; a: string }[];
  metaTitlePt: string;
  metaDescPt: string;
  imageAlt: string;
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
    introKey: "servicePage.interiorIntro",
    processKeys: ["servicePage.interiorProcess1", "servicePage.interiorProcess2", "servicePage.interiorProcess3", "servicePage.interiorProcess4", "servicePage.interiorProcess5"],
    benefitsKeys: ["servicePage.interiorBenefit1", "servicePage.interiorBenefit2", "servicePage.interiorBenefit3", "servicePage.interiorBenefit4", "servicePage.interiorBenefit5", "servicePage.interiorBenefit6"],
    faqKeys: [
      { q: "servicePage.interiorFaq1Q", a: "servicePage.interiorFaq1A" },
      { q: "servicePage.interiorFaq2Q", a: "servicePage.interiorFaq2A" },
      { q: "servicePage.interiorFaq3Q", a: "servicePage.interiorFaq3A" },
      { q: "servicePage.interiorFaq4Q", a: "servicePage.interiorFaq4A" },
    ],
    metaTitlePt: "Pintura Interior no Montijo | Pintores Profissionais | PintaJá",
    metaDescPt: "Serviço de pintura interior no Montijo e arredores. Pintores certificados. Paredes, tetos e rodapés com tintas premium. Orçamento grátis em 24h. ☎ Ligue já!",
    imageAlt: "Serviço de pintura interior profissional no Montijo - PintaJá pintores certificados",
    size: "featured",
  },
  {
    slug: "pintura-exterior",
    image: serviceFacial,
    titleKey: "services.facialTreatments",
    descKey: "services.facialTreatmentsDesc",
    longDescKey: "servicePage.exteriorLong",
    introKey: "servicePage.exteriorIntro",
    processKeys: ["servicePage.exteriorProcess1", "servicePage.exteriorProcess2", "servicePage.exteriorProcess3", "servicePage.exteriorProcess4", "servicePage.exteriorProcess5"],
    benefitsKeys: ["servicePage.exteriorBenefit1", "servicePage.exteriorBenefit2", "servicePage.exteriorBenefit3", "servicePage.exteriorBenefit4", "servicePage.exteriorBenefit5", "servicePage.exteriorBenefit6"],
    faqKeys: [
      { q: "servicePage.exteriorFaq1Q", a: "servicePage.exteriorFaq1A" },
      { q: "servicePage.exteriorFaq2Q", a: "servicePage.exteriorFaq2A" },
      { q: "servicePage.exteriorFaq3Q", a: "servicePage.exteriorFaq3A" },
      { q: "servicePage.exteriorFaq4Q", a: "servicePage.exteriorFaq4A" },
    ],
    metaTitlePt: "Pintura Exterior no Montijo | Fachadas e Varandas | PintaJá",
    metaDescPt: "Pintura exterior e de fachadas no Montijo. Tintas resistentes a intempéries e UV. Pintores profissionais com garantia. Orçamento grátis sem compromisso.",
    imageAlt: "Pintura exterior de fachada no Montijo - PintaJá serviço profissional",
    size: "regular",
  },
  {
    slug: "pintura-comercial",
    image: serviceHairRemoval,
    titleKey: "services.hairRemoval",
    descKey: "services.hairRemovalDesc",
    longDescKey: "servicePage.comercialLong",
    introKey: "servicePage.comercialIntro",
    processKeys: ["servicePage.comercialProcess1", "servicePage.comercialProcess2", "servicePage.comercialProcess3", "servicePage.comercialProcess4", "servicePage.comercialProcess5"],
    benefitsKeys: ["servicePage.comercialBenefit1", "servicePage.comercialBenefit2", "servicePage.comercialBenefit3", "servicePage.comercialBenefit4", "servicePage.comercialBenefit5", "servicePage.comercialBenefit6"],
    faqKeys: [
      { q: "servicePage.comercialFaq1Q", a: "servicePage.comercialFaq1A" },
      { q: "servicePage.comercialFaq2Q", a: "servicePage.comercialFaq2A" },
      { q: "servicePage.comercialFaq3Q", a: "servicePage.comercialFaq3A" },
      { q: "servicePage.comercialFaq4Q", a: "servicePage.comercialFaq4A" },
    ],
    metaTitlePt: "Pintura Comercial no Montijo | Escritórios e Lojas | PintaJá",
    metaDescPt: "Pintura de espaços comerciais no Montijo — escritórios, lojas, restaurantes. Horários flexíveis, pintores certificados. Orçamento grátis!",
    imageAlt: "Pintura comercial de escritório no Montijo - PintaJá pintores profissionais",
    size: "regular",
  },
  {
    slug: "preparacao-reparacao",
    image: serviceMassage,
    titleKey: "services.massages",
    descKey: "services.massagesDesc",
    longDescKey: "servicePage.preparacaoLong",
    introKey: "servicePage.preparacaoIntro",
    processKeys: ["servicePage.preparacaoProcess1", "servicePage.preparacaoProcess2", "servicePage.preparacaoProcess3", "servicePage.preparacaoProcess4", "servicePage.preparacaoProcess5"],
    benefitsKeys: ["servicePage.preparacaoBenefit1", "servicePage.preparacaoBenefit2", "servicePage.preparacaoBenefit3", "servicePage.preparacaoBenefit4", "servicePage.preparacaoBenefit5", "servicePage.preparacaoBenefit6"],
    faqKeys: [
      { q: "servicePage.preparacaoFaq1Q", a: "servicePage.preparacaoFaq1A" },
      { q: "servicePage.preparacaoFaq2Q", a: "servicePage.preparacaoFaq2A" },
      { q: "servicePage.preparacaoFaq3Q", a: "servicePage.preparacaoFaq3A" },
      { q: "servicePage.preparacaoFaq4Q", a: "servicePage.preparacaoFaq4A" },
    ],
    metaTitlePt: "Preparação e Reparação de Paredes no Montijo | PintaJá",
    metaDescPt: "Preparação de superfícies e reparação de paredes no Montijo. Tratamento de fissuras, humidades e bolores. Base perfeita para pintura duradoura.",
    imageAlt: "Preparação e reparação de paredes para pintura no Montijo - PintaJá",
    size: "featured",
  },
  {
    slug: "pintura-decorativa",
    image: serviceBody,
    titleKey: "services.bodyTreatments",
    descKey: "services.bodyTreatmentsDesc",
    longDescKey: "servicePage.decorativaLong",
    introKey: "servicePage.decorativaIntro",
    processKeys: ["servicePage.decorativaProcess1", "servicePage.decorativaProcess2", "servicePage.decorativaProcess3", "servicePage.decorativaProcess4", "servicePage.decorativaProcess5"],
    benefitsKeys: ["servicePage.decorativaBenefit1", "servicePage.decorativaBenefit2", "servicePage.decorativaBenefit3", "servicePage.decorativaBenefit4", "servicePage.decorativaBenefit5", "servicePage.decorativaBenefit6"],
    faqKeys: [
      { q: "servicePage.decorativaFaq1Q", a: "servicePage.decorativaFaq1A" },
      { q: "servicePage.decorativaFaq2Q", a: "servicePage.decorativaFaq2A" },
      { q: "servicePage.decorativaFaq3Q", a: "servicePage.decorativaFaq3A" },
      { q: "servicePage.decorativaFaq4Q", a: "servicePage.decorativaFaq4A" },
    ],
    metaTitlePt: "Pintura Decorativa no Montijo | Efeitos e Texturas | PintaJá",
    metaDescPt: "Pintura decorativa no Montijo — estuque veneziano, texturas, murais e efeitos especiais. Transforme o seu espaço. Orçamento grátis!",
    imageAlt: "Pintura decorativa com efeitos especiais no Montijo - PintaJá",
    size: "regular",
  },
  {
    slug: "pintura-tetos",
    image: serviceManicure,
    titleKey: "services.manicurePedicure",
    descKey: "services.manicurePedicureDesc",
    longDescKey: "servicePage.tetosLong",
    introKey: "servicePage.tetosIntro",
    processKeys: ["servicePage.tetosProcess1", "servicePage.tetosProcess2", "servicePage.tetosProcess3", "servicePage.tetosProcess4", "servicePage.tetosProcess5"],
    benefitsKeys: ["servicePage.tetosBenefit1", "servicePage.tetosBenefit2", "servicePage.tetosBenefit3", "servicePage.tetosBenefit4", "servicePage.tetosBenefit5", "servicePage.tetosBenefit6"],
    faqKeys: [
      { q: "servicePage.tetosFaq1Q", a: "servicePage.tetosFaq1A" },
      { q: "servicePage.tetosFaq2Q", a: "servicePage.tetosFaq2A" },
      { q: "servicePage.tetosFaq3Q", a: "servicePage.tetosFaq3A" },
      { q: "servicePage.tetosFaq4Q", a: "servicePage.tetosFaq4A" },
    ],
    metaTitlePt: "Pintura de Tetos no Montijo | Acabamento Perfeito | PintaJá",
    metaDescPt: "Pintura e reparação de tetos no Montijo e arredores. Acabamento uniforme sem marcas. Pintores especializados. Orçamento grátis em 24h.",
    imageAlt: "Pintura profissional de tetos no Montijo - PintaJá acabamento perfeito",
    size: "regular",
  },
  {
    slug: "impermeabilizacao",
    image: serviceWeightLoss,
    titleKey: "services.weightLoss",
    descKey: "services.weightLossDesc",
    longDescKey: "servicePage.impermeabilizacaoLong",
    introKey: "servicePage.impermeabilizacaoIntro",
    processKeys: ["servicePage.impermeabilizacaoProcess1", "servicePage.impermeabilizacaoProcess2", "servicePage.impermeabilizacaoProcess3", "servicePage.impermeabilizacaoProcess4", "servicePage.impermeabilizacaoProcess5"],
    benefitsKeys: ["servicePage.impermeabilizacaoBenefit1", "servicePage.impermeabilizacaoBenefit2", "servicePage.impermeabilizacaoBenefit3", "servicePage.impermeabilizacaoBenefit4", "servicePage.impermeabilizacaoBenefit5", "servicePage.impermeabilizacaoBenefit6"],
    faqKeys: [
      { q: "servicePage.impermeabilizacaoFaq1Q", a: "servicePage.impermeabilizacaoFaq1A" },
      { q: "servicePage.impermeabilizacaoFaq2Q", a: "servicePage.impermeabilizacaoFaq2A" },
      { q: "servicePage.impermeabilizacaoFaq3Q", a: "servicePage.impermeabilizacaoFaq3A" },
      { q: "servicePage.impermeabilizacaoFaq4Q", a: "servicePage.impermeabilizacaoFaq4A" },
    ],
    metaTitlePt: "Impermeabilização no Montijo | Proteção Contra Humidade | PintaJá",
    metaDescPt: "Impermeabilização profissional no Montijo. Paredes, fachadas, caves e terraços. Diagnóstico e tratamento de infiltrações. Orçamento grátis!",
    imageAlt: "Serviço de impermeabilização de paredes e fachadas no Montijo - PintaJá",
    size: "regular",
    highlight: true,
  },
];
