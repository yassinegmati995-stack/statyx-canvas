import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Statyx — Get in Touch" },
      { name: "description", content: "Reach out to Statyx for inquiries, collaborations, or support." },
      { property: "og:title", content: "Contact Statyx" },
      { property: "og:description", content: "Reach out for inquiries, collaborations, or support." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="pt-16">
      <section className="mx-auto max-w-2xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Get in Touch
          </p>
          <h1 className="font-heading text-6xl tracking-wide text-foreground">
            Contact
          </h1>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-16 space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
              placeholder="Tell us what you're thinking..."
            />
          </div>
          <button
            type="submit"
            className="h-12 w-full rounded-full bg-foreground text-xs font-medium tracking-widest uppercase text-background transition-colors hover:bg-foreground/90 sm:w-auto sm:px-12"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </main>
  );
}
