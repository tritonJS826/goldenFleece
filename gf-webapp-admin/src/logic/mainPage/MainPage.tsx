import {Rooms} from "src/component/rooms/Rooms";
import {BorderedAdminPage} from "src/logic/borderedAdminPage/BorderedAdminPage";
import styles from "src/logic/mainPage/MainPage.module.scss";

export const MainPage = () => {

  return (
    <BorderedAdminPage>
      <div className={styles.mainPage}>
        <Rooms />
      </div>
    </BorderedAdminPage>

  );
};
