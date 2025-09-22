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
    id: "indonesian-sawdust",
    title: "Indonesian Sawdust, The Green Energy Revolution",
    date: "Jun 1st, 2025",
    image: "/images/blog3.jpg",
  },
];

const blogIdToProductSlug = {
  "premium-fuel-shisha": "coconut-charcoal",
  "indonesian-zeolite": "natural-zeolite",
  "indonesian-sawdust": "sawdust-charcoal",
};

const BlogSection = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-[#f9f9f2]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group overflow-hidden transition duration-300 flex flex-col"
            >
              <div className="relative h-72">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex-grow bg-[#f9f9f2] h-36">
                {/* Vertical line (same height for all cards, gray-400 color) */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>

                <div className="pl-6 py-6 h-full">
                  <p className="text-green-700 mb-3 font-medium">{post.date}</p>
                  <h3
                    className={`text-xl font-semibold transition-colors text-black`}
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
