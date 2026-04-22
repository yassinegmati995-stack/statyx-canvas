import { motion } from "framer-motion";
import collectionImage from "@/assets/statyx-collection.png";

const testimonials = [
  {
    quote: "Statyx ce n'est pas juste des vêtements — c'est une déclaration. La qualité et l'art sont inégalés.",
    name: "Alex R.",
    role: "Directeur Créatif",
  },
  {
    quote: "Je n'ai jamais reçu autant de compliments pour un hoodie. L'impression de la colombe est magnifique de près.",
    name: "Sarah M.",
    role: "Blogueuse Mode",
  },
  {
    quote: "Enfin du streetwear qui fait premium. L'attention aux détails est incroyable.",
    name: "Marcus T.",
    role: "Photographe",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 overflow-hidden rounded-2xl bg-card glow-border"
        >
          <div className="relative">
            <img
              src={collectionImage}
              alt="Collection Statyx Just Fly — hoodies et joggers en noir et blanc"
              loading="lazy"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-center sm:p-12">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Collection ÉTÉ 26
              </p>
              <h2 className="mt-2 font-heading text-4xl tracking-wide text-foreground sm:text-5xl">
                Just Fly
              </h2>
              <a
                href="#collections"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-8 text-xs font-medium tracking-widest uppercase text-background transition-colors hover:bg-foreground/90"
              >
                Voir la Collection
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Communauté
          </p>
          <h2 className="font-heading text-5xl tracking-wide text-foreground">
            Témoignages
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="mb-4 text-muted-foreground/30" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm leading-relaxed text-surface-foreground">{t.quote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
