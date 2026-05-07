"use client";

import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, columns = 4 }: { products: Product[]; columns?: 3 | 4 }) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14 ${
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
