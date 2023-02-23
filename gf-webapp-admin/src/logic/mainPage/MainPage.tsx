import React from "react";
import {Rooms} from "../../component/rooms/Rooms";
import {SideMenu} from "../../component/sideMenu/sideMenu";
import styles from "./mainPage.module.scss";

export const MainPage = () => {

  return (
    <div className={styles.mainPage}>
      <SideMenu />
      <Rooms />
    </div>
  );
};
