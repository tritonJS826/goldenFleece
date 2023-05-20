import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import image from "src/resources/sliderImages/Promo3.jpg";
import styles from "src/logic/aboutUsPage/serviceBlock/ServiceBlock.module.scss";


export const ServiceBlock = () => {
  const {aboutUsPage} = useDictionary().dictionary;

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.promo}
        src={image}
        alt="Promo image"
      />
      <div className={styles.about}>
        <p className={styles.textLeft}>
          <span className={styles.span}>
            {aboutUsPage.subtitle}
          </span>
        </p>
        <h2 className={styles.title}>
          {aboutUsPage.gastronomy}
        </h2>
        <div className={styles.description}>
          {aboutUsPage.gastronomyDescription}
        </div>
        <h2 className={styles.title}>
          {aboutUsPage.experience}
        </h2>
        <div className={styles.description}>
          {aboutUsPage.experienceDescription}
        </div>
        <h2 className={styles.title}>
          {aboutUsPage.spa}
        </h2>
        <div className={styles.description}>
          {aboutUsPage.spaDescription}
        </div>
      </div>
    </div>
  );
};