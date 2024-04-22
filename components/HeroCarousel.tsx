"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smart watch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

function HeroCarousel() {
  return (
    <div className="relative">
      <Carousel
        className="hero-carousel"
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2500}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image.imgUrl}
            alt={image.alt}
            width={480}
            height={480}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="target arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-50"
      />
    </div>
  );
}

export default HeroCarousel;
