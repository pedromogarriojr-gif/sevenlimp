import { motion } from "framer-motion";
import { Clock, CreditCard, Wrench, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    { icon: Clock, title: t("whyChooseUs.fastResponse"), description: t("whyChooseUs.fastResponseDesc"), gradient: "from-blue-500 to-cyan-500" },
    { icon: CreditCard, title: t("whyChooseUs.transparent"), description: t("whyChooseUs.transparentDesc"), gradient: "from-amber-400 to-orange-500" },
    { icon: Wrench, title: t("whyChooseUs.qualified"), description: t("whyChooseUs.qualifiedDesc"), gradient: "from-slate-500 to-zinc-600" },
    { icon: Sparkles, title: t("whyChooseUs.emergency"), description: t("whyChooseUs.emergencyDesc"), gradient: "from-teal-400 to-emerald-500" },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            {t("whyChooseUs.sectionLabel")}
          </span>
          <h2 className="text-foreground mb-6">{t("whyChooseUs.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("whyChooseUs.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 text-center shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg`}>
                <reason.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-foreground mb-2 lg:mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm hidden sm:block leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
