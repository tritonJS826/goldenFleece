import React, {useState, useEffect, PropsWithChildren, ReactNode, ReactElement} from "react";
import {useDictionaryContext} from "../../context/Context";
import {NavLink} from "react-router-dom";
import {useScrollPosition} from "../../domEventsUtils/useScrollPosition";
import {useLocation} from "react-router-dom";
import {loadDictionary} from "../../service/LoadDictionary";
import {languages} from "../../service/LocalStorage";
import styles from "./PageBorder.module.scss";


interface PageBorderProps {
  children: ReactNode
}

export function PageBorder(props: PropsWithChildren<PageBorderProps>): ReactElement {
  const {dictionary, setDictionary} = useDictionaryContext();
  const glossary = dictionary.navigation;
  const [langOpen, setLangOpen] = useState(false);
  const [langSelected, setLangSelected] = useState(languages.getValue("lang") || "en");
  const langList = ["en", "ru", "ge"];

  const langHoverHandler = () => {
    setLangOpen(prev => !prev);
  };

  const loadDictionaryAsync = async () => {
    const messages = await loadDictionary(langSelected);
    setDictionary(messages);
  };

  useEffect(() => {
    loadDictionaryAsync();
  }, [langSelected]);

  const onLangChoose = (lang: string) => {
    setLangSelected(lang);
    localStorage.setItem("lang", `${lang}`);
    setLangOpen(false);
  };

  const [contactsOpen, setContactsOpen] = useState(false);
  const contactsList: {[key: string]: string;} = {phone: "+123456789", email: "goldenFleece@gmain.com"};
  const conatctsArray = Object.keys(contactsList);

  const contactsHoverHandler = () => {
    setContactsOpen(prev => !prev);
  };

  const onContactChoose = () => {
    setContactsOpen(false);
  };

  const scrollPosition = useScrollPosition();
  const [burgerActive, setBurgerActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("notScrollable");
  }, [location]);

  const burgerOpenHandler = () => {
    setBurgerActive(prev => !prev);
    document.body.classList.toggle("notScrollable");
  };

  return (
    <div className={styles.wrapper}>
      <header className={scrollPosition < 100 ? styles.header : `${styles.header} ${styles.header_scroll}`}>
        <nav className={scrollPosition < 100 ? styles.nav : `${styles.nav} ${styles.nav_scroll}`}>
          <ul className={styles.list}>
            <li
              className={styles.listItem}
              onClick={burgerOpenHandler}
            >
              <div />
              <div />
              <div />
            </li>
            <li
              onMouseEnter={contactsHoverHandler}
              onMouseLeave={contactsHoverHandler}
              className={`${styles.contacts} ${styles.listItem}`}
            >
              <div
                className={styles.contact}
              >
                <p className={styles.contact_text}>
                  {dictionary.contacts}
                </p>
                <svg
                  className={scrollPosition > 100 ? styles.expand_arrow_scroll : styles.expand_arrow}
                  xmlns="http://www.w3.org/2000/svg"
                  height="35"
                  width="35"
                >
                  <path
                    d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <ul className={styles.contact_links}>
                {contactsOpen && conatctsArray.map((contact, i) => (
                  <li
                    onClick={onContactChoose}
                    key={i}
                  >
                    <a
                      className={styles.link}
                      href="#"
                    >
                      {contactsList[contact]}
                    </a>
                  </li>
                ))}

              </ul>
            </li>
            <li className={styles.listItem}>
              <div className={styles.logo}>
                Golden Fleece
              </div>
            </li>
            <li
              className={`${styles.languages} ${styles.listItem}`}
              onMouseEnter={langHoverHandler}
              onMouseLeave={langHoverHandler}
            >
              <p>
                {langSelected.toUpperCase()}
              </p>
              <ul className={styles.langAdditional}>
                {langOpen && langList.map(lang => (
                  <li
                    key={lang}
                    onClick={() => onLangChoose(lang)}
                    className={langSelected === lang ? `${styles.disabled}` : ""}
                  >
                    {lang.toUpperCase()}
                  </li>
                ))}
              </ul>

            </li>
            <NavLink
              to="/booking"
              className={styles.listItem}
            >
              {dictionary.bookButtonText}
            </NavLink>
          </ul>
        </nav>
        <div
          className={burgerActive ? `${styles.burger} ${styles.active}` : styles.burger}
          onClick={() => setBurgerActive(false)}
        >
          <div
            className={styles.burger_content}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li className={styles.burger_item}>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {glossary.main}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/rooms"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {glossary.rooms}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/contacts"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {glossary.contacts}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/about"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {glossary.aboutUs}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {props.children}
      </main>
      <div className={styles.footerWrap}>
        <footer className={styles.footer}>
          <div className={styles.footer_container}>
            <ul className={styles.footerList}>
              <li className={styles.burger_item}>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {glossary.main}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/rooms"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {glossary.rooms}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/contacts"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {glossary.contacts}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/about"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {glossary.aboutUs}
                </NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
