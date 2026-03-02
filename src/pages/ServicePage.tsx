import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Phone, MapPin } from "lucide-react";
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
import FinalCTA from "@/components/FinalCTA";
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
    }
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

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const areas = ["Montijo", "Alcochete", "Moita", "Barreiro", "Pinhal Novo", "Palmela"];

  // JSON-LD structured data for local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t(service.titleKey),
    description: service.metaDescPt,
    provider: {
      "@type": "LocalBusiness",
      name: "PintaJá",
      areaServed: areas.map((a) => ({
        "@type": "City",
        name: a,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montijo",
        addressCountry: "PT",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Montijo",
    },
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={t(service.titleKey)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li><Link to="/" className="hover:text-accent transition-colors">Início</Link></li>
                <li>/</li>
                <li><Link to="/#servicos" className="hover:text-accent transition-colors">Serviços</Link></li>
                <li>/</li>
                <li className="text-white font-medium">{t(service.titleKey)}</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              {t(service.titleKey)}
              <span className="block text-gradient mt-2">no Montijo</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
              {t(service.descKey)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#orcamento">
                <Button variant="hero" size="xl" className="gap-3 shadow-glow">
                  {t("services.requestQuote")}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+351000000000">
                <Button variant="heroOutline" size="xl" className="gap-3">
                  <Phone className="w-5 h-5" />
                  {t("hero.callNow")}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Detailed Description */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {t(service.titleKey)} Profissional no Montijo
                </h2>
                <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed">
                  <p>{t(service.longDescKey)}</p>
                </div>

                {/* Benefits */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Porquê escolher a PintaJá para {t(service.titleKey)}?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefitsKeys.map((key, i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-secondary rounded-xl border border-border"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{t(key)}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {/* CTA Box */}
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-6 sticky top-24">
                  <h3 className="text-lg font-bold text-foreground mb-3">Peça o Seu Orçamento Grátis</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    Orçamento gratuito e sem compromisso para {t(service.titleKey).toLowerCase()} no Montijo e arredores.
                  </p>
                  <Link to="/#orcamento">
                    <Button variant="accent" size="lg" className="w-full gap-2">
                      {t("services.requestQuote")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <div className="mt-6 pt-5 border-t border-accent/20">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      Zonas de Atuação
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {areas.map((area) => (
                        <span key={area} className="text-xs bg-card border border-border rounded-full px-3 py-1.5 text-muted-foreground">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Perguntas Frequentes sobre {t(service.titleKey)}
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {service.faqKeys.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-2xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold text-base py-5 hover:no-underline hover:text-accent transition-colors">
                    {t(faq.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {t(faq.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Other Services */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Outros Serviços
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {otherServices.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="group relative overflow-hidden rounded-2xl block min-h-[220px]"
                  >
                    <img
                      src={s.image}
                      alt={t(s.titleKey)}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-primary/10 group-hover:from-primary/90 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col justify-end h-full p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{t(s.titleKey)}</h3>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t("services.learnMore")} <ArrowRight className="w-4 h-4" />
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

        <FinalCTA />
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default ServicePage;
