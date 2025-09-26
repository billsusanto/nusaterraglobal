"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Updated dates to match the Figma design
const blogPosts = [
  {
    id: "premium-fuel-shisha",
    title: "The Premium Fuel for Shisha and Hookah",
    date: "Sep 15th, 2024",
    image: "/images/blog1.jpg",
  },
  {
    id: "indonesian-zeolite",
    title: "Indonesian Zeolite the eco friendly mineral.",
    date: "Jan 11th, 2025",
    image: "/images/blog2.jpg",
  },
  {
    id: "indonesian-bbq-charcoal",
    title: "Indonesian BBQ charcoal, The Green Energy Revolution",
    date: "Jun 1st, 2025",
    image: "/images/blog3.jpg",
  },
];

const blogIdToProductSlug = {
  "premium-fuel-shisha": "coconut-charcoal",
  "indonesian-zeolite": "natural-zeolite",
  "indonesian-bbq-charcoal": "bbq-charcoal",
};

const BlogSection = () => {
  const router = useRouter();
  return (
    <section className="py-12 md:py-20 bg-[#f9f9f2]">
      <div className="container-custom px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10">
          Nusaterra&apos;s{" "}
          <span
            style={{
              background: "linear-gradient(to right, #4D8B31, #E0B83D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Blog
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group overflow-hidden transition duration-300 flex flex-col"
            >
              <div className="relative h-52 sm:h-60 md:h-72">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex-grow bg-[#f9f9f2] h-28 sm:h-32 md:h-36">
                {/* Vertical line (same height for all cards, gray-400 color) */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>

                <div className="pl-4 md:pl-6 py-4 md:py-6 h-full">
                  <p className="text-green-700 mb-2 md:mb-3 text-sm md:text-base font-medium">
                    {post.date}
                  </p>
                  <h3
                    className={`text-base md:text-xl font-semibold transition-colors text-black line-clamp-2`}
                  >
                    <span
                      className="hover:underline cursor-pointer text-black"
                      tabIndex={-1}
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          `/products/${blogIdToProductSlug[post.id]}`
                        );
                      }}
                    >
                      {post.title}
                    </span>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
