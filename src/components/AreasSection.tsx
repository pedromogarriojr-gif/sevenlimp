import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const AreasSection = () => {
  const { t } = useTranslation();

  const areas = [
    "Lisboa Centro", "Amadora", "Odivelas", "Loures",
    "Sintra", "Cascais", "Oeiras", "Almada",
    "Seixal", "Barreiro", "Montijo", "Setúbal",
  ];

  return (
    <section id="areas" className="section-padding bg-secondary relative overflow-hidden scroll-mt-20">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            {t("areas.sectionLabel")}
          </span>
          <h2 className="text-foreground mb-6">
            {t("areas.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("areas.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-2xl overflow-hidden shadow-premium-lg border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d-9.14!3d38.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zona de atuação - Área de Lisboa"
              className="w-full"
            />
          </motion.div>

          {/* Areas List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-accent/10 border border-accent/20 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-foreground font-semibold mb-1">{t("areas.notFound")}</p>
                  <a href="tel:+351000000000">
                    <Button variant="accent" size="sm" className="mt-2">
                      {t("hero.callNow")}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;