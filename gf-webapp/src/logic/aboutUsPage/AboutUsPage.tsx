import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {AboutUsPromo} from "src/logic/aboutUsPage/aboutUsPromo/AboutUsPromo";
import {ServiceBlock} from "src/logic/aboutUsPage/serviceBlock/ServiceBlock";
import styles from "src/logic/aboutUsPage/AboutUsPage.module.scss";


export const AboutUsPage = () => {
  const {aboutUsPage} = useDictionary().dictionary;

  return (
    <PageBorder>
      <AboutUsPromo />
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          {aboutUsPage.description}
        </h3>
      </div>
      <ServiceBlock />
    </PageBorder>
  );
};