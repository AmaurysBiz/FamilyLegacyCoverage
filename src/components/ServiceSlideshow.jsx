// src/components/ServiceSlideshow.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceSlideshow.css";

const slides = [
  {
    image: "/assets/slide1.jpg",
    title: "Affordable Rates That Stay Low",
    description: "Customized insurance that fits your budget and never increases in price.",
  },
  {
    image: "/assets/slide2.jpg",
    title: "No Waiting Period. Fast Payouts.",
    description: "Coverage starts immediately. Claims paid within 48 hours.",
  },
  {
    image: "/assets/slide3.jpg",
    title: "Human Support When You Need It",
    description: "We’re here for you. Real people ready to assist you, always.",
  },
  {
    image: "/assets/slide4.jpg",
    title: "Build Wealth, Not Just Coverage",
    description: "Visit our blog to learn how to grow long-term financial health.",
    link: "/article-1",
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    ❮
  </div>
);

const ServiceSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide.link ? (
              <a href={slide.link}>
                <img src={slide.image} alt={slide.title} className="slide-image" />
              </a>
            ) : (
              <img src={slide.image} alt={slide.title} className="slide-image" />
            )}
            <div className="slide-content-overlay">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="scroll-indicator">⌄</div>
    </div>
  );
};

export default ServiceSlideshow;
