import {Rooms} from "../../component/rooms/Rooms";
import {BorderedAdminPage} from "../borderedAdminPage/BorderedAdminPage";
import styles from "./MainPage.module.scss";

export const MainPage = () => {

  return (
    <BorderedAdminPage>
      <div className={styles.mainPage}>
        <Rooms />
      </div>
    </BorderedAdminPage>

  );
};
