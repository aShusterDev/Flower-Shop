"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-stone-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {product.bestseller && (
            <span className="absolute top-3 left-3 bg-rose-400 text-white text-[10px] tracking-widest uppercase px-3 py-1">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-stone-800 group-hover:text-rose-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-stone-500">${product.price}.00</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full py-2.5 text-xs tracking-[0.15em] uppercase border border-stone-300 text-stone-600 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
