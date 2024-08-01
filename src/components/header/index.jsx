"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";
import Button from "../UI/button";
import { FaLocationDot } from "react-icons/fa6";

import "./styles.sass";
import { Modal } from "antd";
import ModalBecomeAMember from "../modalBecomeAMember";

const Header = ({ bgBlack }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  const [modal2Open, setModal2Open] = useState(false);

  return (
    <header className='header  bgFirst'>
      <div className=' container'>
        <div className='headerItems'>
          <div className='headerItem'>
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
              />
            </Link>
          </div>
          <div className='headerItem itemFullWidth'>
            <span
              className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
              onClick={(e) => toggleMenu(false)}
            ></span>
            <NavBar burgerIsOpen={burgerIsOpen} />
          </div>
          <div className='headerButton'>
            <Link
              className='licotionLink'
              target='_blank'
              href='https://yandex.uz/maps/org/15793535063/?from=api-maps&ll=69.266820%2C41.135318&mode=search&origin=jsapi_2_1_79&pt=37.8%2C55.8~37.6%2C55.847~37.738521%2C55.684758~37.715175%2C55.833436~37.529789%2C55.687086~37.614924%2C55.782392~37.656123%2C55.642063~37.487208%2C55.826479~37.435023%2C55.694843~37.814052%2C55.790139&sll=69.266820%2C41.135318&text=%D0%90%D0%BD%D1%85%D0%BE%D1%80&z=9'
            >
              Локация
            </Link>
            <Link
              href='https://yandex.uz/maps/org/15793535063/?from=api-maps&ll=69.266820%2C41.135318&mode=search&origin=jsapi_2_1_79&pt=37.8%2C55.8~37.6%2C55.847~37.738521%2C55.684758~37.715175%2C55.833436~37.529789%2C55.687086~37.614924%2C55.782392~37.656123%2C55.642063~37.487208%2C55.826479~37.435023%2C55.694843~37.814052%2C55.790139&sll=69.266820%2C41.135318&text=%D0%90%D0%BD%D1%85%D0%BE%D1%80&z=9'
              className='location'
              target='_blank'
            >
              <FaLocationDot />
            </Link>
          </div>
          <div
            className='burgerBtnContainer'
            onClick={() => toggleMenu(!burgerIsOpen)}
          >
            <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
