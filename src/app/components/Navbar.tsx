"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [textDark, setTextDark] = useState(false);
  const [pastHeroSection, setPastHeroSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroObserver = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  // Check if current page is products page, about page, gallery page, blog page, or contact page
  const isProductsPage =
    pathname === "/products" || pathname.startsWith("/products/");
  const isAboutPage = pathname === "/about";
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const isGalleryPage = pathname === "/gallery";
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    // If we're on the products, about, gallery, blog, or contact page, always use dark text and fixed position
    if (
      isProductsPage ||
      isAboutPage ||
      isBlogPage ||
      isGalleryPage ||
      isContactPage
    ) {
      setTextDark(true);
      setPastHeroSection(false); // Ensure we don't apply the slide-down animation on these pages
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
        const isScrolledPastHero = !entry.isIntersecting;
        setTextDark(isScrolledPastHero);
        setPastHeroSection(isScrolledPastHero);
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
  }, [isProductsPage, isAboutPage, isBlogPage, isGalleryPage, isContactPage]);

  // Force dark text on Products, About, Gallery, Blog, or Contact page, use the dynamic state for other pages
  const textColor =
    isProductsPage ||
    isAboutPage ||
    isBlogPage ||
    isGalleryPage ||
    isContactPage
      ? "text-black"
      : textDark
      ? "text-black"
      : "text-white";

  // Determine if navbar should be fixed/sticky and its appearance
  const shouldBeFixed =
    pastHeroSection ||
    isProductsPage ||
    isAboutPage ||
    isBlogPage ||
    isGalleryPage ||
    isContactPage;

  // Only apply slideDown animation when transitioning from hero section
  // For other pages (products, about, gallery, blog), the navbar is fixed from the start without animation
  const fixedNavClasses = shouldBeFixed
    ? pastHeroSection &&
      !isProductsPage &&
      !isAboutPage &&
      !isBlogPage &&
      !isGalleryPage
      ? "fixed animate-slideDown" // Add animation only when scrolling past hero on homepage
      : "fixed" // No animation on other pages or initial load
    : "absolute"; // In hero section, navbar is absolute positioned

  // Contact button now uses gradient background instead of conditional styling

  // Function to close mobile menu when a link is clicked
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 py-4 md:py-8 transition-all duration-300 ${fixedNavClasses} ${
        textDark ? "bg-[#f9f9f2] shadow-md" : ""
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo - always visible */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
              className="h-8 md:h-12 w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-18">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/"
              className={`${textColor} text-md font-medium hover:text-secondary transition duration-300`}
            >
              HOME
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/about"
              className={`${textColor} text-md font-medium hover:text-secondary transition duration-300`}
            >
              ABOUT US
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/products"
              className={`${textColor} text-md font-medium hover:text-secondary transition duration-300`}
            >
              PRODUCTS
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/gallery"
              className={`${textColor} text-md font-medium hover:text-secondary transition duration-300`}
            >
              GALLERY
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/blog"
              className={`${textColor} text-md font-medium hover:text-secondary transition duration-300`}
            >
              BLOG
            </Link>
          </motion.div>
        </div>

        {/* Contact Button - visible on desktop, hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className={`
                px-7 py-2.5 text-sm font-medium transition duration-300
                ${
                  isProductsPage ||
                  isAboutPage ||
                  isBlogPage ||
                  isGalleryPage ||
                  isContactPage ||
                  (textDark &&
                    !isProductsPage &&
                    !isAboutPage &&
                    !isBlogPage &&
                    !isGalleryPage &&
                    !isContactPage)
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
              isGalleryPage ||
              isContactPage ||
              (textDark &&
                !isProductsPage &&
                !isAboutPage &&
                !isBlogPage &&
                !isGalleryPage &&
                !isContactPage)
                ? {
                    background:
                      "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                  }
                : {}
            }
          >
            CONTACT US
          </Link>
        </motion.div>

        {/* Mobile menu button - only visible on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  textDark ||
                  isProductsPage ||
                  isAboutPage ||
                  isBlogPage ||
                  isGalleryPage
                    ? "text-black"
                    : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  textDark ||
                  isProductsPage ||
                  isAboutPage ||
                  isBlogPage ||
                  isGalleryPage
                    ? "text-black"
                    : "text-white"
                }`}
              />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile menu - only visible when open */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-white z-40 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-8 px-6 py-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-black text-lg font-medium"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="text-black text-lg font-medium"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link
                href="/products"
                className="text-black text-lg font-medium"
                onClick={closeMobileMenu}
              >
                PRODUCTS
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link
                href="/gallery"
                className="text-black text-lg font-medium"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link
                href="/blog"
                className="text-black text-lg font-medium"
                onClick={closeMobileMenu}
              >
                BLOG
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="text-white text-lg font-medium px-7 py-3 rounded-md text-center inline-block"
                onClick={closeMobileMenu}
                style={{
                  background:
                    "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                }}
              >
                CONTACT US
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
