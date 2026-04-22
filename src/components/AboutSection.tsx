import { motion } from "framer-motion";
import lookbook from "@/assets/lookbook-1.jpg";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-lg glow-border">
              <img
                src={lookbook}
                alt="Statyx lookbook — urban rooftop editorial"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Our Story
            </p>
            <h2 className="font-heading text-5xl tracking-wide text-foreground sm:text-6xl">
              Born to Fly
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Statyx was born from the belief that clothing is more than fabric — 
                it's a canvas for self-expression. Rooted in urban culture and 
                inspired by the boundless freedom of flight, every piece carries 
                the spirit of the dove.
              </p>
              <p>
                Our designs merge gothic artistry with modern streetwear silhouettes, 
                creating wearable art that speaks to those who refuse to be ordinary. 
                Each collection is a meditation on duality — light and dark, 
                structure and freedom, tradition and rebellion.
              </p>
              <p>
                Crafted with premium materials and obsessive attention to detail, 
                Statyx represents a new chapter in streetwear — where elegance 
                meets the edge.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">Premium Cotton</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">Limited</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">Edition Drops</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">EU</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">Made in Europe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
