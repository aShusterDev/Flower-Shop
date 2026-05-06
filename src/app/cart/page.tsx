"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-light text-stone-800 tracking-tight mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-stone-500 mb-10">
          Looks like you haven&apos;t added any arrangements yet.
        </p>
        <Link
          href="/shop"
          className="inline-block px-10 py-3.5 bg-stone-800 text-white text-xs tracking-[0.2em] uppercase hover:bg-stone-700 transition-colors"
        >
          Browse Arrangements
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light text-stone-800 tracking-tight mb-2">
        Shopping Cart
      </h1>
      <p className="text-sm text-stone-400 mb-10">
        {totalItems} {totalItems === 1 ? "item" : "items"}
      </p>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex gap-6 py-6 border-b border-stone-200"
          >
            <Link
              href={`/product/${item.product.slug}`}
              className="relative w-28 h-28 flex-shrink-0 bg-stone-100 overflow-hidden"
            >
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </Link>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <Link
                  href={`/product/${item.product.slug}`}
                  className="text-sm font-medium text-stone-800 hover:text-rose-400 transition-colors"
                >
                  {item.product.name}
                </Link>
                <p className="text-sm text-stone-500 mt-1">
                  ${item.product.price}.00
                </p>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border border-stone-300">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="px-3 py-1.5 text-stone-500 hover:text-stone-800 text-sm"
                  >
                    &minus;
                  </button>
                  <span className="px-3 py-1.5 text-sm text-stone-700 min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="px-3 py-1.5 text-stone-500 hover:text-stone-800 text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-xs text-stone-400 hover:text-red-500 transition-colors uppercase tracking-wide"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="text-sm font-medium text-stone-800 self-start">
              ${(item.product.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-stone-200 pt-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-stone-500">Subtotal</span>
          <span className="text-lg font-medium text-stone-800">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-stone-400 mb-8">
          Delivery calculated at checkout. Free delivery on orders over $100.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            disabled
            className="flex-1 py-4 bg-stone-800 text-white text-xs tracking-[0.2em] uppercase opacity-90 cursor-not-allowed"
          >
            Checkout &mdash; Coming Soon
          </button>
          <Link
            href="/shop"
            className="py-4 px-8 border border-stone-300 text-stone-600 text-xs tracking-[0.2em] uppercase text-center hover:border-stone-500 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
