import React from "react";
import "./styles.sass";
import { useTranslations } from "next-intl";
const SectionRobots = () => {
  const t = useTranslations("robots");
  return (
    <section className="sectionRobots">
      <div className="container">
        <div className="robotsImage">
          <div className="robotsText">
            <div className="robotsTextContainer">
              <h4 className="title">{t("title")}</h4>
              <p className="text">{t("titleText1")}</p>
              <p className="text textMain">{t("titleText2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRobots;
