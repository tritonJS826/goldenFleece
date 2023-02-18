import React, {useState} from "react";
import {send} from "emailjs-com";
import styles from "./ContactsPage.module.scss";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {useTranslation} from "react-i18next";

export const ContactsPage = () => {
  const {t} = useTranslation();
  const [toSend, setToSend] = useState({
    to_name: "",
    message: "",
    phone: "",
    reply_to: "",
    check_in: "",
    check_out: "",
    room_number: "",
    adults_number: "",
    children_number: "",
  });

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(
      "service_q2x5wyb",
      "template_iq8l9cq",
      toSend,
      "Iz-maWBTKYHMeQmxB",
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    e.target.reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  return (
    <PageBorder>
      <div className={styles.wrap}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>
            {t("contactUs")}
          </h1>
          <div className={styles.contactsData}>
            <div className={styles.minititle}>
              {t("phone")}
            </div>
            <p className={styles.text}>
              +12346789
            </p>
            <div className={styles.minititle}>
              {t("mail")}
            </div>
            <p className={styles.text}>
              goldenFleece@gmain.com
            </p>
            <div className={styles.minititle}>
              {t("address")}
            </div>
            <p className={styles.text}>
              {t("street")}
              {" "}
              4,
            </p>
            <p className={styles.text}>
              {t("location")}
            </p>
          </div>
        </div>
        <form onSubmit={onSubmit}
          className={styles.form}
        >
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="text"
            >
              {t("yourName")}
            </label>
            <input type="text"
              className={styles.input}
              id="text"
              placeholder="Your name"
              name="to_name"
              value={toSend.to_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="email"
            >
              {t("yourEmail")}
            </label>
            <input type="email"
              className={styles.input}
              id="email"
              placeholder="Your email address"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="phone"
            >
              {t("yourPhone")}
            </label>
            <input type="text"
              className={styles.input}
              id="phone"
              placeholder="Your phone number"
              name="phone"
              value={toSend.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="message"
            >
              {t("message")}
            </label>
            <input type="text"
              className={styles.input}
              id="message"
              placeholder="Message"
              name="message"
              value={toSend.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit"
            className={styles.button}
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </PageBorder>
  );
};