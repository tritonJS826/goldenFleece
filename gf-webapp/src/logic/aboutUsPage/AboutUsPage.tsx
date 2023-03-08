import React from "react";
import {useDictionaryContext} from "../../context/Context";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {AboutUsPromo} from "./aboutUsPromo/AboutUsPromo";
import {ServiceBlock} from "./serviceBlock/ServiceBlock";
import styles from "./AboutUsPage.module.scss";


export const AboutUsPage = () => {
  const {dictionary} = useDictionaryContext();
  const glossary = dictionary.aboutUsPage;

  return (
    <PageBorder>
      <AboutUsPromo />
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          {glossary.description}
        </h3>
      </div>
      <ServiceBlock />
    </PageBorder>
  );
};