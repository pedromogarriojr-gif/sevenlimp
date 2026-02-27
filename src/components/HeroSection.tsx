import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Star, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import heroBackground from "@/assets/hero-background.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "required").max(100),
  email: z.string().trim().email("invalidEmail").max(255),
  phone: z.string().trim().min(1, "required").max(20),
  service: z.string().max(500).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "consentRequired" }) }),
});

const HeroSection = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse({ name, email, phone, service: message || undefined, consent });
    if (!result.success) {
      const firstError = result.error.issues[0];
      if (firstError.message === "invalidEmail") {
        toast.error(t("hero.formInvalidEmail"));
      } else if (firstError.message === "consentRequired") {
        toast.error(t("hero.formConsentRequired"));
      } else {
        toast.error(t("hero.formRequired"));
      }
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
        service: result.data.service || null,
        consent: result.data.consent,
      });

      if (error) throw error;

      // TODO: Adicionar webhook URL para notificações externas
      // fetch("https://your-webhook-url.com", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name: result.data.name, email: result.data.email, phone: result.data.phone, service: result.data.service }),
      // }).catch(() => {});

      toast.success(t("hero.formSuccess"));
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setConsent(false);
    } catch {
      toast.error(t("hero.formError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center py-12 pt-24 lg:py-8 lg:pt-20 scroll-mt-20"
    >
      {/* Background with shimmer */}
      <div className="absolute inset-0">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/60 animate-pulse" />
        )}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <img src={heroBackground} alt="" className="hidden" onLoad={() => setImgLoaded(true)} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="flex -space-x-1" aria-label={t("hero.badge")}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">
                {t("hero.badge")}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              {t("hero.title")}
              <span className="block text-gradient mt-2">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { text: t("hero.benefit1"), icon: Sparkles },
                { text: t("hero.benefit2"), icon: CheckCircle },
                { text: t("hero.benefit3"), icon: CheckCircle },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-center lg:justify-start gap-2 text-white/90"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="tel:+351000000000">
                <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto shadow-glow">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {t("hero.callNow")}
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            id="orcamento"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-md mx-auto lg:max-w-none scroll-mt-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl transform scale-95" aria-hidden="true" />
              
              <div className="relative bg-card/90 backdrop-blur-2xl rounded-2xl p-6 lg:p-8 shadow-premium-lg border border-white/15">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {t("hero.formBadge")}
                  </span>
                </div>

                <div className="pt-2">
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-1 text-center">
                    {t("hero.formTitle")}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-5 text-center">
                    {t("hero.formSubtitle")}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="space-y-1.5">
                      <label htmlFor="hero-name" className="text-sm font-medium text-foreground">{t("hero.formName")}</label>
                      <input
                        id="hero-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("hero.formNamePlaceholder")}
                        maxLength={100}
                        autoComplete="name"
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="hero-email" className="text-sm font-medium text-foreground">{t("hero.formEmail")}</label>
                      <input
                        id="hero-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("hero.formEmailPlaceholder")}
                        maxLength={255}
                        autoComplete="email"
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="hero-phone" className="text-sm font-medium text-foreground">{t("hero.formPhone")}</label>
                      <input
                        id="hero-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t("hero.formPhonePlaceholder")}
                        maxLength={20}
                        autoComplete="tel"
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="hero-service" className="text-sm font-medium text-foreground">{t("hero.formService")}</label>
                      <textarea
                        id="hero-service"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t("hero.formServicePlaceholder")}
                        rows={2}
                        maxLength={500}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-colors duration-200"
                      />
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked === true)}
                        className="mt-0.5 border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                        {t("hero.formConsent")}
                      </label>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full shadow-glow" disabled={loading}>
                      {loading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                      ) : null}
                      {loading ? t("hero.formSubmitting") || t("hero.formSubmit") : t("hero.formSubmit")}
                      {!loading && <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
