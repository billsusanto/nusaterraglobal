"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Counter component for animated number counting
interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Counter = ({ end, duration = 2, className, style }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <h3 ref={countRef} className={className} style={style}>
      {count}+
    </h3>
  );
};

const AboutSection = () => {
  // Create refs for the section and its elements
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-[#f9f9f2]">
      <div className="container-custom px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Left column - Image with overlay text */}
          <motion.div
            className="relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/images/about_section_sustainability_picture.jpg"
              alt="Sustainability and Quality Image"
              width={600}
              height={450}
              className="w-full h-auto rounded-lg"
              unoptimized={true}
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                Sustainability and Quality in mind
              </h3>
              <p className="text-white text-sm md:text-base max-w-md">
                We are a trusted Indonesian commodity trading company,
                delivering high-quality, sustainable products to global markets.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - About information */}
          <motion.div
            className="pt-2 md:pt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Centered heading */}
            <motion.h2
              className="text-3xl md:text-6xl font-bold mb-6 md:mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              About{" "}
              <span
                style={{
                  background:
                    "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Nusaterra
              </span>
            </motion.h2>

            {/* Center-aligned paragraph */}
            <motion.p
              className="text-gray-700 mb-8 md:mb-9 text-base md:text-lg text-center mx-auto max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Nusaterra Global Resources brings you the finest Indonesian
              commodities with reliable supply, consistent quality, and
              transparent communication you can trust.
            </motion.p>

            {/* Centered stats followed by centered button */}
            <motion.div
              className="flex flex-col items-center mb-6 md:mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Stats centered and grouped closer */}
              <div className="flex gap-8 md:gap-16 mb-6 md:mb-8">
                <div className="text-center">
                  <Counter
                    end={20}
                    duration={1.5}
                    className="text-4xl md:text-6xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  />
                  <p className="text-gray-700 text-lg font-bold md:text-2xl">
                    Clients
                  </p>
                </div>
                <div className="text-center">
                  <Counter
                    end={5}
                    duration={1.5}
                    className="text-3xl md:text-6xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  />
                  <p className="text-gray-700 text-lg md:text-2xl font-bold">
                    Years
                  </p>
                </div>
                <div className="text-center">
                  <Counter
                    end={6}
                    duration={1.5}
                    className="text-3xl md:text-6xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  />
                  <p className="text-gray-700 text-lg md:text-2xl font-bold">
                    Countries
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Centered Learn More button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="py-2 md:py-3 px-6 md:px-8 inline-block text-white text-base md:text-lg font-medium"
                style={{
                  background:
                    "linear-gradient(to right, #F2C94C, #E0B83D, #4D8B31)",
                }}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
