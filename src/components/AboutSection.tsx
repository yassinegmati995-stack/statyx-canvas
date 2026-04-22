import { motion } from "framer-motion";
import lookbook from "@/assets/lookbook-1.jpg";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-lg glow-border">
              <img
                src={lookbook}
                alt="Lookbook Statyx — éditorial urbain"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Notre Histoire
            </p>
            <h2 className="font-heading text-5xl tracking-wide text-foreground sm:text-6xl">
              Né pour Voler
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Statyx est né de la conviction que le vêtement est bien plus que du tissu — 
                c'est une toile d'expression personnelle. Enraciné dans la culture urbaine et 
                inspiré par la liberté sans limites du vol, chaque pièce porte 
                l'esprit de la colombe.
              </p>
              <p>
                Nos designs fusionnent l'art gothique avec les silhouettes du streetwear moderne, 
                créant de l'art portable qui parle à ceux qui refusent d'être ordinaires. 
                Chaque collection est une méditation sur la dualité — lumière et obscurité, 
                structure et liberté, tradition et rébellion.
              </p>
              <p>
                Conçu avec des matériaux premium et une attention obsessionnelle aux détails, 
                Statyx représente un nouveau chapitre du streetwear — là où l'élégance 
                rencontre l'audace.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">Coton Premium</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">Limitée</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">Éditions Limitées</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">EU</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">Fabriqué en Europe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
