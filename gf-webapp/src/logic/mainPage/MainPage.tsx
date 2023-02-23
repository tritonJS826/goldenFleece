import React from "react";
import {Main} from "../../component/main/Main";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {Spinner} from "../../component/spinner/Spinner";
import styles from "./Main.module.scss";

export const MainPage = () => {
  return (
    <div>
      <Spinner />
      <PageBorder>
        <Main />
      </PageBorder>
    </div>
  );
};
