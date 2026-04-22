import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Statyx streetwear campaign"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Grain overlay */}
      <div className="grain absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            ★★ Just Fly ★★
          </p>
          <h1 className="font-heading text-7xl leading-none tracking-wide text-foreground sm:text-8xl md:text-9xl">
            Statyx
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Where streetwear meets art. Premium apparel inspired by freedom, 
            individuality, and the poetry of flight.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#collections"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium tracking-widest uppercase text-background transition-all duration-300 hover:bg-foreground/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
          >
            Discover
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-10 w-5 rounded-full border border-muted-foreground/30 p-1"
          >
            <div className="h-2 w-full rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
