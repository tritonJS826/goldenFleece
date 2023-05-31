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
  contactsList.map((contact, index) => (
    <li
      key={index}
      onClick={callback}
    >
      <a
        className={styles.link}
        href={contact.type + contact.contact}
      >
        {contact.contact}
      </a>
    </li>
  )));
