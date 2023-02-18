import React from "react";
import styles from "./AboutUsPage.module.scss";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {AboutUsPromo} from "./aboutUsPromo/AboutUsPromo";
import {ServiceBlock} from "./serviceBlock/ServiceBlock";
import {useTranslation} from "react-i18next";

export const AboutUsPage = () => {
  const {t} = useTranslation();
  return (
    <PageBorder>
      <AboutUsPromo />
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          {t("aboutUsTitle")}
        </h3>
      </div>
      <ServiceBlock />
    </PageBorder>
  );
};