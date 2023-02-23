import React, {useState, useEffect, PropsWithChildren, ReactNode, ReactElement} from "react";
import {NavLink} from "react-router-dom";
import styles from "./PageBorder.module.scss";
import logo from "../../resources/icons/logo.svg";
import {useScrollPosition} from "../../domEventsUtils/useScrollPosition";
import githubLogo from "../../resources/icons/githubLogo.svg";
import rsSchoolLogo from "../../resources/icons/rsSchool.svg";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import {useLocation} from "react-router-dom";

interface PageBorderProps {
  children: ReactNode
}

export function PageBorder(props: PropsWithChildren<PageBorderProps>): ReactElement {
  const {t} = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const currentLang = cookies.get("i18next") || "en";
  const [langSelected, setLangSelected] = useState(currentLang);
  const langList = ["en", "ru", "ge"];

  const langHoverHandler = () => {
    setLangOpen(prev => !prev);
  };

  const onLangChoose = (lang: string) => {
    i18next.changeLanguage(lang);
    setLangSelected(lang);
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
      <header className={scrollPosition > 100 ? styles.header_scroll : styles.header}>
        <nav className={scrollPosition > 100 ? styles.nav_scroll : styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}
              onClick={burgerOpenHandler}
            >
              <div />
              <div />
              <div />
            </li>
            <li onMouseEnter={contactsHoverHandler}
              onMouseLeave={contactsHoverHandler}
              className={`${styles.contacts} ${styles.listItem}`}
            >
              <div
                className={styles.contact}
              >
                <p className={styles.contact_text}>
                  {t("contacts")}
                </p>
                <svg className={scrollPosition > 100 ? styles.expand_arrow_scroll : styles.expand_arrow}
                  xmlns="http://www.w3.org/2000/svg"
                  height="35"
                  width="35"
                >
                  <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <ul className={styles.contact_links}>
                {contactsOpen && conatctsArray.map((contact, i) => (
                  <li onClick={onContactChoose}
                    key={i}
                  >
                    <a className={styles.link}
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
              {/* <img src={logo}
                alt="Golden Fleece logo"
              /> */}
            </li>
            <li className={`${styles.languages} ${styles.listItem}`}
              onMouseEnter={langHoverHandler}
              onMouseLeave={langHoverHandler}
            >
              <p>
                {langSelected.toUpperCase()}
              </p>
              <ul className={styles.langAdditional}>
                {langOpen && langList.map(lang => (
                  <li key={lang}
                    onClick={() => onLangChoose(lang)}
                    className={currentLang === lang ? `${styles.disabled}` : ""}
                  >
                    {lang.toUpperCase()}
                  </li>
                ))}
              </ul>

            </li>
            <li className={styles.listItem}>
              <NavLink to="/booking"
                className={styles.bookingLink}
              >
                {t("book-now")}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className={burgerActive ? `${styles.burger} ${styles.active}` : styles.burger}
          onClick={() => setBurgerActive(false)}
        >
          <div className={styles.burger_content}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li className={styles.burger_item}>
                <NavLink to="/"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {t("main")}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink to="/rooms"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {t("rooms")}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink to="/contacts"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {t("contacts")}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink to="/about"
                  className={({isActive}) =>
                    isActive ? styles.burger_item_active : styles.burger_item
                  }
                >
                  {t("about-us")}
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
                <NavLink to="/"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {t("main")}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink to="/rooms"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {t("rooms")}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink to="/contacts"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {t("contacts")}
                </NavLink>
              </li>
              <li className={styles.burger_item}>
                <NavLink to="/about"
                  className={({isActive}) =>
                    isActive ? styles.footer_link_active : styles.footer_link
                  }
                >
                  {t("about-us")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.line} />
          <div className={styles.creators}>
            <a
              href="https://github.com/Ekaterina1994"
              className={styles.github}
              target="_blank"
              rel="noreferrer"
            >
              Ekaterina1994
              <img
                className={styles.githubLogo}
                src={githubLogo}
                alt="GitHub"
              />
            </a>
            <a
              href="https://github.com/scorpigg"
              className={styles.github}
              target="_blank"
              rel="noreferrer"
            >
              scorpigg
              <img
                className={styles.githubLogo}
                src={githubLogo}
                alt="GitHub"
              />
            </a>
            <a
              href="https://github.com/SergioAJS"
              className={styles.github}
              target="_blank"
              rel="noreferrer"
            >
              SergioAJS
              <img
                className={styles.githubLogo}
                src={githubLogo}
                alt="GitHub"
              />
            </a>
            <div className={styles.year}>
              © 2023
            </div>
            <a
              href="https://rs.school/js/"
              className={styles.course}
              target="_blank"
              rel="noreferrer"
            >
              <img src={rsSchoolLogo}
                alt="rsSchool"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
