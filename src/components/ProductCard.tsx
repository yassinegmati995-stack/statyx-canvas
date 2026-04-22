import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

export function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg bg-card glow-border hover-lift">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="w-full p-5">
            <button className="w-full rounded-full bg-foreground py-3 text-xs font-medium tracking-widest uppercase text-background transition-colors hover:bg-foreground/90">
              Aperçu Rapide
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          {category}
        </p>
        <h3 className="text-sm font-medium text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{price}</p>
      </div>
    </motion.div>
  );
}
