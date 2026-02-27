import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const FloatingChat = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-16 lg:bottom-20 right-0 w-80 lg:w-96 bg-card rounded-3xl shadow-premium-lg border border-border overflow-hidden"
            role="dialog"
            aria-label={t("chat.title")}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-section-dark p-6 text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{t("chat.title")}</h3>
                  <p className="text-sm text-primary-foreground/70">
                    {t("chat.subtitle")}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-200 cursor-pointer"
                  aria-label={t("chat.close") || "Close"}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-6">
              <div className="bg-secondary rounded-2xl p-4 mb-6">
                <p className="text-foreground leading-relaxed">
                  {t("chat.greeting")}
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/351000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-trust-green text-trust-green-foreground rounded-2xl hover:bg-trust-green/90 transition-colors duration-200 cursor-pointer shadow-lg"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold block">{t("chat.whatsapp")}</span>
                    <span className="text-sm opacity-80">{t("chat.whatsappDesc")}</span>
                  </div>
                </a>

                <a
                  href="tel:+351000000000"
                  className="flex items-center gap-4 p-4 bg-accent text-accent-foreground rounded-2xl hover:bg-accent/90 transition-colors duration-200 cursor-pointer shadow-lg"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold block">{t("chat.callNow")}</span>
                    <span className="text-sm opacity-80">000 000 000</span>
                  </div>
                </a>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                {t("chat.hours")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-glow-lg transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
          isOpen
            ? "bg-primary text-primary-foreground"
            : "bg-accent text-accent-foreground"
        }`}
        aria-label={isOpen ? (t("chat.close") || "Close chat") : (t("chat.open") || "Open chat")}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" aria-hidden="true" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingChat;
