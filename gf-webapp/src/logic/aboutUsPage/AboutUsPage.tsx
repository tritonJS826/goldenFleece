import React from "react";
import {useCurrentDictionaryContext} from "../../context/Context";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {AboutUsPromo} from "./aboutUsPromo/AboutUsPromo";
import {ServiceBlock} from "./serviceBlock/ServiceBlock";
import styles from "./AboutUsPage.module.scss";


export const AboutUsPage = () => {
  const {dictionary} = useCurrentDictionaryContext();

  return (
    <PageBorder>
      <AboutUsPromo />
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          {dictionary.aboutUsPage.description}
        </h3>
      </div>
      <ServiceBlock />
    </PageBorder>
  );
};