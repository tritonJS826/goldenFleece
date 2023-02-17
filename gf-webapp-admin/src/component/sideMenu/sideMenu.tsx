import * as React from "react";
import styles from "./sideMenu.module.scss";
import {LogOutBtn} from "../../component/logOut/LogOut";
import {NavLink} from "react-router-dom";
import {ROOMS_PAGE_ROUTE} from "../../utils/consts";

export const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <LogOutBtn />
      <NavLink to={ROOMS_PAGE_ROUTE}>
        Rooms
      </NavLink>
    </div>
  );
};