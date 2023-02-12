import React from "react";
import {Main} from "../../component/main/Main";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import styles from "./Main.module.scss";

export const MainPage = () => {
  return (
    <div className="App">
      <div className={styles.stub}>
        <div className={styles.title}>
          Golden Fleece
        </div>
        <div className={styles.spinner}>
          <div className={styles.loading} />
        </div>
      </div>
      <PageBorder>
        <Main />
      </PageBorder>
    </div>
  );
};
