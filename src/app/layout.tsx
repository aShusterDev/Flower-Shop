import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "Calgary Blooms | Handcrafted Floral Arrangements by Nadya",
  description:
    "Beautiful handcrafted flower arrangements for every occasion. Fresh bouquets, signature arrangements, wedding florals, and sympathy flowers delivered in Calgary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
