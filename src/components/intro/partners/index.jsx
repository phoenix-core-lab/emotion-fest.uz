"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "./styles.sass";
import "swiper/css";
import Image from "next/image";

const PartnersSlider = () => {
  const PartnersSlideImages = [
    { id: 1, img: "/imas.png", alt: "after", title: "iMAS GROUP — международная IT компания в области мониторинга СМИ и социальных сетей. На протяжении 11 лет мы предоставляем услуги по сбору, анализу и интерпретации медиа-данных, помогая нашим клиентам принимать стратегически важные решения. Наша команда объединяет передовые технологии и экспертный подход, чтобы предложить качественную аналитику и поддержку в управлении репутацией. Среди клиентов — крупные бренды и государственные структуры, которые доверяют нам обработку информации и создание медиа-отчетов. Мы стремимся стать надежным партнером для всех, кто ценит точные данные и инновационные решения в мире медиа. https://imas.uz/" },
    { id: 2, img: "/alem.svg", alt: "after", title: "Информационный партнёр Всё самое интересное из мира IT-индустрии и технологий https://aleminform.kz/" },
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
              <Image
                src={item.img}
                alt={item.alt}
                width={100} 
                height={100} 
              />
              <p className="text">
                {
                  item.title ? item.title : ""
                }
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
