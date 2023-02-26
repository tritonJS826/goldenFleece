import React, {FormEvent, useContext, useState} from "react";
import styles from "./authModal.module.scss";
import {AppContext} from "../../appContext";
import {signInWithEmailAndPassword} from "firebase/auth";

export const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {auth} = useContext(AppContext);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .catch(err => {
        if (err.code === "auth/user-not-found") {
          setError(true);
        }
      });
  };

  const emailHandler = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
    setError(false);
  };

  const passwordHandler = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
    setError(false);
  };

  return (
    <div className={styles.authModal}>
      <form onSubmit={handleSubmit}
        className={styles.form}
      >
        {error && (<div className={styles.error}>
          Enter correct email and password
        </div>)}
        <h2 className={styles.title}>
          Authorization
        </h2>
        <ul className={styles.fields}>
          <li className={styles.field}>
            <label htmlFor="auth-email">
              Login
            </label>
            <input id="auth-email"
              onChange={(e) => emailHandler(e)}
              name="email"
              type="email"
              value={email}
              placeholder="Enter admin@ya.ru"
              required
            />
          </li>
          <li className={styles.field}>
            <label htmlFor="auth-pass">
              Password
            </label>
            <input id="auth-pass"
              onChange={(e) => passwordHandler(e)}
              name="password"
              type="text"
              value={password}
              placeholder="Enter 123456"
              required
            />
          </li>
        </ul>
        <input className={styles.signIn}
          type="submit"
          value={"Sign in"}
        />
      </form>
      <div className={styles.overlay} />
    </div>
  );
};
