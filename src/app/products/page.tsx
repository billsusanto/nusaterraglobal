import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Products - Nusaterra Global Resources",
  description:
    "High-quality, sustainable Indonesian commodities including charcoal, zeolite, and more.",
};

// Product data with correct styling and structure for the catalog view
const catalogProducts = [
  {
    id: "coconut-charcoal",
    name: "Coconut",
    subtitle: "Charcoal Briquettes",
    image: "/products/coconut_charcoal_briquettes.png",
  },
  {
    id: "bbq-charcoal",
    name: "BBQ",
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

export default function ProductsPage() {
  return (
    <div className="bg-[#f9f9f2]">
      {/* Products Header */}
      <section className="pt-40 pb-10 bg-[#f9f9f2]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                <span
                  className="text-4xl font-bold"
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
              </h1>
              <p className="text-gray-700 max-w-2xl text-lg">
                At Nusaterra Global Resources, we bring you the finest
                Indonesian commodities with reliable supply, consistent quality,
                and transparent communication you can trust.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <h2
                className="text-4xl font-bold"
                style={{
                  background: "linear-gradient(to right, #E0B83D, #4D8B31)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Sustainable.
                <br />
                High Quality.
                <br />
                Consistent.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {catalogProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative rounded-lg overflow-hidden h-full"
              >
                <div className="aspect-[3/4] md:aspect-[2/3] relative transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    className="object-cover"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end">
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
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-[#f9f9f2]">
        <div className="container-custom">
          <h2
            id="how-to-order"
            className="text-4xl font-bold text-center mb-16 text-black"
          >
            How to Order
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-[#f9f9f2] p-8 rounded-lg border border-gray-300 relative">
              <div className="flex items-center mb-6">
                <div
                  className="font-bold text-5xl mr-4"
                  style={{
                    background: "linear-gradient(to right, #4D8B31, #E0B83D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  1.
                </div>
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-black">
                    Contact Us & Get a Quote
                  </h3>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 text-black">
                    <Image
                      src="/icons/email.svg"
                      alt="Email icon"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-black">Reach out to us via</p>
                    <p className="font-medium text-lg">
                      <span className="text-green-700">Email</span> or{" "}
                      <span className="text-green-700">Whatsapp</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 text-black">
                    <Image
                      src="/icons/quote.svg"
                      alt="Quote icon"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-black">Receive a quote for</p>
                    <p className="font-medium text-lg">
                      your requested products
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f9f9f2] p-8 rounded-lg border border-gray-300 relative">
              <div className="flex items-center mb-6">
                <div
                  className="font-bold text-5xl mr-4"
                  style={{
                    background: "linear-gradient(to right, #4D8B31, #E0B83D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  2.
                </div>
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-black">
                    Invoice & Contract
                  </h3>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 text-black">
                    <Image
                      src="/icons/invoice.svg"
                      alt="Invoice icon"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-black">
                      After confirmation, we will
                    </p>

                    {/* Proforma Invoice as dropdown */}
                    <div className="group cursor-pointer">
                      <p className="font-medium text-lg flex items-center">
                        <span>send you the Proforma Invoice</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </p>
                      <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-40">
                        <div className="pt-2 pb-1 space-y-2">
                          <p className="text-sm text-gray-700 font-medium">
                            Optional Terms of Payment:
                          </p>
                          <div className="flex items-start">
                            <span className="text-green-700 text-sm font-medium mr-1">
                              •
                            </span>
                            <div>
                              <span className="text-green-700 text-sm font-medium">
                                (T/T)
                              </span>
                              <span className="text-sm text-gray-700">
                                {" "}
                                - According to negotiation agreement.
                              </span>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-700 text-sm font-medium mr-1">
                              •
                            </span>
                            <div>
                              <span className="text-green-700 text-sm font-medium">
                                (L/C)
                              </span>
                              <span className="text-sm text-gray-700">
                                {" "}
                                - 100% Irrevocable LC at sight.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 text-black">
                    <Image
                      src="/icons/signature.svg"
                      alt="Signature icon"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-black">Together we will</p>
                    <p className="font-medium text-lg">
                      finalize the sales contract
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f9f9f2] p-8 rounded-lg border border-gray-300 relative">
              <div className="flex items-center mb-6">
                <div
                  className="font-bold text-5xl mr-4"
                  style={{
                    background: "linear-gradient(to right, #4D8B31, #E0B83D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  3.
                </div>
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-black">
                    Production & Delivery
                  </h3>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 text-black">
                    <Image
                      src="/icons/production.svg"
                      alt="Production icon"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-black">
                      Proceed to production
                    </p>
                    <p className="font-medium text-lg">according to contract</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 text-black">
                    <Image
                      src="/icons/delivery.svg"
                      alt="Delivery icon"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-black">
                      Timely and safe delivery
                    </p>
                    <p className="font-medium text-lg">
                      of product to customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="py-3 px-8 rounded-md inline-block text-white text-lg font-medium"
              style={{
                background: "linear-gradient(to right, #E0B83D, #4D8B31)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
