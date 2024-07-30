"use client";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./styles.sass";
import "swiper/css";

const TestDrive = () => {
  // const testDriveItems = [
  //   {
  //     id: 1,
  //     image: "/simpleCar.png",
  //     title: "TEST-DRIVE",
  //     subtitle: "BMV - S+",
  //     text: " It is preferred to use the full-color logo only on white, brown, black, and grullo backgrounds. It ispreferred to use the full-color logo only on white, brown, black, and grullo backgrounds.It is preferred to use the full-color logo only on white, brown, black, and grullo backgrounds.",
  //     backgroundColor: "#6a8e2388",
  //     info1: "335",
  //     subinfo1: "mi",
  //     info2: "335",
  //     subinfo2: "mi",
  //     info3: "335",
  //     subinfo3: "mi",
  //   },
  //   {
  //     id: 2,
  //     image: "/simpleCar.png",
  //     title: "TEST-DRIVE",
  //     subtitle: "BMV - S+",
  //     text: "   It is preferred to use the full-color logo only on white, brown, black, and grullo backgrounds. It ispreferred to use the full-color logo only on white, brown, black, and grullo backgrounds.It is preferred to use the full-color logo only on white, brown, black, and grullo backgrounds.",
  //     backgroundColor: "#228b2226",
  //     info1: "335",
  //     subinfo1: "mi",
  //     info2: "335",
  //     subinfo2: "mi",
  //     info3: "335",
  //     subinfo3: "mi",
  //   },
  //   {
  //     id: 3,
  //     image: "/simpleCar.png",
  //     title: "TEST-DRIVE",
  //     subtitle: "BMV - S+",
  //     text: "It is preferred to use the full-color logo only on white, brown, black, and grullo backgrounds. It ispreferred to use the full-color logo only on white, brown, black, and grullo backgrounds.It is preferred to use the full-color logo only on white, brown, black, and grullo backgrounds.",
  //     backgroundColor: "#6b8e2338",
  //     info1: "335",
  //     subinfo1: "mi",
  //     info2: "335",
  //     subinfo2: "mi",
  //     info3: "335",
  //     subinfo3: "mi",
  //   },
  // ];
  return (
    <div
      className='testdrive'
      id='testDrive'
    >
      <div className='container'>
        <div className='textDriveCOntainer'>
          <div className='textDriveTitle'>
            <h3 className='title'>Участвуйте в тест-драйвах и найдите идеальный электротранспорт для себя!</h3>
            <h3 className='title'> В ближайшее время мы анонсируем всю информацию по модельному ряду.</h3>
            <h3 className='title'>
              Следите за новостями и подписывайтесь на наши социальные сети, чтобы узнать информацию первыми.
            </h3>
            <div className='footerLinksBox'>
              <div className='footerLinkIcon'>
                <FaTelegramPlane />
              </div>
              <div className='footerLinkIcon'>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className='testDriveBlock'>
    //   <Swiper
    //     spaceBetween={50}
    //     slidesPerView={1}
    //     speed={1000}
    //     loop={true}
    //     modules={[Navigation, Parallax]}
    //     navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
    //     parallax={true}
    //   >
    //     {testDriveItems.map((item, index) => (
    //       <SwiperSlide key={index}>
    //         <div
    //           className='testDriveContainer'
    //           style={{ background: `${item.backgroundColor}` }}
    //         >
    //           <div className='testDriveItems'>
    //             <div className='testDriveDescription'>
    //               <div className='descriptionImage'>
    //                 <img
    //                   src={item.image}
    //                   alt=''
    //                   className='img'
    //                   data-swiper-parallax='-300'
    //                 />
    //               </div>
    //               <div className='description'>
    //                 <div
    //                   className='descriptionTitle'
    //                   data-swiper-parallax='-500'
    //                 >
    //                   <h3 className='title'>{item.title}</h3>
    //                 </div>
    //                 <div
    //                   className='descriptionSubTitle'
    //                   data-swiper-parallax='-500'
    //                 >
    //                   <h6 className='subtitle'>{item.subtitle}</h6>
    //                 </div>
    //                 <div
    //                   className='descriptionText'
    //                   data-swiper-parallax='-500'
    //                 >
    //                   <p className='text'>{item.text}</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className='button-group'>
    //               <button className='arrow-right'>
    //                 <FaArrowLeft />
    //               </button>
    //               <button className='arrow-left'>
    //                 <FaArrowRight />
    //               </button>
    //             </div>
    //             <div className='testDriveInformation'>
    //               <div
    //                 className='information'
    //                 data-swiper-parallax='-500'
    //               >
    //                 <div className='number'>
    //                   {item.info1}
    //                   <span className='text'>{item.subinfo1}</span>
    //                 </div>
    //                 <span className='line'></span>
    //               </div>
    //               <div
    //                 className='information'
    //                 data-swiper-parallax='-500'
    //               >
    //                 <div className='number'>
    //                   {item.info2}
    //                   <span className='text'>{item.subinfo2}</span>
    //                 </div>
    //                 <span className='line'></span>
    //               </div>
    //               <div
    //                 className='information'
    //                 data-swiper-parallax='-500'
    //               >
    //                 <div className='number'>
    //                   {item.info3}
    //                   <span className='text'>{item.subinfo3}</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default TestDrive;
