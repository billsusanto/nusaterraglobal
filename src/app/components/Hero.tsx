import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/images/home_background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-24">
        <div className="max-w-2xl ml-0 py-12 px-6">
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
            Connecting Indonesia&apos;s Commodities to the world
          </h1>
          <p className="text-lg text-white mb-10 max-w-lg">
            We are a trusted Indonesian commodity trading company, delivering
            high-quality, sustainable products to global markets.
          </p>
          <Link
            href="/products"
            className="inline-block bg-transparent text-white font-medium py-3 px-8 relative"
            style={{
              borderLeft: "1px solid #4D8B31",
              borderRight: "1px solid #E0B83D",
              backgroundImage:
                "linear-gradient(90deg, #4D8B31, #E0B83D), linear-gradient(90deg, #4D8B31, #E0B83D)",
              backgroundSize: "100% 1px",
              backgroundPosition: "0 0, 0 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
