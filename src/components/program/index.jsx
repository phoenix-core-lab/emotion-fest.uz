import React from "react";
import Button from "../UI/button";
import "./styles.sass";
import { useTranslations } from "next-intl";

const ProgramBLock = () => {
  const t = useTranslations("program");
  return (
    <div className="programBlock" id="openTalk">
      <div className="programBlockCard">
        <div className="cardItem">
          <div className="imgeContainer">
            <img src="/open.jpg" alt="welcomeFirstImage" className="img" />
          </div>
        </div>
        <div className="cardItem">
          <div className="itemContent">
            <div className="itemTitle">
              <h3 className="title">Open talk</h3>
            </div>
            <div className="itemSubtitle">
              <p className="subtitle">{t("titleText1")}</p>
              <p className="subtitle">{t("titleText2")}</p>
            </div>
            <a href="#contacts">
              <Button>{t("button")}</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramBLock;
