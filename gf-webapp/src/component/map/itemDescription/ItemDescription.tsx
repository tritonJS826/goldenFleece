import React, {useContext} from "react";
import styles from "./itemDescription.module.scss";
import {MapContext} from "../MapContext";
import {useTranslation} from "react-i18next";

export const ItemDescription = () => {
  const {t} = useTranslation();
  const {menuItem, setMenuItem} = useContext(MapContext);

  const closeHandler = () => {
    setMenuItem(null);
  };

  return menuItem && (
    <div onClick={closeHandler}
      className={styles.container}
    >
      <img className={styles.image}
        src={menuItem.imgUrl}
        alt="golden-fleece"
      />
      <h3 className={styles.title}>
        {menuItem.name}
      </h3>
      <p className={styles.description}>
        {t(menuItem.description)}
      </p>
    </div>
  );

};