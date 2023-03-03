import React from "react";
import styles from "./AboutUsPage.module.scss";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {AboutUsPromo} from "./aboutUsPromo/AboutUsPromo";
import {ServiceBlock} from "./serviceBlock/ServiceBlock";
import {useCurrentLanguageContext} from "../../context/Context";


export const AboutUsPage = () => {
  const {language} = useCurrentLanguageContext();

  return (
    <PageBorder>
      <AboutUsPromo />
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          {language.aboutUsPage.description}
        </h3>
      </div>
      <ServiceBlock />
    </PageBorder>
  );
};