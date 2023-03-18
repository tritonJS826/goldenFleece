import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AddRoomBtn} from "./addRoomBtn/AddRoomBtn";
import {AddRoomModal} from "./addRoomModal/AddRoomModal";
import {Registration} from "../registration/Registration";
import {AppContext} from "src/appContext";
import {LOGIN_ROUTE, MAIN_PAGE_ROUTE} from "src/utils/pathes";
import {Button} from "gf-ui-lib/components/Button/Button";
import styles from "./SideMenu.module.scss";

export const SideMenu = () => {
  const navigate = useNavigate();
  const {auth} = useContext(AppContext);
  const logOut = async () => {
    await auth.signOut();
    navigate(LOGIN_ROUTE);
  };

  const [isModalShown, setIsModalShown] = useState(false);
  const showModal = () => {
    setIsModalShown(!isModalShown);
    document.body.classList.toggle("notScrollable");
  };

  return (
    <div className={styles.sideMenu}>
      <Link className={styles.mainLink}
        to={MAIN_PAGE_ROUTE}
      >
        Main page
      </Link>
      <AddRoomBtn showModal={showModal} />
      <Registration />
      {isModalShown && <AddRoomModal showModal={showModal} />}
      <Button
        type="button"
        onClick={logOut}
        value="Logout"
      />
    </div>
  );
};