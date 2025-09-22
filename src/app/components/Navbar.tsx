"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [textDark, setTextDark] = useState(false);
  const heroObserver = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  // Check if current page is products page, about page, or blog page
  const isProductsPage =
    pathname === "/products" || pathname.startsWith("/products/");
  const isAboutPage = pathname === "/about";
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");

  useEffect(() => {
    // If we're on the products, about, or blog page, always use dark text
    if (isProductsPage || isAboutPage || isBlogPage) {
      setTextDark(true);
      return;
    }

    // Create an Intersection Observer to detect when we leave the Hero section
    const options = {
      // This threshold means the callback will run when 0% of the target is visible
      // Effectively when it's completely out of the viewport
      threshold: 0,
      // This adds a small buffer above the hero so the navbar changes color slightly earlier
      rootMargin: "-80px 0px 0px 0px",
    };

    // Observer callback function
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        // When Hero is NOT intersecting (i.e., we've scrolled past it), text should be dark
        // When Hero IS intersecting, text should be light
        setTextDark(!entry.isIntersecting);
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Find the Hero section
    const heroSection = document.querySelector(".h-screen");

    // Start observing the Hero section
    if (heroSection) {
      observer.observe(heroSection);
      heroObserver.current = observer;
    }

    // Clean up
    return () => {
      if (heroObserver.current) {
        heroObserver.current.disconnect();
      }
    };
  }, [isProductsPage, isAboutPage, isBlogPage]);

  // Force dark text on Products, About, or Blog page, use the dynamic state for other pages
  const textColor =
    isProductsPage || isAboutPage || isBlogPage
      ? "text-black"
      : textDark
      ? "text-black"
      : "text-white";
  // Contact button now uses gradient background instead of conditional styling

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8 transition-all duration-300">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center space-x-36">
          <Link href="/" className="flex items-center">
            <Image
              src={
                isProductsPage || isAboutPage || isBlogPage || textDark
                  ? "/logos/nusaterra_logo_dark.svg"
                  : "/logos/nusaterra_logo_hero_section.svg"
              }
              alt="Nusaterra Logo"
              width={200}
              height={50}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center space-x-20">
            <Link
              href="/"
              className={`${textColor} text-sm font-medium hover:text-secondary transition duration-300`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`${textColor} text-sm font-medium hover:text-secondary transition duration-300`}
            >
              ABOUT US
            </Link>
            <Link
              href="/products"
              className={`${textColor} text-sm font-medium hover:text-secondary transition duration-300`}
            >
              PRODUCTS
            </Link>
            <Link
              href="/blog"
              className={`${textColor} text-sm font-medium hover:text-secondary transition duration-300`}
            >
              BLOG
            </Link>
          </div>
        </div>

        <Link
          href="/contact"
          className={`
            px-7 py-2.5 rounded-md text-sm font-medium transition duration-300
            ${
              isProductsPage ||
              isAboutPage ||
              isBlogPage ||
              (textDark && !isProductsPage && !isAboutPage && !isBlogPage)
                ? "text-white border-0"
                : textDark
                ? "border border-primary text-primary hover:bg-primary hover:text-white"
                : "border bg-white bg-opacity-10 text-white hover:bg-secondary hover:bg-opacity-100 hover:border-secondary"
            }
          `}
          style={
            isProductsPage ||
            isAboutPage ||
            isBlogPage ||
            (textDark && !isProductsPage && !isAboutPage && !isBlogPage)
              ? {
                  background:
                    "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                }
              : {}
          }
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
