"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-neutral-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-[13px] text-neutral-800 tracking-wide">
          {product.name}
        </h3>
        <p className="text-[13px] text-neutral-400">${product.price}.00</p>
      </div>
    </Link>
  );
}
