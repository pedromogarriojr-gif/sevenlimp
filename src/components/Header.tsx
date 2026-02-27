import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicos", label: t("nav.services") },
    { href: "#galeria", label: t("nav.gallery") },
    { href: "#testemunhos", label: t("nav.testimonials") },
    { href: "#contactos", label: t("nav.contacts") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-xl shadow-premium py-3"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo with tagline */}
           <a href="#inicio" className="relative group flex items-baseline gap-1.5" aria-label="AquaFix - Canalizador Profissional">
            <span className={`text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            }`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
              AquaFix
            </span>
            <span className={`text-[10px] lg:text-xs font-medium tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-muted-foreground" : "text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            }`} style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Canalizador Profissional
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label={t("nav.mainNavigation") || "Main navigation"}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg hover:bg-accent/10 ${
                  isScrolled ? "text-foreground" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                } hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a href="#orcamento">
              <Button variant="hero" size="default" className="shadow-glow">
                {t("nav.requestQuote")}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isScrolled
                  ? "text-foreground bg-secondary"
                  : "text-white bg-white/10"
              }`}
              aria-label={isMobileMenuOpen ? t("nav.closeMenu") || "Close menu" : t("nav.openMenu") || "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <nav className="bg-card/98 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-premium-lg" aria-label="Mobile navigation">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
                  <a href="tel:+351000000000" className="w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      000 000 000
                    </Button>
                  </a>
                  <a href="#orcamento" className="w-full">
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full shadow-glow"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("nav.requestQuote")}
                    </Button>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
