"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { categories, getProductsByCategory } from "@/data/products";
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
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-10 lg:pt-32 lg:pb-14">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
          {activeCategory === "all"
            ? "All Arrangements"
            : categories.find((c) => c.slug === activeCategory)?.name || "Shop"}
        </h1>
        <p className="text-[12px] text-neutral-400 mt-2">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 pb-6 border-b border-neutral-100">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 text-[11px] tracking-[0.1em] uppercase transition-all duration-200 ${
                activeCategory === cat.slug
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-[12px] text-neutral-500 border border-neutral-200 px-4 py-2.5 bg-white focus:outline-none focus:border-neutral-400 appearance-none cursor-pointer"
        >
          <option value="default">Sort by: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* Product grid */}
      <ProductGrid products={filtered} />
    </div>
  );
}
