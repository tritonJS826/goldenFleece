import React, {useContext} from "react";
import styles from "./itemDescription.module.scss";
import {MapContext} from "../MapContext";
import {useCurrentLanguageContext} from "../../../context/Context";

export const ItemDescription = () => {
  const {language} = useCurrentLanguageContext();
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
        {language.component.map.goldenFleeceDescription}
      </p>
    </div>
  );

};