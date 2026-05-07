import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Calgary Blooms",
  description:
    "Learn about Nadya and Calgary Blooms — handcrafted floral arrangements made with love in Calgary, Alberta.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/products/orchid-twins.jpg"
            alt="Calgary Blooms arrangements"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-12 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-3">
            Our Story
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            About Calgary Blooms
          </h1>
        </div>
      </section>

      {/* About Nadya */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-neutral-50 overflow-hidden">
              <Image
                src="/products/spring-anemone.jpg"
                alt="Floral arrangement by Nadya"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:py-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-3">
                Meet the Florist
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight mb-8">
                Hello, I&apos;m Nadya
              </h2>
              <div className="space-y-5 text-[13px] text-neutral-500 leading-[1.9]">
                <p>
                  Welcome to Calgary Blooms. I&apos;m a passionate florist based
                  in Calgary, Alberta, dedicated to creating beautiful,
                  handcrafted floral arrangements for every occasion.
                </p>
                <p>
                  Every arrangement I create is made with care, using the
                  freshest seasonal flowers sourced from trusted local and
                  international growers. I believe flowers have the power to
                  transform spaces, uplift spirits, and express emotions that
                  words sometimes can&apos;t.
                </p>
                <p>
                  Whether you&apos;re celebrating a milestone, expressing
                  sympathy, decorating your home, or planning a wedding, I pour
                  my heart into every petal, every stem, and every design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {[
              {
                title: "Custom Arrangements",
                description: "Tell us your vision, and we'll bring it to life with a one-of-a-kind arrangement tailored just for you.",
              },
              {
                title: "Same-Day Delivery",
                description: "Order before 2pm for same-day delivery across Calgary. Free delivery on orders over $100.",
              },
              {
                title: "Weddings & Events",
                description: "From bridal bouquets to full venue design, we make your special day bloom beautifully.",
              },
            ].map((service) => (
              <div key={service.title} className="text-center">
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-neutral-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-[13px] text-neutral-400 leading-[1.9]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/products/rose-ceremony-duo.jpg"
            alt="Rose arrangements"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center max-w-xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
            Ready to Order?
          </h2>
          <p className="text-[13px] text-white/60 mb-8">
            Browse our collection or reach out for a custom arrangement.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-white text-neutral-900 text-[11px] tracking-[0.2em] uppercase hover:bg-neutral-100 transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
