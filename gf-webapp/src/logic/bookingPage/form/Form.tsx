import React from "react";
import styles from "./Form.module.scss";
import {useModalVisibilityContext} from "../context/Context";

export const Form = () => {
  const {modalActive, setModalActive} = useModalVisibilityContext();

  const send = (event: React.MouseEvent): void => {
    event.preventDefault();
    setModalActive(false);
  };


  return (
    <div>
      <form className={styles.form}
        action=""
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
            required
          />
        </div>
        <div className={styles.formGoup}>
          <label className={styles.label}
            htmlFor="text"
          >
            Your wishes
          </label>
          <input type="email"
            className={styles.input}
            id="text"
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
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.formGoup}>
            <label className={styles.label}
              htmlFor="rooms"
            >
              Rooms
            </label>
            <select className={styles.input}
              name="rooms"
              id="rooms"
            >
              <option value="1">
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
              </option>
            </select>
          </div>
          <div className={styles.row}>
            <div className={styles.formGoup}>
              <label className={styles.label}
                htmlFor="adults"
              >
                Adults
              </label>
              <select className={styles.input}
                name="adults"
                id="adults"
              >
                <option value="1">
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
                </option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.formGoup}>
              <label className={styles.label}
                htmlFor="children"
              >
                Children
              </label>
              <select className={styles.input}
                name="children"
                id="children"
              >
                <option className={styles.options}
                  value="1"
                >
                  1
                </option>
                <option className={styles.options}
                  value="2"
                >
                  2
                </option>
                <option className={styles.options}
                  value="3"
                >
                  3
                </option>
                <option className={styles.options}
                  value="4"
                >
                  4
                </option>
              </select>
            </div>
          </div>
        </div>
        <button className={styles.button}
          onClick={send}
        >
          Book now
        </button>
      </form>
    </div>
  );
};