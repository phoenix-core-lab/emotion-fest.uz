"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "./styles.sass";
import "swiper/css";

const PartnersSlider = () => {
  const PartnersSlideImages = [
    { id: 1, img: "/base.png", alt: "base" },
    { id: 2, img: "/phoenix.png", alt: "after", title: "Phoenix Core Lab." },
    { id: 3, img: "/maze.png", alt: "maze" },
    { id: 4, img: "/base.png", alt: "base" },
    { id: 5, img: "/phoenix.png", alt: "after", title: "Phoenix Core Lab." },
    { id: 6, img: "/maze.png", alt: "maze" },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 0 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={3000}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          577: {
            slidesPerView: 3,
          },
          911: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="imagesBlock">
              {/* <img
                src={item.img}
                alt={item.alt}
                className='img'
              /> */}
              <p className="text">
                {
                // item.title ? item.title : ""  
                }
                Ваш логотип
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default PartnersSlider;
