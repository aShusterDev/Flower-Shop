import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts, getBestsellers, categories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

const categoryImages: Record<string, string> = {
  signature: "/products/orchid-elegance.jpg",
  bouquets: "/products/dahlia-dream.jpg",
  everyday: "/products/butterfly-rose-box.jpg",
  sympathy: "/products/pure-grace.jpg",
  seasonal: "/products/christmas-cottage.jpg",
  wedding: "/products/classic-bridal.jpg",
};

export default function Home() {
  const featured = getFeaturedProducts();
  const bestsellers = getBestsellers();

  return (
    <>
      {/* Hero — full bleed, photography-forward */}
      <section className="relative h-screen min-h-[700px] max-h-[1000px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/products/peach-pink-posy.jpg"
            alt="Fresh floral arrangement by Calgary Blooms"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-20">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/70 mb-4">
            Handcrafted in Calgary
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight max-w-2xl">
            Fresh Flowers,
            <br />
            Crafted with Care
          </h1>
          <div className="mt-8 flex gap-4">
            <Link
              href="/shop"
              className="px-8 py-3 bg-white text-neutral-900 text-[11px] tracking-[0.2em] uppercase hover:bg-neutral-100 transition-colors duration-200"
            >
              View Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Collection highlight — two large images side by side */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/shop?category=signature" className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/products/ivory-burgundy.jpg"
                alt="Signature Arrangements"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">Collection</p>
                <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
                  Signature Arrangements
                </h2>
                <span className="inline-block mt-4 text-[11px] tracking-[0.15em] uppercase text-white/80 border-b border-white/40 pb-0.5">
                  View Items
                </span>
              </div>
            </Link>

            <Link href="/shop?category=bouquets" className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/products/wildflower-garden.jpg"
                alt="Fresh Bouquets"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">Collection</p>
                <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
                  Fresh Bouquets
                </h2>
                <span className="inline-block mt-4 text-[11px] tracking-[0.15em] uppercase text-white/80 border-b border-white/40 pb-0.5">
                  View Items
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
                Curated Selection
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-800 transition-colors duration-200 border-b border-neutral-200 pb-0.5 hidden md:block"
            >
              View All
            </Link>
          </div>

          <ProductGrid products={featured} />

          <div className="text-center mt-12 md:hidden">
            <Link
              href="/shop"
              className="inline-block text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-800 border-b border-neutral-200 pb-0.5"
            >
              View All Arrangements
            </Link>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
              Shop by Occasion
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {categories
              .filter((c) => c.slug !== "all")
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/shop?category=${category.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src={categoryImages[category.slug] || "/products/ruby-romance.jpg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-5 md:p-7">
                    <h3 className="text-white text-[12px] md:text-[13px] tracking-[0.15em] uppercase font-light">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
                Most Loved
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
                Bestsellers
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-800 transition-colors duration-200 border-b border-neutral-200 pb-0.5 hidden md:block"
            >
              View All
            </Link>
          </div>

          <ProductGrid products={bestsellers} />
        </div>
      </section>

      {/* Full-width image banner */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/products/wildflower-garden.jpg"
            alt="Custom floral arrangements"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center max-w-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-5">
            Bespoke Florals
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-snug">
            Custom Arrangements
            <br />
            for Every Occasion
          </h2>
          <Link
            href="/about"
            className="inline-block mt-8 px-8 py-3 bg-white text-neutral-900 text-[11px] tracking-[0.2em] uppercase hover:bg-neutral-100 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
