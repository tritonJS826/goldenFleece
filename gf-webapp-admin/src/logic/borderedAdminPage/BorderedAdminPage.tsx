import React, {PropsWithChildren, ReactElement, ReactNode} from "react";
import {SideMenu} from "../../component/sideMenu/SideMenu";
import styles from "./borderedAdminPage.module.scss";

interface PageBorderProps {
  children: ReactNode
}

export const BorderedAdminPage = (props: PropsWithChildren<PageBorderProps>):ReactElement => {
  return (
    <div className={styles.borderedAdminPage}>
      <SideMenu />
      {props.children}
    </div>
  );
};