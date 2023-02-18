import * as React from "react";
import styles from "./sideMenu.module.scss";
import {LogOutBtn} from "../../component/logOut/LogOut";

export const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <LogOutBtn />
    </div>
  );
};