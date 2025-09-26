import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog - Nusaterra Global Resources",
  description:
    "Latest articles and news about Indonesian commodities, charcoal, zeolite, and more.",
};

export default function BlogPage() {
  return (
    <main className="bg-[#f9f9f2] min-h-screen">
      <div className="pt-32"></div>

      {/* Blog Posts Section */}
      <BlogSection />
      <Footer />
    </main>
  );
}
