import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, ExternalLink, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import heroBackground from "@/assets/hero-background.jpg";

const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review";

const Reviews = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [locked, setLocked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (star: number) => {
    if (locked) return;
    setRating(star);
    setLocked(true);
    if (star >= 4) {
      window.open(GOOGLE_REVIEW_URL, "_blank");
    }
  };

  const handleReset = () => {
    setRating(0);
    setHoveredStar(0);
    setLocked(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const trimmedReview = review.trim();
    if (!trimmedReview || trimmedReview.length < 10 || trimmedReview.length > 1000) return;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    if (name && name.length > 100) return;

    // TODO: Add server-side submission endpoint
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/">
            <span
              className="text-5xl font-bold text-white tracking-tight drop-shadow-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              O Seu Negócio
            </span>
          </a>
        </div>

        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Star className="w-10 h-10 text-gold fill-gold" />
              </div>
              <h2 className="text-3xl text-white mb-3">Obrigado!</h2>
              <p className="text-white/70 text-base">
                A sua avaliação foi enviada com sucesso.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl text-white mb-3">
                  Como foi a sua experiência?
                </h2>
                <p className="text-white/60 text-sm">
                  A sua opinião é muito importante para nós
                </p>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-3 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => !locked && setHoveredStar(star)}
                    onMouseLeave={() => !locked && setHoveredStar(0)}
                    onClick={() => handleStarClick(star)}
                    disabled={locked}
                    className={`transition-all duration-200 ${
                      locked
                        ? "cursor-default"
                        : "cursor-pointer hover:scale-125"
                    }`}
                  >
                    <Star
                      className={`w-11 h-11 transition-all duration-200 ${
                        star <= (hoveredStar || rating)
                          ? "fill-gold text-gold drop-shadow-[0_0_8px_rgba(217,170,75,0.5)]"
                          : "text-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Reset + Rating label */}
              <AnimatePresence>
                {locked && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3 mb-6"
                  >
                    {rating <= 3 && (
                      <span className="text-white/50 text-xs">
                        Avaliação: {rating} de 5 estrelas
                      </span>
                    )}
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1 text-white/40 hover:text-white/70 text-xs transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Anular
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form for 1-3 stars */}
              <AnimatePresence>
                {rating >= 1 && rating <= 3 && (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <p className="text-sm text-white/60 text-center">
                      Lamentamos. Diga-nos como podemos melhorar.
                    </p>

                    <div>
                      <Label htmlFor="name" className="text-white/80 text-xs uppercase tracking-wider">
                        Nome (opcional)
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="O seu nome"
                        className="mt-1.5 bg-white/10 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-white/30"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white/80 text-xs uppercase tracking-wider">
                        Email (opcional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="o.seu@email.com"
                        className="mt-1.5 bg-white/10 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-white/30"
                      />
                    </div>

                    <div>
                      <Label htmlFor="review" className="text-white/80 text-xs uppercase tracking-wider">
                        Avaliação *
                      </Label>
                      <Textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Partilhe a sua experiência connosco..."
                        className="mt-1.5 min-h-[120px] bg-white/10 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-white/30"
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="w-4 h-4" />
                      Enviar Avaliação
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Message for 4-5 stars */}
              <AnimatePresence>
                {rating >= 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-white/60 text-sm"
                  >
                    <p className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      A redirecionar para o Google Reviews...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-white/30 text-xs mt-6">
          © {new Date().getFullYear()} O Seu Negócio. Todos os direitos reservados.
        </p>
      </motion.div>
    </div>
  );
};

export default Reviews;
