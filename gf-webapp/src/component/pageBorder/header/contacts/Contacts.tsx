
import {useState} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useScrollPosition} from "src/utils/domEventsUtils/useScrollPosition";
import {renderContacts} from "src/component/pageBorder/header/contacts/contactsList/ContactsList";
import styles from "src/component/pageBorder/header/contacts/Contacts.module.scss";

export const Contacts = () => {
  const dictionary = useDictionary().dictionary;

  const [contactsOpen, setContactsOpen] = useState(false);

  const contactsHoverHandler = () => {
    setContactsOpen(prev => !prev);
  };

  const onContactChoose = () => {
    setContactsOpen(false);
  };

  const scrollPosition = useScrollPosition();

  return (
    <li
      onMouseEnter={contactsHoverHandler}
      onMouseLeave={contactsHoverHandler}
      className={scrollPosition < 100 ? styles.contacts : `${styles.contacts} ${styles.contactsScroll}`}
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
        {contactsOpen && renderContacts(onContactChoose)}
      </ul>
    </li>
  );
};