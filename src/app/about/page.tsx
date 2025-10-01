import React from "react";
import Image from "next/image";

function AboutHero() {
  return (
    <section className="pt-32 md:pt-40 pb-10 md:pb-12 px-4">
      <div className="container-custom grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="w-full h-[220px] md:h-[320px] relative rounded-lg overflow-hidden">
          <Image
            src="/about/who_are_we.jpg"
            alt="Nusaterra Global Resources"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Who are we?
          </h2>
          <p className="text-base md:text-xl mb-4 md:mb-6 leading-normal">
            <span className="font-bold">Nusaterra Global Resources</span> is an
            Indonesia-based commodity trading company specializing in premium,
            export-oriented products.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Our Commitment:
          </h3>
          <p className="text-base md:text-xl mb-4 md:mb-6 leading-normal">
            <span className="font-bold">Reliable Sourcing</span> means we
            connect Indonesia&apos;s natural resources with global partners.
            Through <span className="font-bold">Strict Quality Control</span>,
            we ensure every product meets international standards. We also
            prioritize <span className="font-bold">Sustainable Practices</span>{" "}
            in every step.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutProvide() {
  return (
    <section className="py-10 md:py-12 px-4">
      <div className="container-custom grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="w-full h-[220px] md:h-[320px] relative rounded-lg overflow-hidden">
          <Image
            src="/about/what_do_we_provide.jpg"
            alt="What we provide"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            What do we provide?
          </h2>
          <p className="text-base md:text-xl mb-4 md:mb-6 leading-normal">
            We trade and export a wide range of Indonesian commodities, focusing
            on quality and international standards.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Core Services:
          </h3>
          <ul className="list-disc list-inside space-y-1 md:space-y-2 text-base md:text-xl">
            <li>
              <span className="font-bold">Sourcing & Procurement:</span>{" "}
              Partnering with trusted, certified suppliers.
            </li>
            <li>
              <span className="font-bold">Quality Assurance:</span> Strict
              process control and export-ready products.
            </li>
            <li>
              <span className="font-bold">Global Distribution:</span> Connecting
              Indonesian products with international buyers.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function OurVision() {
  return (
    <section className="py-10 md:py-12 px-4">
      <div className="container-custom">
        {/* Mobile layout (image first, then text) */}
        <div className="block md:hidden mb-6">
          <div className="w-full h-[220px] relative rounded-lg overflow-hidden">
            <Image
              src="/about/our_vision.jpg"
              alt="Our Vision"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Desktop layout (grid with text on left, image on right) */}
        <div className="md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-7">
              Our Vision
            </h2>
            <p className="text-base md:text-xl mb-6 leading-relaxed">
              Our vision is to be your trusted partner for sourcing premium
              Indonesian commodities globally. We connect exceptional products
              with buyers who value sustainability, quality, and reliability.
            </p>
            <p className="text-base md:text-xl mb-4 leading-relaxed">
              We deliver consistent quality through rigorous standards and
              maintain clear communication from initial inquiry to final
              delivery.
            </p>
            <p className="text-base md:text-xl leading-relaxed text-gray-700">
              This commitment has made Nusaterra a trusted name for businesses
              seeking sustainable Indonesian commodities.
            </p>
          </div>

          {/* Image for desktop only (hidden on mobile) */}
          <div className="hidden md:block w-full h-[320px] relative rounded-lg overflow-hidden">
            <Image
              src="/about/our_vision.jpg"
              alt="Our Vision"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OurTeam() {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Management Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {/* Justin Siswanto */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] h-[320px] sm:h-[380px] md:h-[420px] relative rounded-xl overflow-hidden flex flex-col justify-end">
            <Image
              src="/team/justin_siswanto.jpeg"
              alt="Justin Siswanto"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
              priority
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-4 sm:p-5 md:p-6 z-20">
              <div className="text-white text-xl sm:text-xl md:text-2xl font-bold leading-tight">
                Justin
                <br />
                Siswanto
              </div>
              <div className="text-white text-base sm:text-lg md:text-xl font-normal opacity-90 mb-1">
                Founder
              </div>
            </div>
          </div>
          {/* Aryanto Halim */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] h-[320px] sm:h-[380px] md:h-[420px] relative rounded-xl overflow-hidden flex flex-col justify-end">
            <Image
              src="/team/aryanto_halim.jpeg"
              alt="Aryanto Halim"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-4 sm:p-5 md:p-6 z-20">
              <div className="text-white text-xl sm:text-xl md:text-2xl font-bold leading-tight">
                Aryanto
                <br />
                Halim
              </div>
              <div className="text-white text-base sm:text-lg md:text-xl font-normal opacity-90 mb-1">
                Co-Founder
              </div>
            </div>
          </div>
          {/* Martin Siswanto */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] h-[320px] sm:h-[380px] md:h-[420px] relative rounded-xl overflow-hidden flex flex-col justify-end sm:col-span-2 md:col-span-1 sm:mt-4 md:mt-0">
            <Image
              src="/team/martin_siswanto.jpeg"
              alt="Martin Siswanto"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-4 sm:p-5 md:p-6 z-20">
              <div className="text-white text-xl sm:text-xl md:text-2xl font-bold leading-tight">
                Martin
                <br />
                Siswanto
              </div>
              <div className="text-white text-base sm:text-lg md:text-xl font-normal opacity-90 mb-1">
                Commisioner
              </div>
            </div>
          </div>
        </div>

        {/* Founders' Message */}
        <div className="mt-16 md:mt-20 px-4 py-8 md:py-12 rounded-lg">
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto">
            <span className="font-semibold text-xl sm:text-2xl md:text-3xl">
              <span className="mb-2 sm:mb-4 font-medium">
                Thank you for trusting
              </span>{" "}
              Nusaterra Global Resources
            </span>
            <span className="block mt-2 sm:mt-4 leading-relaxed">
              As founders, we value every customer relationship as a partnership
              grounded in trust, reliability, and dedication. Each shipment
              reflects Indonesia&apos;s natural excellence and our
              responsibility to deliver it with integrity
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#f9f9f2] min-h-screen pb-4 md:pb-0">
      <AboutHero />
      <OurVision />
      <AboutProvide />
      <OurTeam />
    </main>
  );
}
