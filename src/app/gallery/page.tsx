"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define types for our custom arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Custom arrow components for the carousel
function CustomNextArrow(props: ArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="custom-arrow absolute right-2 top-1/2 transform -translate-y-1/2 z-20 transition-transform hover:scale-110 active:scale-95"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight className="h-8 w-8 text-black" strokeWidth={3} />
    </div>
  );
}

function CustomPrevArrow(props: ArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="custom-arrow absolute left-2 top-1/2 transform -translate-y-1/2 z-20 transition-transform hover:scale-110 active:scale-95"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-8 w-8 text-black" strokeWidth={3} />
    </div>
  );
}

// Image categorization
const charcoalImages = [
  {
    src: "/gallery/Coconut Shell Charcoal Briquette (Front Image of our gallery).jpeg",
    alt: "Coconut Shell Charcoal Briquette",
  },
  {
    src: "/gallery/Charcoal (Front image of our Gallery).jpeg",
    alt: "Charcoal Production",
  },
  {
    src: "/gallery/Charcoal (Gallery).jpeg",
    alt: "Charcoal Products",
  },
  {
    src: "/gallery/Charcoal (Gallery)(1).jpeg",
    alt: "Charcoal Sample",
  },
  {
    src: "/gallery/Charcoal (Gallery)(2).jpeg",
    alt: "Charcoal Quality",
  },
  {
    src: "/gallery/Charcoal (Gallery)(3).jpeg",
    alt: "Charcoal Processing",
  },
  {
    src: "/gallery/Charcoal (Gallery)(4).jpeg",
    alt: "Charcoal Production Line",
  },
];

const pillowCharcoalImages = [
  {
    src: "/gallery/Pillow Charcoal (Gallery).JPG",
    alt: "Pillow Charcoal",
  },
  {
    src: "/gallery/Pillow Charcoal (Gallery)(1).JPG",
    alt: "Pillow Charcoal Sample 1",
  },
  {
    src: "/gallery/Pillow Charcoal (Gallery)(2).JPG",
    alt: "Pillow Charcoal Sample 2",
  },
  {
    src: "/gallery/PIllow Charcoal (Gallery)(3).JPG",
    alt: "Pillow Charcoal Sample 3",
  },
  {
    src: "/gallery/Pillow Charcoal (Gallery)(4).JPG",
    alt: "Pillow Charcoal Sample 4",
  },
  {
    src: "/gallery/Pillow Charcoal (Gallery)(5).JPG",
    alt: "Pillow Charcoal Sample 5",
  },
];

const zeoliteImages = [
  {
    src: "/gallery/Copy of Zeolite Granular Form (Front image of our Gallery and Product Image 1).jpeg",
    alt: "Zeolite Granular Form",
  },
  {
    src: "/gallery/Zeolite Granular Form (Gallery).jpeg",
    alt: "Zeolite Granular Sample",
  },
  {
    src: "/gallery/Zeolite Granular Form (Gallery & Product Image 3).jpeg",
    alt: "Zeolite Granular Product",
  },
  {
    src: "/gallery/Zeolite Granular Form 4 (Gallery).jpeg",
    alt: "Zeolite Granular Form 4",
  },
  {
    src: "/gallery/Zeolite Powder (Gallery).jpeg",
    alt: "Zeolite Powder",
  },
  {
    src: "/gallery/Zeolite Raw Form (Gallery).jpeg",
    alt: "Zeolite Raw Form",
  },
];

const productionImages = [
  {
    src: "/gallery/Charcoal Machine (Gallery).jpeg",
    alt: "Charcoal Production Machine",
  },
  {
    src: "/gallery/Charcoal Molding (Gallery).jpeg",
    alt: "Charcoal Molding Process",
  },
  {
    src: "/gallery/Charcoal Molding (Gallery)(1).jpeg",
    alt: "Charcoal Molding Equipment",
  },
  {
    src: "/gallery/Charcoal Production (Gallery).jpeg",
    alt: "Charcoal Production Facility",
  },
  {
    src: "/gallery/Charcoal Raw Material (Gallery).jpeg",
    alt: "Charcoal Raw Materials",
  },
  {
    src: "/gallery/Zeolite Machine (Gallery).jpeg",
    alt: "Zeolite Processing Machine",
  },
];

// Define types for our image data
interface GalleryImage {
  src: string;
  alt: string;
}

// Define props for the GalleryCarousel component
interface GalleryCarouselProps {
  images: GalleryImage[];
  title: string;
}

function GalleryCarousel({ images, title }: GalleryCarouselProps) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false, // Disabled auto-scrolling
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">{title}</h2>
      <div className="gallery-carousel relative">
        <Slider {...settings}>
          {images.map((image: GalleryImage, index: number) => (
            <div key={index} className="px-2">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="bg-[#f9f9f2] min-h-screen">
      <section className="pt-32 md:pt-40 pb-10 md:pb-16 px-4">
        <div className="container-custom">
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
              Our
            </span>{" "}
            Gallery
          </h1>

          <GalleryCarousel images={charcoalImages} title="Charcoal Products" />

          <GalleryCarousel
            images={pillowCharcoalImages}
            title="Pillow Charcoal"
          />

          <GalleryCarousel images={zeoliteImages} title="Zeolite Products" />

          <GalleryCarousel
            images={productionImages}
            title="Production Facilities"
          />
        </div>
      </section>
    </main>
  );
}