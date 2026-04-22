import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import lookbook from "@/assets/lookbook-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Statyx — Our Story" },
      { name: "description", content: "Born from urban culture and the spirit of freedom, Statyx creates premium streetwear that merges gothic artistry with modern design." },
      { property: "og:title", content: "About Statyx — Our Story" },
      { property: "og:description", content: "Born from urban culture and the spirit of freedom." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lookbook} alt="Statyx editorial" className="h-full w-full object-cover" width={1200} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="grain absolute inset-0" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl tracking-wide text-foreground sm:text-7xl"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            Freedom. Art. Identity.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-8 text-sm leading-loose text-muted-foreground">
          <p>
            Statyx was born from the streets — a creative expression rooted in the raw energy of urban culture. 
            We believe clothing should do more than cover; it should communicate who you are before you speak a word.
          </p>
          <p>
            The dove is our emblem. It represents the freedom to rise above, to move differently, to fly. 
            Every stitch, every print, every silhouette is designed with intention — blending gothic artistry 
            with the clean lines of modern streetwear.
          </p>
          <p>
            Our collections are produced in limited runs using premium European materials. 
            We don't chase trends. We create timeless pieces that become part of your identity.
          </p>
          <p className="font-heading text-2xl text-foreground">
            Just Fly.
          </p>
        </div>
      </section>
    </main>
  );
}
