import Link from "next/link";
import React from "react";
import "./styles.sass";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footerContainer'>
          <div className='footerLogoInfo'>
            <div
              className='footerLogo'
              style={{ display: "flex" }}
            >
              <Link
                href='./'
                className='headerLogo'
              >
                <Image
                  src='/Logo.svg'
                  alt='emotionLogo'
                  className='logo'
                  width={50}
                  height={50}
                  style={{ width: "100%" }}
                />
              </Link>
            </div>
            {/* <div className='footerText'>
              <p className='text'>
                We offers a comprehensive suite of digital marketing services that cover all aspects of our online
                presence. From SEO and social media marketing to content creation and PPC advertising, they have the
                expertise and resources to handle our diverse marketing needs.
              </p>
            </div> */}
            <div className='footerLinksBox'>
              <Link
                href='https://t.me/emotionfestuz'
                className='footerLinkIcon'
              >
                <FaTelegramPlane />
              </Link>
              <Link
                href='https://www.instagram.com/emotionfestuz/?utm_source=ig_web_button_share_sheet'
                className='footerLinkIcon'
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className='footerNavInfo'>
            <div className='navTitle'>
              <h5 className='title'>Навигация</h5>
            </div>
            <div className='navBody'>
              <Link
                className='link'
                href='./'
              >
                E-motion фест
              </Link>
              <Link
                className='link'
                href='#testDrive'
              >
                Тест-драйв
              </Link>
              {/* <Link
                className='link'
                href='#program'
              >
                Программа
              </Link> */}
              <Link
                className='link'
                href='#activities'
              >
                Активности
              </Link>
              <Link
                className='link'
                href='#openTalk'
              >
                Open-talk
              </Link>
            </div>
          </div>
          <div className='footerContactsInfo'>
            <div className='contactsInfo'>
              <h5 className='title'>Контакты</h5>
            </div>
            <div className='contactsBox'>
              <div className='contactsBoxItem'>
                <div className='contactsIcon'>
                  <FaPhoneAlt />
                </div>
                <div className='contactstext'>
                  <p className='text'>(406) 555-0120</p>
                </div>
              </div>
              <div className='contactsBoxItem'>
                <div className='contactsIcon'>
                  <IoMail />
                </div>
                <Link
                  target='_blank'
                  href='https://yandex.uz/maps/org/15793535063/?from=api-maps&ll=69.266820%2C41.135318&mode=search&origin=jsapi_2_1_79&pt=37.8%2C55.8~37.6%2C55.847~37.738521%2C55.684758~37.715175%2C55.833436~37.529789%2C55.687086~37.614924%2C55.782392~37.656123%2C55.642063~37.487208%2C55.826479~37.435023%2C55.694843~37.814052%2C55.790139&sll=69.266820%2C41.135318&text=%D0%90%D0%BD%D1%85%D0%BE%D1%80&z=9'
                  className='contactstext'
                >
                  <p className='text'>Hey@boostim.com</p>
                </Link>
              </div>
              <div className='contactsBoxItem'>
                <div className='contactsIcon'>
                  <FaLocationDot />
                </div>
                <Link
                  target='_blank'
                  href='https://yandex.uz/maps/org/15793535063/?from=api-maps&ll=69.266820%2C41.135318&mode=search&origin=jsapi_2_1_79&pt=37.8%2C55.8~37.6%2C55.847~37.738521%2C55.684758~37.715175%2C55.833436~37.529789%2C55.687086~37.614924%2C55.782392~37.656123%2C55.642063~37.487208%2C55.826479~37.435023%2C55.694843~37.814052%2C55.790139&sll=69.266820%2C41.135318&text=%D0%90%D0%BD%D1%85%D0%BE%D1%80&z=9'
                  className='contactstext'
                >
                  <p className='text'>Узбекистан, Ташкент, Парк Анхор</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
