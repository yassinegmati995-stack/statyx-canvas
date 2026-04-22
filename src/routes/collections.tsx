import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import hoodieBlack from "@/assets/product-hoodie-black.jpg";
import hoodieWhite from "@/assets/product-hoodie-white.jpg";
import joggersBlack from "@/assets/product-joggers-black.jpg";
import joggersWhite from "@/assets/product-joggers-white.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Shop Statyx — Collections" },
      { name: "description", content: "Browse the full Statyx collection. Premium hoodies, joggers and streetwear featuring our iconic dove designs." },
      { property: "og:title", content: "Shop Statyx — Collections" },
      { property: "og:description", content: "Browse the full Statyx collection." },
    ],
  }),
  component: CollectionsPage,
});

const allProducts = [
  { name: "Dove Hoodie — Noir", price: "€149", image: hoodieBlack, category: "Hoodies" },
  { name: "Dove Hoodie — Blanc", price: "€149", image: hoodieWhite, category: "Hoodies" },
  { name: "Flight Joggers — Noir", price: "€119", image: joggersBlack, category: "Joggers" },
  { name: "Flight Joggers — Blanc", price: "€119", image: joggersWhite, category: "Joggers" },
];

function CollectionsPage() {
  return (
    <main className="pt-16">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            All Products
          </p>
          <h1 className="font-heading text-6xl tracking-wide text-foreground sm:text-7xl">
            Collections
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
