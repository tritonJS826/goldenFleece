import {useDictionary} from "../../DictionaryContext/useDictionary";
import image from "../../../resources/sliderImages/Promo3.jpg";
import styles from "./AboutUsPromo.module.scss";


export const AboutUsPromo = () => {
  const {aboutUsPage} = useDictionary().dictionary;

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {aboutUsPage.title}
        </h1>
      </div>
    </div>
  );
};