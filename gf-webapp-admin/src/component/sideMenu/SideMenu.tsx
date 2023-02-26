import React, {useState} from "react";
import styles from "./sideMenu.module.scss";
import {LogOutBtn} from "../logOut/LogOut";
import {Link} from "react-router-dom";
import {AddRoomBtn} from "./addRoomBtn/AddRoomBtn";
import {AddRoomModal} from "./addRoomModal/AddRoomModal";
import {Registration} from "../registration/Registration";

/**SideMenu */
export const SideMenu = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => {
    setIsModalShown(!isModalShown);
    document.body.classList.toggle("notScrollable");
  };

  return (
    <div className={styles.sideMenu}>
      <Link className={styles.mainLink}
        to="/"
      >
        Main page
      </Link>
      <AddRoomBtn showModal={showModal} />
      <Registration />
      {isModalShown && <AddRoomModal showModal={showModal} />}
      <LogOutBtn />
    </div>
  );
};
