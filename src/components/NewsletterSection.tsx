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
            Stay Connected
          </p>
          <h2 className="font-heading text-5xl tracking-wide text-foreground">
            Join the Flock
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Be the first to know about new drops, exclusive collections, 
            and limited edition releases.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="h-12 flex-1 rounded-full border border-border bg-card px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-foreground px-8 text-xs font-medium tracking-widest uppercase text-background transition-colors hover:bg-foreground/90"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground/60">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
