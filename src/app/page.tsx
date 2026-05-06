import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts, getBestsellers, categories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

const categoryImages: Record<string, string> = {
  signature: "/products/lady-face-vase.jpg",
  bouquets: "/products/blush-rose-bouquet.jpg",
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
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/products/peach-pink-posy.jpg"
            alt="Beautiful floral arrangement"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.4em] uppercase text-stone-500 mb-4">
              Handcrafted with Love
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-stone-800 leading-tight tracking-tight">
              Calgary
              <br />
              <span className="italic font-normal">Blooms</span>
            </h1>
            <p className="mt-6 text-lg text-stone-600 font-light leading-relaxed max-w-md">
              Fresh, artisan floral arrangements crafted by Nadya for
              life&apos;s most beautiful moments.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-stone-800 text-white text-xs tracking-[0.2em] uppercase hover:bg-stone-700 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 border border-stone-400 text-stone-700 text-xs tracking-[0.2em] uppercase hover:border-stone-800 hover:text-stone-900 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
              Collections
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-tight">
              Shop by Occasion
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories
              .filter((c) => c.slug !== "all")
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/shop?category=${category.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
                >
                  <Image
                    src={categoryImages[category.slug] || "/products/ruby-romance.jpg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-white text-sm md:text-base tracking-[0.15em] uppercase font-light">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
              Curated Selection
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-tight">
              Featured Arrangements
            </h2>
          </div>

          <ProductGrid products={featured} />

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block px-10 py-3.5 border border-stone-300 text-stone-600 text-xs tracking-[0.2em] uppercase hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300"
            >
              View All Arrangements
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
              Most Loved
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-tight">
              Bestsellers
            </h2>
          </div>

          <ProductGrid products={bestsellers} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/products/wildflower-garden.jpg"
            alt="Wildflower bouquet"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        <div className="relative text-center max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-300 mb-4">
            Custom Orders Welcome
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Let Us Create Something
            <br />
            <span className="italic">Special for You</span>
          </h2>
          <p className="mt-6 text-stone-300 font-light">
            From intimate gatherings to grand celebrations, we craft bespoke
            arrangements tailored to your vision.
          </p>
          <Link
            href="/about"
            className="inline-block mt-10 px-10 py-3.5 bg-white text-stone-800 text-xs tracking-[0.2em] uppercase hover:bg-rose-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
