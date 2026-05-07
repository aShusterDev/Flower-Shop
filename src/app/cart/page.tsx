"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-28 text-center">
        <h1 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight mb-3">
          Your Cart is Empty
        </h1>
        <p className="text-[13px] text-neutral-400 mb-10">
          Looks like you haven&apos;t added any arrangements yet.
        </p>
        <Link
          href="/shop"
          className="inline-block px-8 py-3 bg-neutral-900 text-white text-[11px] tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors duration-200"
        >
          Browse Arrangements
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-28 pb-10 lg:pt-32 lg:pb-14">
      <h1 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight mb-1">
        Shopping Cart
      </h1>
      <p className="text-[12px] text-neutral-400 mb-10">
        {totalItems} {totalItems === 1 ? "item" : "items"}
      </p>

      <div className="space-y-0">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex gap-5 py-7 border-b border-neutral-100"
          >
            <Link
              href={`/product/${item.product.slug}`}
              className="relative w-24 h-24 flex-shrink-0 bg-neutral-50 overflow-hidden"
            >
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </Link>

            <div className="flex-1 flex flex-col justify-between min-w-0">
              <div>
                <Link
                  href={`/product/${item.product.slug}`}
                  className="text-[13px] text-neutral-800 hover:text-neutral-500 transition-colors"
                >
                  {item.product.name}
                </Link>
                <p className="text-[13px] text-neutral-400 mt-0.5">
                  ${item.product.price}.00
                </p>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border border-neutral-200">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="px-3 py-1.5 text-neutral-400 hover:text-neutral-800 text-[13px] transition-colors"
                  >
                    &minus;
                  </button>
                  <span className="px-3 py-1.5 text-[13px] text-neutral-700 min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="px-3 py-1.5 text-neutral-400 hover:text-neutral-800 text-[13px] transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-[11px] text-neutral-300 hover:text-neutral-800 transition-colors uppercase tracking-wide"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="text-[13px] text-neutral-800 self-start pt-0.5">
              ${(item.product.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-neutral-100 pt-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[12px] text-neutral-400 tracking-wide uppercase">Subtotal</span>
          <span className="text-lg font-light text-neutral-800">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-[11px] text-neutral-300 mb-10">
          Delivery calculated at checkout. Free delivery on orders over $100.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            disabled
            className="flex-1 py-3.5 bg-neutral-900 text-white text-[11px] tracking-[0.2em] uppercase opacity-80 cursor-not-allowed"
          >
            Checkout &mdash; Coming Soon
          </button>
          <Link
            href="/shop"
            className="py-3.5 px-8 border border-neutral-200 text-neutral-500 text-[11px] tracking-[0.2em] uppercase text-center hover:border-neutral-400 hover:text-neutral-700 transition-all duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
