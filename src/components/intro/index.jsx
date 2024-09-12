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

const IntroBlock = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      className='into'
      id='emotion'
    >
      <div className='container'>
        <div className='introContainer'>
          <div className='introMainInfo'>
            <div className='introInfo'>
              <div className='introTitle'>
                <h1 className='title'>
                  Фестиваль
                  <br />
                  Электромобилей
                  <br />И новых технологий
                </h1>
              </div>
              <div className='introSubtitle'>
                <p className='subtitle'>Станьте участником E-motion и внесите свой вклад в чистое будущее!</p>
              </div>
              <div className='introButtonsGroup'>
                <div className='introLink'>
                  <Link
                    className='link'
                    target='_blank'
                    href='https://yandex.uz/maps/org/15793535063/?from=api-maps&ll=69.266820%2C41.135318&mode=search&origin=jsapi_2_1_79&pt=37.8%2C55.8~37.6%2C55.847~37.738521%2C55.684758~37.715175%2C55.833436~37.529789%2C55.687086~37.614924%2C55.782392~37.656123%2C55.642063~37.487208%2C55.826479~37.435023%2C55.694843~37.814052%2C55.790139&sll=69.266820%2C41.135318&text=%D0%90%D0%BD%D1%85%D0%BE%D1%80&z=9'
                  >
                    Ждем вас 5-6 апреля в парке Анхор
                  </Link>
                </div>
              </div>
            </div>
            <div className='infoImage'>
              <Image
                src='/introImage.svg'
                alt='introImage'
                className='img'
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className='introBottomInfo'>
            <div className='partners'>
              <div className='partenersContainer'>
                <div className='partnersTitle'>
                  <h6 className='title'>Наши партнеры: </h6>
                </div>
                <div className='partnersSlider'>
                  <PartnersSlider />
                </div>
              </div>
              <div className='introBtnsGroup'>
                <Button onClick={() => setModal2Open(true)}>Cтать партнером</Button>
                <Button onClick={() => setModalOpen(true)}>Стать участником выставки</Button>
                <Modal
                  // title='Vertically centered modal dialog'
                  centered
                  open={modal2Open}
                  onOk={() => setModal2Open(false)}
                  onCancel={() => setModal2Open(false)}
                  className='modalBecomeAMember'
                >
                  <ModalBecomePartner />
                </Modal>
                <Modal
                  // title='Vertically centered modal dialog'
                  centered
                  open={modalOpen}
                  onOk={() => setModalOpen(false)}
                  onCancel={() => setModalOpen(false)}
                  className='modalBecomeAMember'
                >
                  <ModalBecomeAMember />
                </Modal>
              </div>
            </div>
            <div className='winnerBlock'>
              <div className='winnerTitle'>
                <h2 className='title'>100+ Призов</h2>
              </div>
              <div className='winnerSubtitle'>
                <p className='subTitle'>
                  <Link
                    href='#contacts'
                    className='registartionBtn'
                  >
                    Зарегистрируйся
                  </Link>
                  , стань гостем и получи шанс выиграть Iphone 15 Pro Max
                </p>
              </div>
              <Link href='#contacts'>
                <Button>Стать гостем фестиваля</Button>
              </Link>
              {/* <span className='line'></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
