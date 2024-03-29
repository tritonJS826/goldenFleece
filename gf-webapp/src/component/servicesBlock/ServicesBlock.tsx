import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {NavLink} from "react-router-dom";
import room1 from "src/resources/rooms/1.jpg";
import styles from "src/component/servicesBlock/ServicesBlock.module.scss";


export const ServicesBlock = () => {
  const {servicesBlock} = useDictionary().dictionary;

  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <NavLink
          className={styles.link}
          to="/gastronomy"
        >
          <img
            className={styles.serviceImage}
            src={room1}
            alt="Gastronomy"
          />
          <h3 className={styles.titleService}>
            {servicesBlock.gastronomy}
          </h3>
          <span className={styles.spanLink}>
            {servicesBlock.buttonText}
          </span>
        </NavLink>
      </div>
      <div className={styles.service}>
        <NavLink
          className={styles.link}
          to="/expierences"
        >
          <img
            className={styles.serviceImage}
            src={room1}
            alt="Experiences"
          />
          <h3 className={styles.titleService}>
            {servicesBlock.experiences}
          </h3>
          <span className={styles.spanLink}>
            {servicesBlock.buttonText}
          </span>
        </NavLink>
      </div>
      <div className={styles.service}>
        <NavLink
          className={styles.link}
          to="/spa"
        >
          <img
            className={styles.serviceImage}
            src={room1}
            alt="Spa"
          />
          <h3 className={styles.titleService}>
            {servicesBlock.spa}
          </h3>
          <span className={styles.spanLink}>
            {servicesBlock.buttonText}
          </span>
        </NavLink>
      </div>
    </div>
  );
};