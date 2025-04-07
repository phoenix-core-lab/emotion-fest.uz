import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NavBar = ({ burgerIsOpen }) => {
  const location = useRouter();
  const t = useTranslations("header");

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className="navContainer">
        <div className="navBox">
          <div className="links">
            <Link className="navLink" href="#unique">
              {t("button1")}
            </Link>
            <Link className="navLink" href="#showPage">
              {t("button2")}
            </Link>
            <Link className="navLink" href="#testDrive">
              {t("button3")}
            </Link>

            {/* <Link
              className='navLink'
              href='#program'
            >
              Программа
            </Link> */}

            <Link className="navLink" href="#activities">
              {t("button4")}
            </Link>
            <Link className="navLink" href="#openTalk">
              {t("button5")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
