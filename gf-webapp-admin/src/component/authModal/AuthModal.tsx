import React from "react";
import styles from "./authModal.module.scss";

export const AuthModal = () => {
  return (
    <div className={styles.authModal}>
      <form className={styles.form}>
        <h2 className={styles.title}>
          Authorization
        </h2>
        <ul className={styles.fields}>
          <li className={styles.field}>
            <label htmlFor="auth-login">
              Login
            </label>
            <input id="auth-login"
              type="text"
              placeholder="Enter your login"
            />
          </li>
          <li className={styles.field}>
            <label htmlFor="auth-pass">
              Password
            </label>
            <input id="auth-pass"
              type="text"
              placeholder="Enter your password"
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
