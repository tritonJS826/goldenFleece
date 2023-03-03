import React, {useState} from "react";
import {send} from "emailjs-com";
import styles from "./Form.module.scss";
import {useModalVisibilityContext, useCurrentLanguageContext} from "../../../context/Context";

type RoomProps = {
  roomNumber: string;
}

export const Form = (props: RoomProps) => {
  const {language} = useCurrentLanguageContext();
  const {isModalActive, setIsModalActive} = useModalVisibilityContext();

  const [toSend, setToSend] = useState({
    // from_name: "",
    to_name: "",
    // message: "",
    reply_to: "",
    check_in: "",
    check_out: "",
    room_number: "",
    adults_amount: "",
    children_amount: "",
  });

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(
      "service_q2x5wyb",
      "template_p5netbs",
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
    setIsModalActive(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  const handleChangeRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({...toSend, [e.target.name]: props.roomNumber});
  };

  return (
    <div>
      <form onSubmit={onSubmit}
        className={styles.form}
      >
        <div className={styles.formGoup}>
          <label className={styles.label}
            htmlFor="email"
          >
            {language.bookingPage.form.email}
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
            htmlFor="text"
          >
            {language.bookingPage.form.name}
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
        <div className={styles.row}>
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="dateIn"
            >
              {language.bookingPage.form.dateIn}
            </label>
            <input type="date"
              className={styles.input2}
              id="dateIn"
              name="check_in"
              value={toSend.check_in}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="dateOut"
            >
              {language.bookingPage.form.dateOut}
            </label>
            <input type="date"
              className={styles.input2}
              id="dateOut"
              name="check_out"
              value={toSend.check_out}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}
              htmlFor="rooms"
            >
              {language.bookingPage.form.roomNumber}
            </label>
            <input type="text"
              className={styles.input}
              id="rooms"
              name="room_number"
              placeholder={props.roomNumber}
              value={toSend.room_number}
              onChange={handleChangeRoom}
              required
            />
          </div>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}
                htmlFor="adults"
              >
                {language.bookingPage.form.adultsAmount}
              </label>
              <input type="text"
                className={styles.input}
                id="adults"
                name="adults_amount"
                value={toSend.adults_amount}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}
                htmlFor="children"
              >
                {language.bookingPage.form.childrenAmount}
              </label>
              <input type="text"
                className={styles.input}
                id="children"
                name="children_amount"
                value={toSend.children_amount}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit"
          className={styles.button}
        >
          {language.bookingPage.form.buttonText}
        </button>
      </form>
    </div>
  );
};