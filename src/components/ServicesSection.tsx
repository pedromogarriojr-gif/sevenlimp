import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { services } from "@/config/services";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="servicos" className="section-padding bg-gradient-subtle scroll-mt-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            {t("services.sectionLabel")}
          </span>
          <h2 className="text-foreground mb-6">{t("services.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const isFeatured = service.size === "featured";

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <Link
                  to={`/servicos/${service.slug}`}
                  className={`group relative overflow-hidden rounded-2xl block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    isFeatured ? "min-h-[320px]" : "min-h-[280px]"
                  } ${service.highlight ? "ring-1 ring-accent/20" : ""}`}
                >
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isFeatured
                      ? "bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10 group-hover:from-primary/95"
                      : "bg-gradient-to-t from-primary/85 via-primary/50 to-primary/20 group-hover:from-primary/90"
                  }`} />

                  <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
                    {service.highlight && (
                      <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t("services.newBadge")}
                      </span>
                    )}

                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className={`font-bold text-primary-foreground mb-2 ${
                        isFeatured ? "text-2xl lg:text-3xl" : "text-xl"
                      }`}>
                        {t(service.titleKey)}
                      </h3>
                      {isFeatured && (
                        <p className="text-primary-foreground/80 leading-relaxed max-w-md text-sm lg:text-base">
                          {t(service.descKey)}
                        </p>
                      )}
                    </div>

                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                        {t("services.learnMore")}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a href="#orcamento">
            <Button variant="accent" size="lg" className="gap-2 shadow-glow">
              {t("services.requestQuote")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
