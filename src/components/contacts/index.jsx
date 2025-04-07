"use client";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import Button from "../UI/button";
import "./styles.sass";
import { useTranslations } from "next-intl";

const Contacts = () => {
  const t = useTranslations("registionblock");
  const t2 = useTranslations("registion");
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    city: "",
    mail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const processedPhone = formData.phone.replace(/\D/g, "");
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        phone: processedPhone,
      }),
    });
    if (response.status === 200 || response.status === 201) {
      toast.success(t2("toast.success"));
    } else {
      toast.error(t2("toast.error"));
    }
    setFormData({
      fullName: "",
      age: "",
      phone: "",
      city: "",
      mail: "",
    });
  };
  return (
    <section className="sectionContacts" id="contacts">
      <div className="container">
        <div className="contactsContainer">
          {/* <div className="blurContainer">
            <h3>
              {t("title")}
              <br />
              {t("title2")}
            </h3>
          </div> */}
          <div className="contactsInfo">
            <div className="contactsTitle">
              <h3 className="title">{t("guest.title")}</h3>
            </div>
            <div className="contactsText">
              <p className="text">{t("guest.titletext1")}</p>
              <p className="text">{t("guest.titletext2")}</p>
            </div>
            <div className="contactsText">
              <p className="text">{t("guest.titletext3")}</p>
              <p className="text">{t("guest.titletext4")}</p>
            </div>
          </div>
          <form className="contactsForm" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                className="input"
                name="fullName"
                placeholder={t2("title1")}
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                className="input"
                placeholder={t2("title6")}
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                className="input"
                placeholder={t2("title3")}
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="email"
                className="input"
                placeholder="E-mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <IMaskInput
                name="phone"
                className="input"
                placeholder={t2("title5")}
                mask={Mask}
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                maxLength={19}
                required
              />
            </div>
            <Button>{t2("button")}</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
