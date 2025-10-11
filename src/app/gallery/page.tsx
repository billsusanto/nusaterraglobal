"use client";

import React, { useState } from "react";
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
const bbqShishaImages = [
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_1.jpg",
    alt: "BBQ & Shisha Charcoal 1",
  },
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_2.jpg",
    alt: "BBQ & Shisha Charcoal 2",
  },
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_3.jpg",
    alt: "BBQ & Shisha Charcoal 3",
  },
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_4.jpg",
    alt: "BBQ & Shisha Charcoal 4",
  },
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_5.jpg",
    alt: "BBQ & Shisha Charcoal 5",
  },
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_6.jpg",
    alt: "BBQ & Shisha Charcoal 6",
  },
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_7.jpg",
    alt: "BBQ & Shisha Charcoal 7",
  },
  {
    src: "/gallery/bbq_shisha/gallery_bbq_shisha_watermark_8.jpg",
    alt: "BBQ & Shisha Charcoal 8",
  },
];

const charcoalProductionImages = [
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_1.jpg",
    alt: "Charcoal Production 1",
  },
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_2.jpg",
    alt: "Charcoal Production 2",
  },
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_3.jpg",
    alt: "Charcoal Production 3",
  },
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_4.jpg",
    alt: "Charcoal Production 4",
  },
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_5.jpg",
    alt: "Charcoal Production 5",
  },
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_6.jpg",
    alt: "Charcoal Production 6",
  },
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_7.jpg",
    alt: "Charcoal Production 7",
  },
  {
    src: "/gallery/charcoal_production/gallery_charcoal_production_watermark_8.jpg",
    alt: "Charcoal Production 8",
  },
];

const charcoalProductionFacilityImages = [
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_1.jpg",
    alt: "Charcoal Production Facility 1",
  },
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_2.jpg",
    alt: "Charcoal Production Facility 2",
  },
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_3.jpg",
    alt: "Charcoal Production Facility 3",
  },
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_4.jpg",
    alt: "Charcoal Production Facility 4",
  },
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_5.jpg",
    alt: "Charcoal Production Facility 5",
  },
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_6.jpg",
    alt: "Charcoal Production Facility 6",
  },
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_7.jpg",
    alt: "Charcoal Production Facility 7",
  },
  {
    src: "/gallery/charcoal_production_facility/gallery_charcoal_production_facility_8.jpg",
    alt: "Charcoal Production Facility 8",
  },
];

const naturalZeoliteImages = [
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_1.jpg",
    alt: "Natural Zeolite 1",
  },
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_2.jpg",
    alt: "Natural Zeolite 2",
  },
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_3.jpg",
    alt: "Natural Zeolite 3",
  },
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_4.jpg",
    alt: "Natural Zeolite 4",
  },
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_5.jpg",
    alt: "Natural Zeolite 5",
  },
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_6.jpg",
    alt: "Natural Zeolite 6",
  },
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_7.jpg",
    alt: "Natural Zeolite 7",
  },
  {
    src: "/gallery/natural_zeolite/gallery_natural_zeolite_watermark_8.jpg",
    alt: "Natural Zeolite 8",
  },
];

const zeoliteProductionImages = [
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_1.jpg",
    alt: "Zeolite Production 1",
  },
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_2.jpg",
    alt: "Zeolite Production 2",
  },
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_3.jpg",
    alt: "Zeolite Production 3",
  },
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_4.jpg",
    alt: "Zeolite Production 4",
  },
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_5.jpg",
    alt: "Zeolite Production 5",
  },
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_6.jpg",
    alt: "Zeolite Production 6",
  },
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_7.jpg",
    alt: "Zeolite Production 7",
  },
  {
    src: "/gallery/natural_zeolite_production/gallery_natural_zeolite_production_8.jpg",
    alt: "Zeolite Production 8",
  },
];

// Define types for our image data
interface GalleryImage {
  src: string;
  alt: string;
}

// Gallery categories
type GalleryCategory = {
  id: string;
  label: string;
  images: GalleryImage[];
};

// Define gallery categories based directly on folder structure
const galleryCategories: GalleryCategory[] = [
  { id: "bbq_shisha", label: "BBQ & Shisha", images: bbqShishaImages },
  {
    id: "natural_zeolite",
    label: "Natural Zeolite",
    images: naturalZeoliteImages,
  },
  {
    id: "charcoal_production",
    label: "Charcoal Production",
    images: charcoalProductionImages,
  },
  {
    id: "charcoal_production_facility",
    label: "Production Facility",
    images: charcoalProductionFacilityImages,
  },
  {
    id: "natural_zeolite_production",
    label: "Zeolite Production",
    images: zeoliteProductionImages,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("bbq_shisha");

  // Get images for active category
  const activeImages =
    galleryCategories.find((cat) => cat.id === activeCategory)?.images || [];

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    autoplay: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <main className="bg-[#f9f9f2] min-h-screen">
      <section className="pt-32 md:pt-40 pb-10 md:pb-16 px-4">
        <div className="container-custom max-w-[1800px] w-[95%] mx-auto">
          {/* Gallery Title */}
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

          {/* Category Tabs */}
          <div className="gallery-tabs">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                className={`gallery-tab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Carousel */}
          <div className="gallery-carousel relative">
            <Slider {...settings}>
              {activeImages.map((image, index) => (
                <div key={index} className="px-2">
                  <div
                    className="gallery-image-container relative shadow-md"
                    style={{ aspectRatio: "1.5/1.5" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized={true}
                      priority={index < 3} // Load first few images with priority
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
}
