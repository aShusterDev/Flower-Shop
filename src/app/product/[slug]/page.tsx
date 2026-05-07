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
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-8 lg:pt-28 lg:pb-14">
      {/* Breadcrumb */}
      <nav className="mb-10">
        <ol className="flex items-center gap-2 text-[11px] text-neutral-300">
          <li>
            <Link href="/" className="hover:text-neutral-600 transition-colors">
              Home
            </Link>
          </li>
          <li className="text-neutral-200">/</li>
          <li>
            <Link href="/shop" className="hover:text-neutral-600 transition-colors">
              Shop
            </Link>
          </li>
          <li className="text-neutral-200">/</li>
          <li className="text-neutral-500">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* Product image */}
        <div className="relative aspect-square bg-neutral-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Product info */}
        <div className="flex flex-col justify-center lg:py-8">
          <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-3">
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

          <h1 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
            {product.name}
          </h1>

          <p className="mt-4 text-xl text-neutral-800 font-light">
            ${product.price}.00
          </p>

          <div className="mt-8 border-t border-neutral-100 pt-8">
            <p className="text-[13px] text-neutral-500 leading-[1.9]">
              {product.description}
            </p>
          </div>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-10 border-t border-neutral-100 pt-8 space-y-6">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-neutral-800 mb-3">
                Details
              </h3>
              <p className="text-[13px] text-neutral-400 leading-[1.9]">
                {product.details}
              </p>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-neutral-800 mb-3">
                Delivery
              </h3>
              <ul className="space-y-2 text-[13px] text-neutral-400">
                <li>Same-day delivery for orders before 2pm</li>
                <li>Free delivery on orders over $100</li>
                <li>Serving Calgary and surrounding areas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-24 lg:mt-32 pt-10 border-t border-neutral-100">
          <h2 className="text-xl font-light text-neutral-800 tracking-tight mb-10">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
