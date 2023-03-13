import React, {PropsWithChildren, ReactElement} from "react";
import {SideMenu} from "../../component/sideMenu/SideMenu";
import styles from "./borderedAdminPage.module.scss";

export const BorderedAdminPage = (props: PropsWithChildren):ReactElement => {
  return (
    <div className={styles.borderedAdminPage}>
      <SideMenu />
      {props.children}
    </div>
  );
};