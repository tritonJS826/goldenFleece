import * as React from "react";
import styles from "./sideMenu.module.scss";
import {LogOutBtn} from "../../component/logOut/LogOut";
import {Link} from "react-router-dom";
import {AddRoomBtn} from "./addRoomBtn/AddRoomBtn";

export const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <LogOutBtn />
      <Link to="/">
        Rooms
      </Link>
      <AddRoomBtn />
    </div>
  );
};