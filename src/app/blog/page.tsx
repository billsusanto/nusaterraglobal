import Image from "next/image";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <main className="bg-[#f9f9f2] min-h-screen">
      <div className="container-custom pt-32 pb-10 md:pb-16 px-4 md:px-6">
        {/* Main Blog Image */}
        <div className="w-full rounded-lg md:rounded-xl overflow-hidden mb-6 md:mb-10">
          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] bg-gray-300 rounded-lg md:rounded-xl" />
        </div>
        {/* Title and Date */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
          Coconut Shell Charcoal Briquettes from Indonesia:{" "}
          <br className="hidden sm:block" />
          The Premium Fuel for Shisha & Hookah
        </h1>
        <div className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
          10/09/2025
        </div>

        {/* Blog Content */}
        <section className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            What Are Coconut Shell Charcoal Briquettes?
          </h2>
          <p className="mb-4 md:mb-6 text-base md:text-lg">
            Coconut shell charcoal briquettes are a premium natural fuel crafted
            from compressed charcoal powder derived from discarded coconut
            shells—an abundant byproduct of Indonesia's thriving coconut
            industry. Unlike traditional wood charcoal, they don't contribute to
            deforestation, making them 100% eco-friendly, sustainable, and
            renewable.
          </p>
          <p className="mb-4 md:mb-6 text-base md:text-lg">
            What sets these briquettes apart is their superior performance: they
            burn hotter, last longer, and produce cleaner heat than conventional
            charcoal. Odorless, smokeless, and spark-free, coconut shell
            charcoal briquettes guarantee a consistent and enjoyable shisha
            experience. This unique balance of sustainability and quality has
            positioned Indonesia as the world's leading supplier for hookah and
            shisha charcoal.
          </p>
        </section>

        <section className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Key Applications of Coconut Shell Charcoal Briquettes
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg mb-4 md:mb-6">
            <li>Shisha/hookah lounges</li>
            <li>Distributors and wholesalers</li>
            <li>Retail consumers</li>
          </ul>
        </section>

        <section className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Popular Sizes & Shapes for Shisha Use
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg mb-4 md:mb-6">
            <li>Cube 25, Cube 26</li>
            <li>Hexagonal Stick</li>
            <li>Finger Stick</li>
            <li>
              Each shape offers different burn times for various preferences
            </li>
          </ul>
        </section>

        <section className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Typical Product Specifications
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg mb-4 md:mb-6">
            <li>Low moisture</li>
            <li>Low ash</li>
            <li>High carbon content</li>
            <li>Long burning</li>
            <li>Uniform pieces</li>
          </ul>
        </section>

        <section className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Why Source Coconut Charcoal Briquettes from Indonesia?
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg mb-4 md:mb-6">
            <li>Abundant raw materials</li>
            <li>Eco-friendly production</li>
            <li>Export-ready quality and documentation</li>
          </ul>
        </section>

        <section className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Partner with Us
          </h2>
          <p className="mb-4 md:mb-6 text-base md:text-lg">
            Nusaterra offers consistent sizing, premium quality, export
            packaging, and all necessary documentation for your import needs.
            Partner with us for reliable supply and world-class coconut shell
            charcoal briquettes.
          </p>
        </section>
      </div>
      {/* Other Blogs Section */}
      <BlogSection />
      <Footer />
    </main>
  );
}
