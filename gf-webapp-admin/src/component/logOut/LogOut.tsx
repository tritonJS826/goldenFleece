import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AppContext} from "../../appContext";
import {LOGIN_ROUTE} from "../../utils/consts";
import styles from "./logOut.module.scss";

export const LogOutBtn = () => {
  const {auth} = useContext(AppContext);
  return (
    <div>
      <NavLink to={LOGIN_ROUTE}>
        <button className={styles.btn}
          onClick={() => auth.signOut()}
        >
          LogOut
        </button>
      </NavLink>
    </div>);
};

