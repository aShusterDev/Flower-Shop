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
      className={`w-full py-4 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
        added
          ? "bg-neutral-700 text-white"
          : "bg-neutral-900 text-white hover:bg-neutral-800"
      }`}
    >
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
