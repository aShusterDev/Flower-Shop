"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  let filtered = getProductsByCategory(activeCategory);

  if (sortBy === "price-low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
          Our Collection
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-stone-800 tracking-tight">
          Shop All Arrangements
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 text-xs tracking-[0.1em] uppercase transition-all duration-200 ${
                activeCategory === cat.slug
                  ? "bg-stone-800 text-white"
                  : "border border-stone-300 text-stone-500 hover:border-stone-500 hover:text-stone-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-stone-400 tracking-wide uppercase">
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-stone-600 border border-stone-300 px-3 py-2 bg-white focus:outline-none focus:border-stone-500"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <p className="text-sm text-stone-400 mb-8">
        {filtered.length} {filtered.length === 1 ? "arrangement" : "arrangements"}
      </p>

      <ProductGrid products={filtered} />
    </div>
  );
}
