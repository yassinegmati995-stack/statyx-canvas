import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import lookbook from "@/assets/lookbook-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À Propos de Statyx — Notre Histoire" },
      { name: "description", content: "Née de la culture urbaine et de l'esprit de liberté, Statyx crée du streetwear premium alliant art gothique et design moderne." },
      { property: "og:title", content: "À Propos de Statyx — Notre Histoire" },
      { property: "og:description", content: "Née de la culture urbaine et de l'esprit de liberté." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-16">
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lookbook} alt="Éditorial Statyx" className="h-full w-full object-cover" width={1200} height={800} />
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
            Notre Histoire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            Liberté. Art. Identité.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-8 text-sm leading-loose text-muted-foreground">
          <p>
            Statyx est né des rues — une expression créative enracinée dans l'énergie brute de la culture urbaine. 
            Nous croyons que le vêtement doit faire plus que couvrir ; il doit communiquer qui vous êtes avant même que vous ne prononciez un mot.
          </p>
          <p>
            La colombe est notre emblème. Elle représente la liberté de s'élever, de se démarquer, de voler. 
            Chaque couture, chaque impression, chaque silhouette est conçue avec intention — alliant l'art gothique 
            aux lignes épurées du streetwear moderne.
          </p>
          <p>
            Nos collections sont produites en séries limitées avec des matériaux européens premium. 
            Nous ne suivons pas les tendances. Nous créons des pièces intemporelles qui deviennent partie de votre identité.
          </p>
          <p className="font-heading text-2xl text-foreground">
            Just Fly.
          </p>
        </div>
      </section>
    </main>
  );
}
