import {createUserWithEmailAndPassword} from "firebase/auth";
import React, {FormEvent, useContext, useState} from "react";
import {AppContext} from "../../appContext";
import styles from "./registration.module.scss";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {auth} = useContext(AppContext);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
    setIsRegisterSuccess(true);
    setTimeout(() => {
      setIsRegisterSuccess(false);
    }, 3000);
  };

  const emailHandler = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };

  const passwordHandler = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  return (
    <form onSubmit={handleSubmit}
      className={styles.form}
    >
      <h2 className={styles.title}>
        Register new user
      </h2>
      <ul className={styles.fields}>
        <li className={styles.field}>
          <label htmlFor="reg-email">
            Email
          </label>
          <input id="reg-email"
            onChange={(e) => emailHandler(e)}
            name="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            required
          />
        </li>
        <li className={styles.field}>
          <label htmlFor="reg-pass">
            Password
          </label>
          <input id="reg-pass"
            onChange={(e) => passwordHandler(e)}
            name="password"
            type="text"
            value={password}
            placeholder="Enter your password"
            required
          />
        </li>
      </ul>
      <input className={styles.registrationBtn}
        type="submit"
        value={"Register"}
      />
      {isRegisterSuccess && <span className={styles.success}>
        User added
      </span>}
    </form>
  );
};