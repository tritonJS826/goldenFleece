import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {FooterLink} from "src/component/pageBorder/footer/footerLink/FooterLink";
import styles from "src/component/pageBorder/footer/Footer.module.scss";

export const Footer = () => {
  const navigation = useDictionary().dictionary.navigation;

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <FooterLink
          to="/"
          value={navigation.main}
        />
        <FooterLink
          to="/rooms"
          value={navigation.rooms}
        />
        <FooterLink
          to="/contacts"
          value={navigation.contacts}
        />
        <FooterLink
          to="/about"
          value={navigation.aboutUs}
        />
      </ul>
    </footer>
  );
};
