"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PartnersSlider = () => {
  const t = useTranslations("intro");
  const PartnersSlideImages = [
    {
      id: 1,
      img: "/imas.png",
      alt: "after",
      title: t("partner2.title"),
      link: t("partner2.titlesilka"),
    },
    {
      id: 2,
      img: "/alem.svg",
      alt: "after",
      title: t("partner1.title"),
      link: t("partner1.titlesilka"),
    },
    {
      id: 3,
      img: "/Bluescreen.png",
      alt: "after",
      title: t("partner3.title"),
      link: t("partner3.titlesilka"),
    },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 0 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={6000}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="imagesBlock">
              <Image src={item.img} alt={item.alt} width={100} height={100} />
              <p style={{ whiteSpace: "pre-line" }} className="text">
                {item.title}
                <br />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
