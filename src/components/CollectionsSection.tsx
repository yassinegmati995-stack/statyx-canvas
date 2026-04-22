import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import hoodieBlack from "@/assets/product-hoodie-black.jpg";
import hoodieWhite from "@/assets/product-hoodie-white.jpg";
import joggersBlack from "@/assets/product-joggers-black.jpg";
import joggersWhite from "@/assets/product-joggers-white.jpg";

const products = [
  { name: "Dove Hoodie — Noir", price: "€149", image: hoodieBlack, category: "Hoodies" },
  { name: "Dove Hoodie — Blanc", price: "€149", image: hoodieWhite, category: "Hoodies" },
  { name: "Flight Joggers — Noir", price: "€119", image: joggersBlack, category: "Joggers" },
  { name: "Flight Joggers — Blanc", price: "€119", image: joggersWhite, category: "Joggers" },
];

export function CollectionsSection() {
  return (
    <section id="collections" className="relative py-32">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Collection
          </p>
          <h2 className="font-heading text-5xl tracking-wide text-foreground sm:text-6xl">
            Just Fly
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Each piece tells a story of freedom and self-expression. 
            Handcrafted designs featuring our iconic dove motif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-10 text-xs font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
