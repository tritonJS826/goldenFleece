import React, {useState, useEffect, PropsWithChildren, ReactNode, ReactElement} from "react";
import {useDictionaryContext} from "../../context/Context";
import {NavLink} from "react-router-dom";
import {useScrollPosition} from "../../domEventsUtils/useScrollPosition";
import {useLocation} from "react-router-dom";
import {loadDictionary} from "../../service/LoadDictionary";
import {languageService} from "../../service/LanguageService";
import {Language} from "../../service/Schema";
import styles from "./PageBorder.module.scss";

interface PageBorderProps {
  children: ReactNode
}

interface Contact {
  type: string;
  contact: string;
}


export function PageBorder(props: PropsWithChildren<PageBorderProps>): ReactElement {
  const {dictionary, setDictionary} = useDictionaryContext();
  const navigation = dictionary.navigation;
  const [langOpen, setLangOpen] = useState(false);
  const [langSelected, setLangSelected] = useState<Language>(languageService.getCurrentLanguage() ?? Language.en);

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

  const onLangChoose = (lang: Language) => {
    setLangSelected(lang);
    localStorage.setItem("lang", `${lang}`);
    setLangOpen(false);
  };

  const [contactsOpen, setContactsOpen] = useState(false);

  const contactsHoverHandler = () => {
    setContactsOpen(prev => !prev);
  };

  const onContactChoose = () => {
    setContactsOpen(false);
  };

  const contactsList: Contact[] = [
    {
      type: "tel:",
      contact: "+380441234567",
    },
    {
      type: "mailto:",
      contact: "ask@htmlbook.ru",
    },
  ];

  const renderContacts = () => (
    contactsList.map((item, index) => (
      <li
        key={index}
        onClick={onContactChoose}
      >
        <a
          className={styles.link}
          href={item.type + item.contact}
        >
          {item.contact}
        </a>
      </li>
    )));

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

  const activeLinkHandler = (isActive: boolean) => {
    return isActive ? styles.burger_item_active : styles.burger_item;
  };

  const footerLinkHandler = (isActive: boolean) => {
    return isActive ? styles.footer_link_active : styles.footer_link;
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
                {contactsOpen && renderContacts()}
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
                {Language[langSelected].toUpperCase()}
              </p>
              <ul className={styles.langAdditional}>
                {langOpen && (Object.keys(Language) as (keyof typeof Language)[]).map(lang => (
                  <li
                    key={lang}
                    onClick={() => onLangChoose(Language[lang])}
                    className={langSelected === Language[lang] ? `${styles.disabled}` : ""}
                  >
                    {Language[lang].toUpperCase()}
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
          onClick={() => {
            setBurgerActive(false);
            document.body.classList.remove("notScrollable");
          }}
        >
          <div className={styles.burger_content}>
            <ul>
              <NavLink
                to="/"
                className={({isActive}) =>
                  activeLinkHandler(isActive)
                }
              >
                {navigation.main}
              </NavLink>
              <NavLink
                to="/rooms"
                className={({isActive}) =>
                  activeLinkHandler(isActive)
                }
              >
                {navigation.rooms}
              </NavLink>
              <NavLink
                to="/contacts"
                className={({isActive}) =>
                  activeLinkHandler(isActive)
                }
              >
                {navigation.contacts}
              </NavLink>
              <NavLink
                to="/about"
                className={({isActive}) =>
                  activeLinkHandler(isActive)
                }
              >
                {navigation.aboutUs}
              </NavLink>
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
                    footerLinkHandler(isActive)
                  }
                >
                  {navigation.main}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/rooms"
                  className={({isActive}) =>
                    footerLinkHandler(isActive)
                  }
                >
                  {navigation.rooms}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/contacts"
                  className={({isActive}) =>
                    footerLinkHandler(isActive)
                  }
                >
                  {navigation.contacts}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink
                  to="/about"
                  className={({isActive}) =>
                    footerLinkHandler(isActive)
                  }
                >
                  {navigation.aboutUs}
                </NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
