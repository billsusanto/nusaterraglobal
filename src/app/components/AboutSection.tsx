import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#f9f9f2]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left column - Image with overlay text */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/about_section_sustainability_picture.jpg"
              alt="Sustainability and Quality Image"
              width={600}
              height={450}
              className="w-full h-auto rounded-lg"
              unoptimized={true}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Sustainability and Quality in mind
              </h3>
              <p className="text-white text-base max-w-md">
                We are a trusted Indonesian commodity trading company,
                delivering high-quality, sustainable products to global markets.
              </p>
            </div>
          </div>

          {/* Right column - About information */}
          <div className="pt-4">
            {/* Centered heading */}
            <h2 className="text-4xl font-bold mb-8 text-center">
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
            </h2>

            {/* Center-aligned paragraph */}
            <p className="text-gray-700 mb-14 text-lg text-center mx-auto max-w-xl">
              Nusaterra Global Resources brings you the finest Indonesian
              commodities with reliable supply, consistent quality, and
              transparent communication you can trust.
            </p>

            {/* Top horizontal line (thicker) */}
            <div className="w-full h-[2px] bg-gray-400 mb-8"></div>

            {/* Centered stats followed by centered button */}
            <div className="flex flex-col items-center mb-8">
              {/* Stats centered and grouped closer */}
              <div className="flex gap-16 mb-8">
                <div className="text-center">
                  <h3
                    className="text-5xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    20+
                  </h3>
                  <p className="text-gray-700 text-lg">Clients</p>
                </div>
                <div className="text-center">
                  <h3
                    className="text-5xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    5+
                  </h3>
                  <p className="text-gray-700 text-lg">Years</p>
                </div>
                <div className="text-center">
                  <h3
                    className="text-5xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(to right, #4D8B31, #E0B83D, #F2C94C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    6+
                  </h3>
                  <p className="text-gray-700 text-lg">Countries</p>
                </div>
              </div>
            </div>

            {/* Bottom horizontal line (thicker) */}
            <div className="w-full h-[2px] bg-gray-400 mb-12"></div>

            {/* Centered Learn More button */}
            <div className="flex justify-center">
              <Link
                href="/about"
                className="py-3 px-8 rounded-md inline-block text-white text-lg font-medium"
                style={{
                  background:
                    "linear-gradient(to right, #F2C94C, #E0B83D, #4D8B31)",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
