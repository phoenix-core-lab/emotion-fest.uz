import React from "react";
import "./styles.sass";
import { useTranslations } from "next-intl";
const Festival = () => {
  const t = useTranslations("suprise");
  return (
    <section className="festival">
      <div className="container">
        <div className="festivalImage">
          {/* <img
            src='/manOnAction.jpeg'
            alt='festivalimage'
            className='img'
          /> */}
          <div className="festivalText">
            <div className="festivalTextContainer">
              <h4 className="title">{t("title")}</h4>
              <p style={{ whiteSpace: "pre-line" }} className="text">
                {t("titleText1")}
              </p>
              <p className="text">{t("titleText2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival;
