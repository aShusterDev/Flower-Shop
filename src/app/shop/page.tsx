import { Suspense } from "react";
import ShopContent from "./ShopContent";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-10 lg:pt-32 lg:pb-14">
          <div className="mb-10">
            <h1 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
              All Arrangements
            </h1>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
