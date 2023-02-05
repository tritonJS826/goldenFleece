import React, {useContext} from "react";
import styles from "./itemDescription.module.scss";
import {MapContext} from "../MapContext";

export const ItemDescription = () => {
  const {menuItem} = useContext(MapContext);

  return menuItem && (
    <div className={styles.container}>
      <img className={styles.image}
        src={require(`../../../resources/map/${menuItem.img}`)}
        alt="golden-fleece"
      />
      <h3>
        {menuItem.name}
      </h3>
      <p className={styles.description}>
        {menuItem.description}
      </p>
    </div>
  );

};