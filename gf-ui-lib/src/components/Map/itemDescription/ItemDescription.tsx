import {useContext} from "react";
import {MapContext} from "../MapContext";
import styles from "./ItemDescription.module.scss";

/**
 * Component with the selected in the menu location description
 */
export const ItemDescription = () => {
  const {menuItem, setMenuItem} = useContext(MapContext);

  /**
   * Closes the component with the description of the selected location
   */
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