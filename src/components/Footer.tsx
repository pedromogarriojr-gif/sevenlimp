import { Phone, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "@/config/social";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contactos" className="bg-section-dark text-section-dark-foreground relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-glow hover:bg-accent/90 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-label={t("footer.scrollToTop") || "Scroll to top"}
      >
        <ArrowUp className="w-5 h-5" aria-hidden="true" />
      </button>

      <div className="container-custom pt-16 pb-10 lg:pt-20 lg:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-bold text-xl lg:text-2xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>AquaFix</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, url: socialLinks.facebook, label: "Facebook" },
                { Icon: Instagram, url: socialLinks.instagram, label: "Instagram" },
              ]
                .filter((item) => item.url)
                .map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent transition-colors duration-200 cursor-pointer"
                    aria-label={item.label}
                  >
                    <item.Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label={t("footer.quickLinks")}>
            <h4 className="font-bold text-base lg:text-lg mb-5">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {[
                { label: t("common.home"), href: "#inicio" },
                { label: t("common.services"), href: "#servicos" },
                { label: t("common.gallery"), href: "#galeria" },
                { label: t("common.testimonials"), href: "#testemunhos" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="hidden lg:block">
            <h4 className="font-bold text-base lg:text-lg mb-5">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-3">
              {[
                t("services.deepCleansing"),
                t("services.facialTreatments"),
                t("services.massages"),
                t("services.manicurePedicure"),
              ].map((item, i) => (
                <li key={i} className="text-white/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base lg:text-lg mb-5">{t("footer.contactsTitle")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+351000000000"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors duration-200 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200 flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-medium">000 000 000</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-medium">{t("footer.location")}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors duration-200">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-200">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
