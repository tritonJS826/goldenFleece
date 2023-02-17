import React, {useState} from "react";
import {send} from "emailjs-com";
import styles from "./ContactsPage.module.scss";
import {PageBorder} from "../../component/pageBorder/PageBorder";

export const ContactsPage = () => {
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
            Contact us
          </h1>
          <div className={styles.contactsData}>
            <div className={styles.minititle}>
              Phone
            </div>
            <p className={styles.text}>
              +12346789
            </p>
            <div className={styles.minititle}>
              Email
            </div>
            <p className={styles.text}>
              goldenFleece@gmain.com
            </p>
            <div className={styles.minititle}>
              Address
            </div>
            <p className={styles.text}>
              Tabukashvili 4,
            </p>
            <p className={styles.text}>
              Kutaisi, Georgia
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
              Your name
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
              Your email address
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
              Your phone number
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
              Message
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
            Submit
          </button>
        </form>
      </div>
    </PageBorder>
  );
};