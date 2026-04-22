import { motion } from "framer-motion";

export function NewsletterSection() {
  return (
    <section className="relative py-32">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Restez Connecté
          </p>
          <h2 className="font-heading text-5xl tracking-wide text-foreground">
            Rejoignez le Vol
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Soyez les premiers informés des nouveaux drops, collections exclusives 
            et éditions limitées.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="votre@email.com"
              className="h-12 flex-1 rounded-full border border-border bg-card px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-foreground px-8 text-xs font-medium tracking-widest uppercase text-background transition-colors hover:bg-foreground/90"
            >
              S'inscrire
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground/60">
            Pas de spam. Désinscription à tout moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
