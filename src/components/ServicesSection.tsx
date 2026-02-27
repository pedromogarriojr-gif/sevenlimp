import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import serviceCleansing from "@/assets/service-cleansing.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceHairRemoval from "@/assets/service-hair-removal.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import serviceBody from "@/assets/service-body.jpg";
import serviceManicure from "@/assets/service-manicure.jpg";
import serviceWeightLoss from "@/assets/service-weight-loss.jpg";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    // Row 1: featured (2col) + regular
    { image: serviceCleansing, title: t("services.deepCleansing"), description: t("services.deepCleansingDesc"), size: "featured" as const },
    { image: serviceFacial, title: t("services.facialTreatments"), description: t("services.facialTreatmentsDesc"), size: "regular" as const },
    // Row 2: regular + featured (2col)
    { image: serviceHairRemoval, title: t("services.hairRemoval"), description: t("services.hairRemovalDesc"), size: "regular" as const },
    { image: serviceMassage, title: t("services.massages"), description: t("services.massagesDesc"), size: "featured" as const },
    // Row 3: 3 equal cards (new treatments)
    { image: serviceBody, title: t("services.bodyTreatments"), description: t("services.bodyTreatmentsDesc"), size: "regular" as const },
    { image: serviceManicure, title: t("services.manicurePedicure"), description: t("services.manicurePedicureDesc"), size: "regular" as const },
    { image: serviceWeightLoss, title: t("services.weightLoss"), description: t("services.weightLossDesc"), size: "regular" as const, highlight: true },
  ];

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
              <motion.a
                key={service.title}
                href="#orcamento"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  isFeatured ? "md:col-span-2 min-h-[320px]" : "min-h-[280px]"
                } ${service.highlight ? "ring-1 ring-accent/20" : ""}`}
              >
                {/* Full background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10 group-hover:from-primary/95"
                    : "bg-gradient-to-t from-primary/85 via-primary/50 to-primary/20 group-hover:from-primary/90"
                }`} />

                {/* Content */}
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
                      {service.title}
                    </h3>
                    {isFeatured && (
                      <p className="text-primary-foreground/80 leading-relaxed max-w-md text-sm lg:text-base">
                        {service.description}
                      </p>
                    )}
                  </div>

                  {/* Hover CTA */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                      {t("services.learnMore")}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
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
