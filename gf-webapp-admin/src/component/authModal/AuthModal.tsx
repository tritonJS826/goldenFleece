import React, {FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from "./authModal.module.scss";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../../firebase";
import {setUser} from "../../store/slices/userSlice";


export const AuthModal = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, login, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
        }));
        navigate("/");
      }).catch(err => console.log(err));


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
            <label htmlFor="auth-login">
              Login
            </label>
            <input id="auth-login"
              onChange={(e) => setLogin(e.target.value)}
              name="login"
              type="text"
              value={login}
              placeholder="Enter your login"
            />
          </li>
          <li className={styles.field}>
            <label htmlFor="auth-pass">
              Password
            </label>
            <input id="auth-pass"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="text"
              value={password}
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
