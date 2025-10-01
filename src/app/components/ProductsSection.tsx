"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Product data with consistent styling and structure
const products = [
  {
    id: "coconut-charcoal",
    name: "Coconut",
    subtitle: "Charcoal Briquettes",
    image: "/products/coconut_charcoal_briquettes.png",
  },
  {
    id: "bbq-charcoal",
    name: "Barbecue",
    subtitle: "Charcoal",
    image: "/products/bbq_charcoal.png",
  },
  {
    id: "activated-carbon",
    name: "Activated",
    subtitle: "Carbon",
    image: "/products/activated_carbon.png",
  },
  {
    id: "natural-zeolite",
    name: "Natural",
    subtitle: "Zeolite",
    image: "/products/natural_zeolite.png",
  },
  {
    id: "palm-kernel",
    name: "Palm Kernel",
    subtitle: "Expeller",
    image: "/products/palm_kernel_expeller.png",
  },
];

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-[#f9f9f2]">
      <div className="container-custom px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold mb-8 md:mb-12"
        >
          <span
            style={{
              background: "linear-gradient(to right, #4D8B31, #E0B83D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nusaterra&apos;s
          </span>{" "}
          Products
        </motion.h2>

        {/* Responsive grid with fewer columns on smaller screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 mb-10 md:mb-16"
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants} custom={index}>
              <Link
                href={`/products/${product.id}`}
                className="group relative rounded-lg overflow-hidden transition duration-300 h-full block"
              >
                <div className="aspect-[3/4] md:aspect-[2/3] relative transition-all duration-300 group-hover:scale-95">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover"
                  />
                  {/* Add gradient overlay - dark at bottom, transparent at top */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <div className="p-3 md:p-6 text-white">
                      <h3 className="font-bold text-lg md:text-2xl lg:text-2xl drop-shadow-sm">
                        {product.name}
                      </h3>
                      {product.subtitle && (
                        <h3 className="font-bold text-lg md:text-2xl lg:text-2xl mt-0 drop-shadow-sm">
                          {product.subtitle}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Horizontal line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full h-[2px] bg-gray-400 mb-6 md:mb-8 origin-left"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8"
        >
          <p className="text-gray-700 text-sm md:text-base md:max-w-2xl">
            At <span className="font-semibold">Nusaterra Global Resources</span>
            , we bring you the finest Indonesian commodities with reliable
            supply, consistent quality, and transparent communication you can
            trust.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/products"
              className="py-2 md:py-3 px-6 md:px-8 rounded-md inline-block text-white text-base md:text-lg font-medium whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(to right, #F2C94C, #E0B83D, #4D8B31)",
              }}
            >
              View Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
