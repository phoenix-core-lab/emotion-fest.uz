import React from "react";
import Button from "../UI/button";
import "./styles.sass";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Activities = () => {
  const t = useTranslations("activities");
  return (
    <section className="astivities" id="activities">
      <div className="container">
        <div className="activitiesContainer">
          <div className="activeBlockTop">
            <div className="topTitle">
              <h3 className="title">{t("title")}</h3>
            </div>
            <div className="topBody">
              <div className="bodyText">
                <p className="text">{t("titleText")}</p>
              </div>
              <Link href="#contacts">
                <Button>{t("button")}</Button>
              </Link>
            </div>
          </div>
          <div className="activitiesItems">
            <div className="item">
              <span className="dot"></span>
              <div className="itemTitle">
                <h4 className="title">{t("activitiesCard1.title")}</h4>
              </div>
              <div className="itemText">
                <p className="text">{t("activitiesCard1.titleText")}</p>
              </div>
            </div>

            <div className="item">
              <span className="dot"></span>
              <div className="itemTitle">
                <h4 className="title">{t("activitiesCard2.title")}</h4>
              </div>
              <div className="itemText">
                <p className="text">{t("activitiesCard2.titleText")}</p>
              </div>
            </div>

            <div className="item">
              <span className="dot"></span>
              <div className="itemTitle">
                <h4 className="title">{t("activitiesCard3.title")}</h4>
              </div>
              <div className="itemText">
                <p className="text">{t("activitiesCard3.titleText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
