import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";
import ProductGrid from "@/components/ProductGrid";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Calgary Blooms`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-xs text-stone-400">
          <li>
            <Link href="/" className="hover:text-stone-600 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/shop" className="hover:text-stone-600 transition-colors">
              Shop
            </Link>
          </li>
          <li>/</li>
          <li className="text-stone-600">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="relative aspect-square bg-stone-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.2em] uppercase text-rose-400 mb-2">
            {product.category === "signature"
              ? "Signature Arrangement"
              : product.category === "bouquets"
              ? "Fresh Bouquet"
              : product.category === "everyday"
              ? "Everyday Collection"
              : product.category === "sympathy"
              ? "Sympathy & Condolences"
              : product.category === "seasonal"
              ? "Seasonal"
              : "Wedding & Events"}
          </p>

          <h1 className="text-3xl md:text-4xl font-light text-stone-800 tracking-tight">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl text-stone-700 font-light">
            ${product.price}.00
          </p>

          <p className="mt-6 text-stone-500 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-10 border-t border-stone-200 pt-8">
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-700 mb-3">
              Details
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              {product.details}
            </p>
          </div>

          <div className="mt-8 border-t border-stone-200 pt-8">
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-700 mb-3">
              Delivery
            </h3>
            <ul className="space-y-2 text-sm text-stone-500">
              <li>Same-day delivery available for orders before 2pm</li>
              <li>Free delivery on orders over $100</li>
              <li>Serving Calgary and surrounding areas</li>
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="text-2xl font-light text-stone-800 tracking-tight mb-10 text-center">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
