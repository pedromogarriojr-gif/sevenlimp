import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.client1.name"),
      location: t("testimonials.client1.location"),
      rating: 5,
      text: t("testimonials.client1.text"),
    },
    {
      name: t("testimonials.client2.name"),
      location: t("testimonials.client2.location"),
      rating: 5,
      text: t("testimonials.client2.text"),
    },
    {
      name: t("testimonials.client3.name"),
      location: t("testimonials.client3.location"),
      rating: 5,
      text: t("testimonials.client3.text"),
    },
    {
      name: t("testimonials.client4.name"),
      location: t("testimonials.client4.location"),
      rating: 5,
      text: t("testimonials.client4.text"),
    },
  ];

  return (
    <section id="testemunhos" className="section-padding bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            {t("testimonials.sectionLabel")}
          </span>
          <h2 className="text-foreground mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("testimonials.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-border hover:border-accent/30 shadow-premium hover:shadow-premium-lg transition-all duration-500 relative"
            >
              <div className="absolute -top-4 -right-2 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Quote className="w-6 h-6 text-accent" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground mb-6 text-sm lg:text-base leading-relaxed line-clamp-4 lg:line-clamp-none">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center text-white font-bold text-sm">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-4 bg-card rounded-full px-6 py-3 border border-border shadow-premium">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png"
              alt="Google"
              className="h-5 lg:h-6 object-contain"
            />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm lg:text-base font-semibold text-foreground">4.9</span>
              <span className="text-sm text-muted-foreground">(127 {t("testimonials.reviews")})</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;