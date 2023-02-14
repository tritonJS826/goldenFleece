import React, {useState} from "react";
import {send} from "emailjs-com";
import styles from "./Form.module.scss";
import {useModalVisibilityContext} from "../context/Context";

export const Form = () => {
  const {modalActive, setModalActive} = useModalVisibilityContext();

  const [toSend, setToSend] = useState({
    // from_name: "",
    to_name: "",
    // message: "",
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
    setModalActive(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
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
            Email address
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
        <div className={styles.row}>
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="dateIn"
            >
              Date in
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
              Date out
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
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="rooms"
            >
              Room
            </label>
            <input type="text"
              className={styles.input2}
              id="rooms"
              name="room_number"
              value={toSend.room_number}
              onChange={handleChange}
            >
              {/* <option value="1">
                1
              </option>
              <option value="2">
                2
              </option>
              <option value="3">
                3
              </option>
              <option value="4">
                4
              </option> */}
            </input>
          </div>
          <div className={styles.row}>
            <div className={styles.formGoup}>
              <label className={styles.label}
                htmlFor="adults"
              >
                Adults
              </label>
              <input type="text"
                className={styles.input2}
                id="adults"
                name="adults_number"
                value={toSend.adults_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.formGoup}>
              <label className={styles.label}
                htmlFor="children"
              >
                Children
              </label>
              <input type="text"
                className={styles.input2}
                id="children"
                name="children_number"
                value={toSend.children_number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button type="submit"
          className={styles.button}
        >
          Book now
        </button>
      </form>
    </div>
  );
};