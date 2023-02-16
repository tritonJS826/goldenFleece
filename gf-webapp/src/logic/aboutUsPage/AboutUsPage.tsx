import React from "react";
import styles from "./AboutUsPage.module.scss";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {AboutUsPromo} from "./aboutUsPromo/AboutUsPromo";
import {ServiceBlock} from "./serviceBlock/ServiceBlock";

export const AboutUsPage = () => {
  return (
    <PageBorder>
      <AboutUsPromo />
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          Some places are so good to stay in, you don’t want to generate a rush on them. The Grand Forest hotel in Metsovo is one of them.
        </h3>
      </div>
      <ServiceBlock />
    </PageBorder>
  );
};