import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";

import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AreasSection from "@/components/AreasSection";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: t("faq.q1"), acceptedAnswer: { "@type": "Answer", text: t("faq.a1") } },
      { "@type": "Question", name: t("faq.q2"), acceptedAnswer: { "@type": "Answer", text: t("faq.a2") } },
      { "@type": "Question", name: t("faq.q3"), acceptedAnswer: { "@type": "Answer", text: t("faq.a3") } },
      { "@type": "Question", name: t("faq.q4"), acceptedAnswer: { "@type": "Answer", text: t("faq.a4") } },
      { "@type": "Question", name: t("faq.q5"), acceptedAnswer: { "@type": "Answer", text: t("faq.a5") } },
      { "@type": "Question", name: t("faq.q6"), acceptedAnswer: { "@type": "Answer", text: t("faq.a6") } },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <HeroSection />
      <TrustBadges />
      
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <AreasSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
