import Image from "next/image";
import Link from "next/link";

// Product data with consistent styling and structure
const products = [
  {
    id: "coconut-charcoal",
    name: "Coconut",
    subtitle: "Charcoal Briquettes",
    image: "/products/coconut_charcoal_briquettes.png",
  },
  {
    id: "sawdust-charcoal",
    name: "Sawdust",
    subtitle: "Charcoal",
    image: "/products/sawdust_charchoal.png",
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
  return (
    <section className="py-20 bg-[#f9f9f2]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12">
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
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative rounded-lg overflow-hidden transition duration-300 h-full"
            >
              <div className="aspect-[3/4] md:aspect-[2/3] relative transition-transform duration-300 group-hover:scale-95">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end group-hover:bg-opacity-40">
                  <div className="p-6 text-white shadow-text">
                    <h3 className="font-semibold text-2xl md:text-3xl">
                      {product.name}
                    </h3>
                    {product.subtitle && (
                      <h3 className="font-semibold text-2xl md:text-3xl mt-0">
                        {product.subtitle}
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Horizontal line */}
        <div className="w-full h-[2px] bg-gray-400 mb-8"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-gray-700 md:max-w-2xl">
            At <span className="font-semibold">Nusaterra Global Resources</span>
            , we bring you the finest Indonesian commodities with reliable
            supply, consistent quality, and transparent communication you can
            trust.
          </p>

          <Link
            href="/products"
            className="py-3 px-8 rounded-md inline-block text-white text-lg font-medium whitespace-nowrap"
            style={{
              background:
                "linear-gradient(to right, #F2C94C, #E0B83D, #4D8B31)",
            }}
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
