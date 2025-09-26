"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/images/home_background.jpg)" }}
    >
      {/* Main overlay with medium opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Additional gradient overlay that's darker at the bottom where text is */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)",
        }}
      ></div>

      <div className="container-custom relative z-10 h-full flex flex-col justify-center md:justify-end pt-16 md:pt-0 pb-12 md:pb-24">
        <motion.div
          className="max-w-4xl ml-0 py-6 md:py-12 px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl mb-4 md:mb-2 text-white font-extrabold leading-tight md:leading-tight lg:leading-tight drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
          >
            Connecting Indonesia&apos;s Commodities to the world
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white mb-6 md:mb-10 max-w-xl drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.3)" }}
          >
            We are a trusted Indonesian commodity trading company, delivering
            high-quality, sustainable products to global markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Link
              href="/products"
              className="inline-block bg-transparent text-white font-medium py-2 md:py-3 px-6 md:px-8 relative"
              style={{
                borderLeft: "1px solid #4D8B31",
                borderRight: "1px solid #E0B83D",
                backgroundImage:
                  "linear-gradient(90deg, #4D8B31, #E0B83D), linear-gradient(90deg, #4D8B31, #E0B83D)",
                backgroundSize: "100% 1px",
                backgroundPosition: "0 0, 0 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              Our Products
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - centered at bottom */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto max-w-[180px] flex flex-col items-center justify-center text-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          onClick={scrollToContent}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-white text-xs sm:text-sm font-medium mb-1 drop-shadow-md tracking-wider uppercase px-2">
            Learn More
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white w-6 h-6 drop-shadow-md" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
