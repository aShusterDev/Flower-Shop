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
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/products/orchid-twins.jpg"
            alt="Calgary Blooms arrangements"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
        <div className="relative text-center w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-300 mb-3">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            About Calgary Blooms
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
                Meet the Florist
              </p>
              <h2 className="text-3xl font-light text-stone-800 tracking-tight mb-6">
                Hello, I&apos;m Nadya
              </h2>
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Welcome to Calgary Blooms! I&apos;m a passionate florist based
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
            <div className="relative aspect-[4/5] bg-stone-100">
              <Image
                src="/products/spring-anemone.jpg"
                alt="Nadya's floral arrangement"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl font-light text-stone-800 tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7 text-rose-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              </div>
              <h3 className="text-sm tracking-[0.1em] uppercase text-stone-700 mb-3">
                Custom Arrangements
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Tell us your vision, and we&apos;ll bring it to life with a
                one-of-a-kind arrangement tailored just for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7 text-rose-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-sm tracking-[0.1em] uppercase text-stone-700 mb-3">
                Same-Day Delivery
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Order before 2pm for same-day delivery across Calgary.
                Free delivery on orders over $100.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7 text-rose-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-sm tracking-[0.1em] uppercase text-stone-700 mb-3">
                Weddings & Events
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                From bridal bouquets to full venue design, we make your
                special day bloom beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/products/rose-ceremony-duo.jpg"
            alt="Rose arrangements"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        <div className="relative text-center max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
            Ready to Order?
          </h2>
          <p className="text-stone-300 font-light mb-10">
            Browse our collection or reach out for a custom arrangement.
          </p>
          <Link
            href="/shop"
            className="inline-block px-10 py-3.5 bg-white text-stone-800 text-xs tracking-[0.2em] uppercase hover:bg-rose-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
