"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamic imports to avoid SSR issues with Leaflet
const ContactForm = dynamic(() => import("./components/ContactForm"), {
  ssr: true,
});
const ContactMap = dynamic(() => import("./components/ContactMap"), {
  ssr: false,
});

export default function ClientContactPage() {
  return (
    <main className="bg-[#f9f9f2] min-h-screen">
      <section
        className="pt-32 md:pt-40 pb-10 md:pb-16 px-4 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249, 249, 242, 0.9), rgba(249, 249, 242, 0.9)), url('/images/sustainability.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom max-w-[1800px] w-[95%] mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            <span
              style={{
                background: "linear-gradient(to right, #4D8B31, #E0B83D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              CONTACT
            </span>{" "}
            US
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Map Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full">
                <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
                <div className="h-[320px] md:h-[480px] relative rounded-lg overflow-hidden">
                  <ContactMap />
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Our Office</h3>
                  <p className="text-gray-700">Jakarta, Indonesia</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-gray-700">
                      nusaterraglobalresources@gmail.com
                    </p>
                    <p className="text-gray-700">
                      justin.siswanto@nusaterraglobal.com
                    </p>
                    <p className="text-gray-700">
                      aryanto.halim@nusaterraglobal.com
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium mb-2">Call Us</h3>
                    <p className="text-gray-700">+62 811 1180 9379</p>
                    <p className="text-gray-700">+62 819 5262 2922</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
