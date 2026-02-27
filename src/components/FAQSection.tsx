import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  return (
    <section id="faq" className="section-padding bg-background scroll-mt-20 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            {t("faq.sectionLabel")}
          </span>
          <h2 className="text-foreground mb-6">{t("faq.title")}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {t("faq.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 lg:gap-6"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.slice(0, 3).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-sm data-[state=open]:shadow-premium transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold text-base lg:text-lg py-5 hover:no-underline hover:text-accent transition-colors duration-200">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.slice(3, 6).map((faq, index) => (
              <AccordionItem
                key={index + 3}
                value={`faq-${index + 3}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-sm data-[state=open]:shadow-premium transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold text-base lg:text-lg py-5 hover:no-underline hover:text-accent transition-colors duration-200">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
