import React, {useContext} from "react";
import {useCurrentDictionaryContext} from "../../../context/Context";
import {MapContext} from "../MapContext";
import styles from "./itemDescription.module.scss";


export const ItemDescription = () => {
  const {dictionary} = useCurrentDictionaryContext();
  const {menuItem, setMenuItem} = useContext(MapContext);

  const closeHandler = () => {
    setMenuItem(null);
  };

  return menuItem && (
    <div
      onClick={closeHandler}
      className={styles.container}
    >
      <img
        className={styles.image}
        src={menuItem.imgUrl}
        alt="golden-fleece"
      />
      <h3 className={styles.title}>
        {menuItem.name}
      </h3>
      <p className={styles.description}>
        {menuItem.description}
      </p>
    </div>
  );

};