"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "./CartProvider";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`w-full md:w-auto px-12 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
        added
          ? "bg-green-700 text-white"
          : "bg-stone-800 text-white hover:bg-stone-700"
      }`}
    >
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
