import React from "react";
import Image from "next/image";

function AboutHero() {
  return (
    <section className="pt-40 pb-6 px-4 md:px-0">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-start">
        <div className="w-full h-[320px] bg-gray-300 rounded-lg" />
        <div>
          <h2 className="text-5xl font-bold mb-6">Who are we?</h2>
          <p className="text-xl mb-6 leading-normal">
            <span className="font-bold">Nusaterra Global Resources</span> is an
            Indonesia-based commodity trading company specializing in premium,
            export-oriented products.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Our Commitment:</h3>
          <p className="text-xl mb-6 leading-normal">
            <span className="font-bold">Reliable Sourcing</span> means we
            connect Indonesia’s natural resources with global partners. Through{" "}
            <span className="font-bold">Strict Quality Control</span>, we ensure
            every product meets international standards. We also prioritize{" "}
            <span className="font-bold">Sustainable Practices</span> in every
            step.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutProvide() {
  return (
    <section className="py-6 px-4 md:px-0">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-5xl font-bold mb-6">What do we provide?</h2>
          <p className="text-xl mb-6 leading-normal">
            We trade and export a wide range of Indonesian commodities, focusing
            on quality and international standards.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Core Services:</h3>
          <ul className="list-disc list-inside space-y-2 text-xl">
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
        <div className="w-full h-[320px] bg-gray-300 rounded-lg" />
      </div>
    </section>
  );
}

function OurTeam() {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Justin Siswanto */}
          <div className="w-96 h-[420px] relative rounded-xl overflow-hidden flex flex-col justify-end">
            <Image
              src="/team/justin_siswanto.jpeg"
              alt="Justin Siswanto"
              fill
              className="object-cover"
              sizes="384px"
              priority
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-6 z-20">
              <div className="text-white text-2xl font-bold leading-tight">
                Justin
                <br />
                Siswanto
              </div>
              <div className="text-white text-xl font-normal opacity-90 mb-1">
                Founder
              </div>
            </div>
          </div>
          {/* Aryanto Halim */}
          <div className="w-96 h-[420px] relative rounded-xl overflow-hidden flex flex-col justify-end">
            <Image
              src="/team/aryanto_halim.jpeg"
              alt="Aryanto Halim"
              fill
              className="object-cover"
              sizes="384px"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-6 z-20">
              <div className="text-white text-2xl font-bold leading-tight">
                Aryanto
                <br />
                Halim
              </div>
              <div className="text-white text-xl font-normal opacity-90 mb-1">
                Co-Founder
              </div>
            </div>
          </div>
          {/* Martin Siswanto */}
          <div className="w-96 h-[420px] relative rounded-xl overflow-hidden flex flex-col justify-end">
            <Image
              src="/team/martin_siswanto.jpeg"
              alt="Martin Siswanto"
              fill
              className="object-cover"
              sizes="384px"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-6 z-20">
              <div className="text-white text-2xl font-bold leading-tight">
                Martin
                <br />
                Siswanto
              </div>
              <div className="text-white text-xl font-normal opacity-90 mb-1">
                Commisioner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurGallery() {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-64 bg-gray-300 rounded-lg" />
          <div className="h-64 md:col-span-1 md:h-64 lg:col-span-1 lg:h-64 xl:col-span-1 xl:h-64 bg-gray-300 rounded-lg" />
          <div className="h-64 bg-gray-300 rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#f9f9f2] min-h-screen">
      <AboutHero />
      <AboutProvide />
      <OurTeam />
      <OurGallery />
    </main>
  );
}
