import styles from "src/component/pageBorder/header/contacts/contactsList/ContactsList.module.scss";

interface Contact {
  type: string;
  contact: string;
}

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

export const renderContacts = (callback: () => void) => (
  contactsList.map((item, index) => (
    <li
      key={index}
      onClick={callback}
    >
      <a
        className={styles.link}
        href={item.type + item.contact}
      >
        {item.contact}
      </a>
    </li>
  )));
