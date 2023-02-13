import React, {FormEvent, useContext, useState} from "react";
import styles from "./authModal.module.scss";
import {AppContext} from "../../appContext";
import {signInWithEmailAndPassword} from "firebase/auth";

export const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {auth} = useContext(AppContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className={styles.authModal}>
      <form onSubmit={handleSubmit}
        className={styles.form}
      >
        <h2 className={styles.title}>
          Authorization
        </h2>
        <ul className={styles.fields}>
          <li className={styles.field}>
            <label htmlFor="auth-email">
              Login
            </label>
            <input id="auth-email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              required
            />
          </li>
          <li className={styles.field}>
            <label htmlFor="auth-pass">
              Password
            </label>
            <input id="auth-pass"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              value={password}
              placeholder="Enter your password"
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
