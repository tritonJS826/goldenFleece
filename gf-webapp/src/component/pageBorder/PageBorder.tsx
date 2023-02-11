import React, {useState, PropsWithChildren, ReactNode, ReactElement} from "react";
import styles from "./PageBorder.module.scss";
import logo from "../../resources/icons/logo.svg";
import {useScrollPosition} from "../../domEventsUtils/useScrollPosition";
import githubLogo from "../../resources/icons/githubLogo.svg";
import rsSchoolLogo from "../../resources/icons/rsSchool.svg";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
interface PageBorderProps {
  children: ReactNode
}

export function PageBorder(props: PropsWithChildren<PageBorderProps>): ReactElement {
  const {t} = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [langSelected, setLangSelected] = useState(0);
  const langList = ["en", "ru"];
  const selectedLang = langList[langSelected];

  const langHoverHandler = () => {
    setLangOpen(prev => !prev);
  };

  const onLangChoose = (id: number) => {
    i18next.changeLanguage(langList[id]);
    setLangSelected(id);
    setLangOpen(false);
  };

  const [contacts, setContacts] = useState(false);
  const handleContacts = () => {
    setContacts(!contacts);
  };
  const scrollPosition = useScrollPosition();
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header className={scrollPosition > 100 ? styles.header_scroll : styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}
              onClick={() => setBurgerActive(!burgerActive)}
            >
              <div />
              <div />
              <div />
            </li>
            <li onMouseEnter={() => setContacts(true)}
              onMouseLeave={() => setContacts(false)}
              onClick={handleContacts}
              className={`${styles.contacts} ${styles.listItem}`}
            >
              <div
                className={styles.contact}
              >
                <p className={styles.contact_text}>
                  {t("Contacts")}
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
              <nav className={contacts ? styles.contact_links : `${styles.contact_links} ${styles.hidden}`}>
                <a className={styles.link}
                  href="#"
                >
                  +1324536432453
                </a>
                <a className={styles.link}
                  href="#"
                >
                  adfg@dasfs.ec
                </a>
              </nav>
            </li>
            <li className={styles.listItem}>
              <div className={styles.logo}>
                Golden Fleece
              </div>
              <img src={logo}
                alt="Golden Fleece logo"
              />
            </li>
            <li className={`${styles.languages} ${styles.listItem}`}
              onMouseEnter={langHoverHandler}
              onMouseLeave={langHoverHandler}
            >
              <p>
                {selectedLang.toUpperCase()}
              </p>
              <ul className={styles.langAdditional}>
                {langOpen && langList.map((lang, i) => (
                  <li key={i}
                    onClick={() => onLangChoose(i)}
                  >
                    {lang.toUpperCase()}
                  </li>
                ))}
              </ul>

            </li>
            <li className={styles.listItem}>
              Book now
            </li>
          </ul>
        </nav>
        <div className={burgerActive ? `${styles.burger} ${styles.active}` : styles.burger}
          onClick={() => setBurgerActive(false)}
        >
          <div className={styles.burger_content}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li className={styles.burger_item}>
                Main
              </li>
              <li className={styles.burger_item}>
                Contacts
              </li>
              <li className={styles.burger_item}>
                About Us
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {props.children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>

          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>

          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
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
            © 2022
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
  );
}
