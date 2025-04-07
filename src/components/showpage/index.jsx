import React, { useState } from "react";
import Button from "../UI/button";
import "./styles.sass";
import ModalBecomeAMember from "../modalBecomeAMember";
import { Modal } from "antd";
import { useTranslations } from "next-intl";

const ShowPage = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const t = useTranslations("showblock");
  return (
    <div className="showBlock" id="showPage">
      <div className="container programBlockCard">
        <div className="cardItem">
          <div className="itemContent">
            <div className="itemTitle">
              <h3 className="title">{t("title")}</h3>
            </div>
            <div className="itemSubtitle">
              <p className="subtitle">{t("titleText1")}</p>
              <p className="subtitle">{t("titleText2")}</p>
            </div>
            <Button onClick={() => setModal2Open(true)}>{t("button")}</Button>
            <Modal
              // title='Vertically centered modal dialog'
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
              className="modalBecomeAMember"
            >
              <ModalBecomeAMember />
            </Modal>
          </div>
        </div>
        <div className="cardItem">
          <div className="imgeContainer">
            <img src="/open.jpg" alt="welcomeFirstImage" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
