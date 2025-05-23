"use Client";
import React, { useState } from "react";
import Button from "../UI/button";
import Link from "next/link";
import Image from "next/image";
import "./styles.sass";
import PartnersSlider from "./partners";
import { Modal } from "antd";
import ModalBecomePartner from "../modalBecomePartner";
import ModalBecomeAMember from "../modalBecomeAMember";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const IntroBlock = () => {
  const t = useTranslations("intro");
  const [modal2Open, setModal2Open] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="into" id="emotion">
      <div className="container">
        <div className="introContainer">
          <div className="introMainInfo">
            <div className="introInfo">
              <div className="introTitle">
                <h1 style={{ whiteSpace: "pre-line" }} className="title">{t("title")}</h1>
              </div>
              <div className="introSubtitle">
                <p className="subtitle">{t("titleText")}</p>
              </div>
              <div className="introButtonsGroup">
                <div className="introLink">
                  <Link
                    className="link"
                    target="_blank"
                    href="https://yandex.uz/maps/org/15793535063/?from=api-maps&ll=69.266820%2C41.135318&mode=search&origin=jsapi_2_1_79&pt=37.8%2C55.8~37.6%2C55.847~37.738521%2C55.684758~37.715175%2C55.833436~37.529789%2C55.687086~37.614924%2C55.782392~37.656123%2C55.642063~37.487208%2C55.826479~37.435023%2C55.694843~37.814052%2C55.790139&sll=69.266820%2C41.135318&text=%D0%90%D0%BD%D1%85%D0%BE%D1%80&z=9"
                  >
                    {t("title1")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="infoImage">
              <Image
                src="/introImage.svg"
                alt="introImage"
                className="img"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="introBottomInfo">
            <div className="partners">
              <div className="partenersContainer">
                <div className="partnersTitle">
                  <h6 className="title">{t("partner.title")}</h6>
                </div>
                <div className="partnersSlider">
                  <PartnersSlider />
                </div>
              </div>
              <div className="introBtnsGroup">
                <Button onClick={() => setModal2Open(true)}>
                  {t("partner.button1")}
                </Button>
                <Button onClick={() => setModalOpen(true)}>
                  {t("partner.button2")}
                </Button>
                <Modal
                  // title='Vertically centered modal dialog'
                  centered
                  open={modal2Open}
                  onOk={() => setModal2Open(false)}
                  onCancel={() => setModal2Open(false)}
                  className="modalBecomeAMember"
                >
                  <ModalBecomePartner />
                </Modal>
                <Modal
                  // title='Vertically centered modal dialog'
                  centered
                  open={modalOpen}
                  onOk={() => setModalOpen(false)}
                  onCancel={() => setModalOpen(false)}
                  className="modalBecomeAMember"
                >
                  <ModalBecomeAMember />
                </Modal>
              </div>
            </div>
            <div className="winnerBlock">
              <div className="winnerTitle">
                <h2 className="title">{t("winner.title")}</h2>
              </div>
              <div className="winnerSubtitle">
                <p className="subTitle">
                  {t("winner.title2")}
                  <Link href="#contacts" className="registartionBtn">
                    {t("winner.title2green")}
                  </Link>
                </p>

                <div className="socials">
                  <a
                    href="https://t.me/EmotionFestival"
                    target="_blank"
                    className="social"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="https://www.instagram.com/emotionfestival/"
                    target="_blank"
                    className="social"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              {/* <Link href='#contacts'>
                <Button>Стать гостем фестиваля</Button>
              </Link> */}
              {/* <span className='line'></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
