import React, {useRef, useState} from "react";
import {useDictionary} from "../DictionaryContext/useDictionary";
import {send} from "emailjs-com";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import styles from "./ContactsPage.module.scss";
import {Button} from "gf-ui-lib/components/Button/Button";


export const ContactsPage = () => {
  const {contactsPage, askAdminForm} = useDictionary().dictionary;

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

  const formToSubmit = useRef<HTMLFormElement>(null);

  return (
    <PageBorder>
      <div className={styles.wrap}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>
            {contactsPage.title}
          </h1>
          <div className={styles.contactsData}>
            <div className={styles.minititle}>
              {contactsPage.phone}
            </div>
            <p className={styles.text}>
              +12346789
            </p>
            <div className={styles.minititle}>
              {contactsPage.email}
            </div>
            <p className={styles.text}>
              goldenFleece@gmain.com
            </p>
            <div className={styles.minititle}>
              {contactsPage.address}
            </div>
            <p className={styles.text}>
              {contactsPage.street}
              ,
            </p>
            <p className={styles.text}>
              {contactsPage.location}
            </p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          ref={formToSubmit}
          className={styles.form}
        >
          <div className={styles.formGoup}>
            <label
              className={styles.label}
              htmlFor="text"
            >
              {askAdminForm.name}
            </label>
            <input
              type="text"
              className={styles.input}
              id="text"
              placeholder={askAdminForm.name}
              name="to_name"
              value={toSend.to_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGoup}>
            <label
              className={styles.label}
              htmlFor="email"
            >
              {askAdminForm.email}
            </label>
            <input
              type="email"
              className={styles.input}
              id="email"
              placeholder={askAdminForm.email}
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGoup}>
            <label
              className={styles.label}
              htmlFor="phone"
            >
              {askAdminForm.phone}
            </label>
            <input
              type="text"
              className={styles.input}
              id="phone"
              placeholder={askAdminForm.phone}
              name="phone"
              value={toSend.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGoup}>
            <label
              className={styles.label}
              htmlFor="message"
            >
              {askAdminForm.message}
            </label>
            <input
              type="text"
              className={styles.input}
              id="message"
              placeholder={askAdminForm.message}
              name="message"
              value={toSend.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            onClick={() => formToSubmit.current?.submit()}
            value={askAdminForm.buttonText}
          />
        </form>
      </div>
    </PageBorder>
  );
};