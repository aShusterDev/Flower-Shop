import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Calgary Blooms"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-lg font-light tracking-[0.15em] text-stone-800 uppercase">
                Calgary Blooms
              </h3>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Handcrafted floral arrangements made with love by Nadya.
              Serving Calgary and surrounding areas with fresh, beautiful
              flowers for every occasion.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-700 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=wedding"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Weddings & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=sympathy"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Sympathy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-700 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>Calgary, Alberta, Canada</li>
              <li>
                <a
                  href="mailto:hello@calgaryblooms.ca"
                  className="hover:text-stone-800 transition-colors"
                >
                  hello@calgaryblooms.ca
                </a>
              </li>
              <li>Mon – Sat: 9am – 6pm</li>
              <li>Sun: 10am – 4pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-12 pt-8 text-center">
          <p className="text-xs text-stone-400 tracking-wide">
            &copy; {new Date().getFullYear()} Calgary Blooms. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
