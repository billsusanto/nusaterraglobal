import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Nusaterra Global Resources - Indonesian Quality Commodities",
  description:
    "Delivering high-quality, sustainable Indonesian commodities to global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logos/nusaterra_web_logo.svg"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${montserrat.variable} ${outfit.variable} font-montserrat antialiased m-0 p-0 overflow-x-hidden`}
      >
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
