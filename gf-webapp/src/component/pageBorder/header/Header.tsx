import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useScrollPosition} from "src/utils/domEventsUtils/useScrollPosition";
import {Burger} from "src/component/pageBorder/header/burger/Burger";
import {Contacts} from "src/component/pageBorder/header/contacts/Contacts";
import {LanguagesList} from "src/component/pageBorder/header/languagesList/LanguagesList";
import styles from "src/component/pageBorder/header/Header.module.scss";

export const Header = () => {
  const dictionary = useDictionary().dictionary;
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("notScrollable");
  }, [location]);

  return (
    <header className={scrollPosition < 100 ? styles.header : `${styles.header} ${styles.header_scroll}`}>
      <nav className={scrollPosition < 100 ? styles.nav : `${styles.nav} ${styles.nav_scroll}`}>
        <ul className={styles.list}>
          <Burger />
          <Contacts />
          <li className={styles.logoItem}>
            <div className={styles.logo}>
              Golden Fleece
            </div>
          </li>
          <LanguagesList />
          <NavLink
            to="/booking"
            className={styles.linkToBooking}
          >
            {dictionary.bookButtonText}
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
