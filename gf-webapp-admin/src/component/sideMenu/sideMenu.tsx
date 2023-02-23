import * as React from "react";
import styles from "./sideMenu.module.scss";
import {LogOutBtn} from "../../component/logOut/LogOut";
import {Link} from "react-router-dom";
import {AddRoom} from "./addRoom/AddRoom";

export const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <LogOutBtn />
      <Link to="/">
        Rooms
      </Link>
      <AddRoom />
    </div>
  );
};