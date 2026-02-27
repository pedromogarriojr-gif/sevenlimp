import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-section-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-accent/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 lg:w-[500px] h-80 lg:h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-white/90 font-medium">{t("finalCta.badge")}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t("finalCta.title")}
            <span className="block text-gradient mt-2">{t("finalCta.titleHighlight")}</span>
          </h2>
          
          <p className="text-white/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("finalCta.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <motion.a 
              href="#orcamento" 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto shadow-glow-lg text-base lg:text-lg">
                {t("finalCta.requestQuote")}
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </Button>
            </motion.a>
            <motion.a 
              href="tel:+351000000000" 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="heroOutline" size="xl" className="gap-3 w-full sm:w-auto text-base lg:text-lg">
                <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                000 000 000
              </Button>
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mt-12 text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-trust-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm lg:text-base">{t("finalCta.noCommitment")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-trust-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm lg:text-base">{t("finalCta.fastResponse")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-trust-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm lg:text-base">{t("finalCta.qualityGuarantee")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
