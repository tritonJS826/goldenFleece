import {PropsWithChildren, ReactElement} from "react";
import {SideMenu} from "src/component/sideMenu/SideMenu";
import styles from "src/logic/borderedAdminPage/borderedAdminPage.module.scss";

export const BorderedAdminPage = (props: PropsWithChildren):ReactElement => {
  return (
    <div className={styles.borderedAdminPage}>
      <SideMenu />
      {props.children}
    </div>
  );
};