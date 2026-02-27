import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const PressSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 bg-secondary border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
        >
          <div className="flex items-center gap-3 text-muted-foreground text-sm font-semibold uppercase tracking-wider">
            <Newspaper className="w-5 h-5 text-accent" />
            {t("press.seenIn")}
          </div>

          <a
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4 hover:border-accent/40 shadow-premium hover:shadow-premium-lg transition-all duration-300"
          >
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-base group-hover:text-accent transition-colors">
                {/* TODO: Adicionar nome da publicação */}
                Nome da Publicação
              </span>
              <span className="text-sm text-muted-foreground leading-snug mt-1">
                {t("press.nitArticle")}
              </span>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PressSection;
