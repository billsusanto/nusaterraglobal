"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../lib/products";
import { useRouter, usePathname } from "next/navigation";

interface ProductDetailClientProps {
  product: Product;
  otherProducts: Product[];
}

export default function ProductDetailClient({
  product,
  otherProducts,
}: ProductDetailClientProps) {
  // State for active variant (Premium or Standard)
  const [activeVariant, setActiveVariant] = useState<"premium" | "standard">(
    "premium"
  );

  // State for active tab (Specification or Packaging)
  const [activeTab, setActiveTab] = useState<"specification" | "packaging">(
    "specification"
  );

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-[#f9f9f2] min-h-screen pb-16 pt-40">
      {/* Breadcrumb Navigation */}
      {/* Removed Return link, arrow, and Products / ... breadcrumb */}

      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Image - Square container */}
          <div className="md:w-1/3 lg:w-4/12">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              style={{ maxWidth: "450px" }}
            >
              {/* Fixed square container */}
              <div
                className="w-full"
                style={{ position: "relative", paddingBottom: "100%" }}
              >
                <Image
                  src={
                    product.id === "coconut-charcoal"
                      ? "/products/coconut_charcoal_briquettes_square.png"
                      : product.id === "palm-kernel"
                      ? "/products/palm_kernel_expeller_square.png"
                      : product.id === "sawdust-charcoal"
                      ? "/products/sawdust_charcoal_square.png"
                      : `/products/${product.id.replace("-", "_")}_square.png`
                  }
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  unoptimized={true}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-2/3 lg:w-8/12">
            <h1 className="text-3xl font-bold text-black">{product.name}</h1>

            {/* Product Variants */}
            <div className="mt-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveVariant("premium")}
                  className={`px-6 py-2 font-bold uppercase rounded-lg border-2 relative transition-all duration-150
                    ${
                      activeVariant === "premium"
                        ? "text-green-700 bg-[#ecf4ec]"
                        : "border-gray-300 text-gray-700 bg-gray-100"
                    }
                  `}
                  style={
                    activeVariant === "premium"
                      ? {
                          border: "2px solid transparent",
                          backgroundImage:
                            "linear-gradient(#ecf4ec, #ecf4ec), linear-gradient(90deg, #4D8B31, #E0B83D)",
                          backgroundOrigin: "border-box",
                          backgroundClip: "padding-box, border-box",
                        }
                      : {}
                  }
                >
                  PREMIUM
                </button>
                <button
                  onClick={() => setActiveVariant("standard")}
                  className={`px-6 py-2 font-bold uppercase rounded-lg border-2 relative transition-all duration-150
                    ${
                      activeVariant === "standard"
                        ? "text-green-700 bg-[#ecf4ec]"
                        : "border-gray-300 text-gray-700 bg-gray-100"
                    }
                  `}
                  style={
                    activeVariant === "standard"
                      ? {
                          border: "2px solid transparent",
                          backgroundImage:
                            "linear-gradient(#ecf4ec, #ecf4ec), linear-gradient(90deg, #4D8B31, #E0B83D)",
                          backgroundOrigin: "border-box",
                          backgroundClip: "padding-box, border-box",
                        }
                      : {}
                  }
                >
                  STANDARD
                </button>
              </div>
            </div>

            {/* Product Description */}
            <div className="mt-4">
              <p className="text-gray-700 text-sm leading-tight">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
                {/* Applications */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-700">
                    Applications:
                  </h3>
                  {product.id === "coconut-charcoal" && (
                    <p className="text-gray-700 text-sm">Shisha/Hookah</p>
                  )}
                  {product.id === "sawdust-charcoal" && (
                    <p className="text-gray-700 text-sm">
                      BBQ / Industrial Use
                    </p>
                  )}
                  {product.id === "natural-zeolite" && (
                    <p className="text-gray-700 text-sm">
                      Agriculture, Water treatment, Aquaculture, Livestock feed
                    </p>
                  )}
                  {product.id === "activated-carbon" && (
                    <p className="text-gray-700 text-sm">
                      Air & gas filtration, Water treatment, Food & beverage
                      purification, Industrial processes
                    </p>
                  )}
                  {product.id === "palm-kernel" && (
                    <div className="text-gray-700 text-sm leading-tight">
                      <p>
                        <strong>Animal Feed:</strong> Protein/fiber for cattle,
                        sheep, goats
                      </p>
                      <p>
                        <strong>Fertilizer:</strong> Organic-rich soil
                        conditioner
                      </p>
                      <p>
                        <strong>Biomass Fuel:</strong> Renewable energy
                      </p>
                    </div>
                  )}
                </div>

                {/* Types/Shapes */}
                <div>
                  {product.id === "coconut-charcoal" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700">
                        Shapes/Sizes:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Cubes, Hex sticks, Finger sticks, Pillow BBQ, Hex BBQ
                      </p>
                    </div>
                  )}
                  {product.id === "sawdust-charcoal" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700">
                        Types:
                      </h3>
                      <p className="text-gray-700 text-sm leading-tight">
                        <strong>Big Hexagonal:</strong> Burn 6–7 hrs, 67–85%
                        carbon
                        <br />
                        <strong>Pillow Shaped:</strong> Burn 2.5+ hrs, 70–85%
                        carbon
                      </p>
                    </div>
                  )}
                  {product.id === "natural-zeolite" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700">
                        Type:
                      </h3>
                      <p className="text-gray-700 text-sm">Clinoptilolite</p>
                    </div>
                  )}
                  {product.id === "activated-carbon" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700">
                        Forms:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Granular, Powdered, Pelletized
                      </p>
                    </div>
                  )}
                  {product.id === "palm-kernel" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700">
                        Forms:
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Standard loose or pelletized
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <span
                onClick={() => {
                  if (pathname === "/products") {
                    const el = document.getElementById("how-to-order");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    router.push("/products#how-to-order");
                  }
                }}
                className="bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent font-bold text-lg hover:underline cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis"
                style={{ maxWidth: "300px", display: "inline-block" }}
              >
                HOW TO ORDER?
              </span>
            </div>

            {/* Specification Tabs */}
            <div className="mt-3">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-4">
                  <button
                    onClick={() => setActiveTab("specification")}
                    className={`py-1 px-1 text-sm border-b-2 ${
                      activeTab === "specification"
                        ? "border-green-600 font-medium text-green-600"
                        : "border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    SPECIFICATION
                  </button>
                  <button
                    onClick={() => setActiveTab("packaging")}
                    className={`py-1 px-1 text-sm border-b-2 ${
                      activeTab === "packaging"
                        ? "border-green-600 font-medium text-green-600"
                        : "border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    PACKAGING
                  </button>
                </nav>
              </div>

              {/* Tabs Content */}
              <div className="py-3 h-48 overflow-y-auto">
                {/* Specification Tab Content */}
                {activeTab === "specification" &&
                  product.id === "coconut-charcoal" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 mb-3">
                        {activeVariant === "premium"
                          ? "Premium Grade:"
                          : "Standard Grade:"}
                      </h3>
                      {activeVariant === "premium" ? (
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Fixed Carbon:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              ≥80%
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Ash Content:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              ≤2.2%
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Moisture:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              ≤6%
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Burn Time:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              90–120 mins
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Calorific Value:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              7300–7500
                            </dd>
                          </div>
                        </dl>
                      ) : (
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Fixed Carbon:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              ≥75%
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Ash Content:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              ≤2.5%
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Moisture:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              ≤8%
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Burn Time:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              60–90 mins
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-600 font-medium">
                              Calorific Value:
                            </dt>
                            <dd className="text-xs font-bold text-gray-900">
                              7000–7200
                            </dd>
                          </div>
                        </dl>
                      )}
                    </div>
                  )}

                {activeTab === "specification" &&
                  product.id === "sawdust-charcoal" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 mb-3">
                        {activeVariant === "premium"
                          ? "Premium Grade:"
                          : "Standard Grade:"}
                      </h3>
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Fixed Carbon:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "75-85%" : "67-75%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Features:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            High durability, no crack/spark/smell
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Burn Time:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium"
                              ? "5-7 hrs"
                              : "2.5-5 hrs"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Packaging:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            10–20kg cartons
                          </dd>
                        </div>
                      </dl>
                    </div>
                  )}

                {activeTab === "specification" &&
                  product.id === "natural-zeolite" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 mb-3">
                        {activeVariant === "premium"
                          ? "Premium Grade:"
                          : "Standard Grade:"}
                      </h3>
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            SiO₂:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "≥75%" : "≥70%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            CEC:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium"
                              ? "120–160 meq/100g"
                              : "80–120 meq/100g"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Forms:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            Granular (2–5mm), Powder (100/150/200 mesh), Chip
                            (0.5–10mm)
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Packaging:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            25kg PP bags
                          </dd>
                        </div>
                      </dl>
                    </div>
                  )}

                {activeTab === "specification" &&
                  product.id === "activated-carbon" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 mb-3">
                        {activeVariant === "premium"
                          ? "Premium Grade:"
                          : "Standard Grade:"}
                      </h3>
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Iodine number:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium"
                              ? "1000–1200 mg/g"
                              : "900–1000 mg/g"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Moisture:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "≤3%" : "≤5%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Hardness:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "≥98%" : "≥95%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Packaging:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            25kg PP bags
                          </dd>
                        </div>
                      </dl>
                    </div>
                  )}

                {activeTab === "specification" &&
                  product.id === "palm-kernel" && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 mb-3">
                        {activeVariant === "premium"
                          ? "Premium Grade:"
                          : "Standard Grade:"}
                      </h3>
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Protein:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "16–18%" : "14–16%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Fiber:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "14–18%" : "12–14%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Moisture:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "≤10%" : "≤12%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Residual oil:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            {activeVariant === "premium" ? "7–8%" : "6–7%"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-600 font-medium">
                            Packaging:
                          </dt>
                          <dd className="text-xs font-bold text-gray-900">
                            25kg PP bags
                          </dd>
                        </div>
                      </dl>
                    </div>
                  )}

                {/* Packaging Tab Content */}
                {activeTab === "packaging" && (
                  <div>
                    {product.id === "coconut-charcoal" && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-700 mb-3">
                          Packaging
                        </h3>
                        <ul className="text-sm text-gray-700 list-disc ml-5">
                          <li>1kg inner box</li>
                          <li>10–20kg cartons</li>
                        </ul>
                      </div>
                    )}
                    {product.id === "sawdust-charcoal" && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-700 mb-3">
                          Packaging
                        </h3>
                        <ul className="text-sm text-gray-700 list-disc ml-5">
                          <li>10–20kg cartons</li>
                        </ul>
                      </div>
                    )}
                    {product.id === "natural-zeolite" && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-700 mb-3">
                          Packaging
                        </h3>
                        <ul className="text-sm text-gray-700 list-disc ml-5">
                          <li>25kg PP bags</li>
                        </ul>
                      </div>
                    )}
                    {product.id === "activated-carbon" && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-700 mb-3">
                          Packaging
                        </h3>
                        <ul className="text-sm text-gray-700 list-disc ml-5">
                          <li>25kg PP bags</li>
                        </ul>
                      </div>
                    )}
                    {product.id === "palm-kernel" && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-700 mb-3">
                          Packaging
                        </h3>
                        <ul className="text-sm text-gray-700 list-disc ml-5">
                          <li>25kg PP bags</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button - Right Aligned */}
            <div className="text-right">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-white font-semibold rounded-md hover:opacity-90 transition"
                style={{
                  background: "linear-gradient(to right, #E0B83D, #4D8B31)",
                }}
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* Other Products Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            <span
              style={{
                background: "linear-gradient(to right, #4D8B31, #E0B83D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Other Products
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.slice(0, 4).map((otherProduct) => (
              <Link
                key={otherProduct.id}
                href={`/products/${otherProduct.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <div className="relative aspect-square w-full bg-gray-200 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={
                      otherProduct.id === "coconut-charcoal"
                        ? "/products/coconut_charcoal_briquettes_square.png"
                        : otherProduct.id === "palm-kernel"
                        ? "/products/palm_kernel_expeller_square.png"
                        : otherProduct.id === "sawdust-charcoal"
                        ? "/products/sawdust_charcoal_square.png"
                        : `/products/${otherProduct.id.replace(
                            "-",
                            "_"
                          )}_square.png`
                    }
                    alt={otherProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 flex items-end transition-opacity">
                    <div className="p-4 w-full text-white shadow-text">
                      <h3 className="font-semibold text-sm md:text-base">
                        {otherProduct.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
