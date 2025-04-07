import React from "react";
import Button from "../UI/button";
import "./styles.sass";
import { useTranslations } from "next-intl";

const WelcomeToFest = () => {
  const t = useTranslations("welcome");
  return (
    <div className="welcomeToFest">
      <div className="welcomeContainer">
        <div className="welcomeTitle">
          <h2 className="title">{t("title")}</h2>
        </div>
        <div className="welcomeCard">
          <div className="cardItem">
            <div className="imgeContainer">
              <img src="/car3.png" alt="welcomeFirstImage" className="img" />
            </div>
          </div>
          <div className="itemNumber">
            <h3 className="number">01</h3>
          </div>
          <div className="cardItem">
            <div className="itemContent">
              <div className="itemTitle">
                <h3 className="title">{t("card.title")}</h3>
              </div>
              <div className="itemSubtitle">
                <p className="subtitle">{t("card.titleText")}</p>
                <p className="subtitle">{t("card.title2")}</p>
              </div>
              <a href="#contacts">
                <Button>{t("card.button")}</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="welcomeCard">
          <div className="cardItem white">
            <div className="itemContent">
              <div className="itemTitle">
                <h3 className="title">{t("card2.title")}</h3>
              </div>
              <div className="itemSubtitle">
                {/* <p className='subtitle'>Провести веселые, полезные и интересные выходные с семьей или друзьями?</p> */}
                <p className="subtitle">{t("card2.titleText")}</p>
              </div>
              <a href="#contacts">
                <Button>{t("card2.button")}</Button>
              </a>
            </div>
          </div>
          <div className="itemNumber">
            <h3 className="black">02</h3>
          </div>
          <div className="cardItem">
            <div className="imgeContainer">
              <img src="/family2.png" alt="introImage" className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToFest;
