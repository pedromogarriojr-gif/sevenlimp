import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Phone, MapPin, Clock, Shield, Star, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { services } from "@/config/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitlePt;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", service.metaDescPt);
      // Update canonical
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonical) {
        canonical.href = `https://pintaja.pt/servicos/${service.slug}`;
      }
    }
    return () => {
      // Reset on unmount
      document.title = "PintaJá - Pintura Profissional no Montijo | Orçamento Grátis";
    };
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Serviço não encontrado</h1>
          <Link to="/">
            <Button variant="accent">Voltar à página inicial</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);
  const areas = ["Montijo", "Alcochete", "Moita", "Barreiro", "Pinhal Novo", "Palmela", "Samouco", "Atalaia"];
  const serviceTitle = t(service.titleKey);

  // JSON-LD: Service + LocalBusiness + FAQPage
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${serviceTitle} no Montijo`,
      description: service.metaDescPt,
      url: `https://pintaja.pt/servicos/${service.slug}`,
      provider: {
        "@type": "LocalBusiness",
        name: "PintaJá",
        telephone: "+351919199500",
        areaServed: areas.map((a) => ({ "@type": "City", name: a })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montijo",
          addressRegion: "Setúbal",
          addressCountry: "PT",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "300",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqKeys.map((faq) => ({
        "@type": "Question",
        name: t(faq.q),
        acceptedAnswer: {
          "@type": "Answer",
          text: t(faq.a),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://pintaja.pt/" },
        { "@type": "ListItem", position: 2, name: "Serviços", item: "https://pintaja.pt/#servicos" },
        { "@type": "ListItem", position: 3, name: serviceTitle, item: `https://pintaja.pt/servicos/${service.slug}` },
      ],
    },
  ];

  const trustStats = [
    { icon: Users, value: "+300", label: "Clientes Satisfeitos" },
    { icon: Star, value: "5.0", label: "Avaliação Google" },
    { icon: Clock, value: "24h", label: "Resposta ao Orçamento" },
    { icon: Award, value: "+10", label: "Anos de Experiência" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* JSON-LD structured data */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" className="hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Início</span></Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li aria-hidden="true">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/#servicos" className="hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Serviços</span></Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li aria-hidden="true">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-white font-medium">
                  <span itemProp="name">{serviceTitle}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              {serviceTitle}
              <span className="block text-gradient mt-2">no Montijo e Arredores</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
              {t(service.introKey)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/#orcamento">
                <Button variant="hero" size="xl" className="gap-3 shadow-glow w-full sm:w-auto">
                  Pedir Orçamento Grátis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+351919199500">
                <Button variant="heroOutline" size="xl" className="gap-3 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </Button>
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10"
                >
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="text-white/60 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <main>
        {/* ===== INTRO + SIDEBAR ===== */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <article className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    {serviceTitle} Profissional no Montijo — Qualidade e Confiança
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4 text-base lg:text-lg">
                    <p>{t(service.longDescKey)}</p>
                  </div>
                </motion.div>

                {/* ===== PROCESS ===== */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
                    Como Funciona o Nosso Serviço de {serviceTitle} no Montijo
                  </h2>
                  <div className="space-y-4">
                    {service.processKeys.map((key, i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-4 p-4 bg-secondary rounded-xl border border-border"
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                          <span className="text-accent font-bold text-sm">{i + 1}</span>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">{t(key)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* ===== BENEFITS ===== */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
                    Vantagens de Escolher a PintaJá para {serviceTitle} no Montijo
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefitsKeys.map((key, i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors duration-200"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium text-sm lg:text-base">{t(key)}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* ===== MID CTA ===== */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        Precisa de {serviceTitle.toLowerCase()} no Montijo?
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Peça já o seu orçamento gratuito e sem compromisso. Respondemos em menos de 24 horas com preço detalhado.
                      </p>
                    </div>
                    <Link to="/#orcamento" className="flex-shrink-0">
                      <Button variant="accent" size="lg" className="gap-2 shadow-glow whitespace-nowrap">
                        Orçamento Grátis
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </article>

              {/* ===== SIDEBAR ===== */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* CTA Box */}
                  <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-accent" />
                      <h3 className="text-lg font-bold text-foreground">Orçamento Grátis</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      Orçamento gratuito e sem compromisso para {serviceTitle.toLowerCase()} no Montijo, Alcochete, Moita e arredores.
                    </p>
                    <Link to="/#orcamento">
                      <Button variant="accent" size="lg" className="w-full gap-2">
                        Pedir Orçamento
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <a href="tel:+351919199500" className="mt-3 flex items-center justify-center gap-2 text-sm text-accent font-semibold hover:underline">
                      <Phone className="w-4 h-4" />
                      Ou ligue agora: 919 199 500
                    </a>
                  </div>

                  {/* Areas Box */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      {serviceTitle} — Zonas de Atuação
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {areas.map((area) => (
                        <span key={area} className="text-xs bg-secondary border border-border rounded-full px-3 py-1.5 text-foreground font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">Deslocação incluída no orçamento para todas as zonas.</p>
                  </div>

                  {/* Trust Box */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-foreground mb-4">Porquê a PintaJá?</h4>
                    <ul className="space-y-3">
                      {[
                        "Pintores certificados com +10 anos",
                        "Tintas premium (CIN, Robbialac, Dyrup)",
                        "Garantia de qualidade no trabalho",
                        "Orçamento grátis em 24 horas",
                        "Limpeza completa pós-obra",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                Perguntas Frequentes
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Dúvidas sobre {serviceTitle} no Montijo?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Respondemos às perguntas mais comuns dos nossos clientes sobre {serviceTitle.toLowerCase()} no Montijo e arredores.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {service.faqKeys.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-2xl px-6 shadow-sm data-[state=open]:shadow-premium transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold text-base lg:text-lg py-5 hover:no-underline hover:text-accent transition-colors">
                    {t(faq.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {t(faq.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA after FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <p className="text-muted-foreground mb-4">Tem outra dúvida? Contacte-nos diretamente!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/#orcamento">
                  <Button variant="accent" size="lg" className="gap-2">
                    Pedir Orçamento Grátis
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+351919199500">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Ligar Agora
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== OTHER SERVICES ===== */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Outros Serviços de Pintura no Montijo
              </h2>
              <p className="text-muted-foreground">
                Descubra a gama completa de serviços de pintura da PintaJá no Montijo e arredores.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherServices.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="group relative overflow-hidden rounded-2xl block min-h-[200px]"
                  >
                    <img
                      src={s.image}
                      alt={`${t(s.titleKey)} no Montijo - PintaJá`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/10 group-hover:from-primary/95 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col justify-end h-full p-5">
                      <h3 className="text-lg font-bold text-white mb-1">{t(s.titleKey)}</h3>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Saber mais <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/#servicos">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Ver todos os serviços
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-section-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Pronto para {serviceTitle.toLowerCase()}
                <span className="block text-gradient mt-2">no Montijo?</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Peça já o seu orçamento gratuito e sem compromisso. A PintaJá responde em menos de 24 horas com um preço detalhado para {serviceTitle.toLowerCase()} na sua propriedade no Montijo e arredores.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#orcamento">
                  <Button variant="hero" size="xl" className="gap-3 shadow-glow-lg">
                    Pedir Orçamento Grátis
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+351919199500">
                  <Button variant="heroOutline" size="xl" className="gap-3">
                    <Phone className="w-5 h-5" />
                    919 199 500
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60">
                {["Sem compromisso", "Resposta em 24h", "Qualidade garantida"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default ServicePage;
