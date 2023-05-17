import {useContext} from "react";
import {MapContext} from "gf-ui-lib/src/components/Map/MapContext";
import styles from "gf-ui-lib/src/components/Map/itemDescription/ItemDescription.module.scss";


export const ItemDescription = () => {
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