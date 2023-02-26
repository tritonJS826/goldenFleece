import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AppContext} from "../../appContext";
import {LOGIN_ROUTE} from "../../utils/pathes";
import styles from "./logOut.module.scss";

export const LogOutBtn = () => {
  const {auth} = useContext(AppContext);
  return (
    <div className={styles.logOut}>
      <NavLink to={LOGIN_ROUTE}>
        <button className={styles.btn}
          onClick={() => auth.signOut()}
        >
          Logout
        </button>
      </NavLink>
    </div>);
};

