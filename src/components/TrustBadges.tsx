import { motion } from "framer-motion";
import { Award, Users, Star, Shield, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustBadges = () => {
  const { t } = useTranslation();

  const badges = [
    { icon: Award, title: t("trustBadges.certified"), description: t("trustBadges.certifiedDesc") },
    { icon: Users, title: t("trustBadges.experienced"), description: t("trustBadges.experiencedDesc") },
    { icon: Star, title: t("trustBadges.rating"), description: t("trustBadges.ratingDesc") },
    { icon: Shield, title: t("trustBadges.guarantee"), description: t("trustBadges.guaranteeDesc") },
    { icon: Clock, title: t("trustBadges.fast"), description: t("trustBadges.fastDesc") },
  ];

  return (
    <section className="bg-card py-8 lg:py-10 border-y border-border shadow-premium overflow-x-auto">
      <div className="container-custom">
        <div className="flex lg:grid lg:grid-cols-5 gap-6 lg:gap-8 min-w-max lg:min-w-0 px-2 lg:px-0">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center min-w-[140px] lg:min-w-0 group"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <badge.icon className="w-7 h-7 lg:w-8 lg:h-8 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-sm lg:text-base mb-1 whitespace-nowrap">
                {badge.title}
              </h3>
              <p className="text-muted-foreground text-xs lg:text-sm whitespace-nowrap">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
