import {NavLink} from "react-router-dom";
import styles from "src/component/pageBorder/footer/Footer.module.scss";

/**
 * Footer NavLink props
 */
interface FooterLinkProps {
  /**
   * NavLink path (route, where to move)
   */
  to: string;
  /**
   * NavLink value (text)
   */
  value: string;
}

/**
 * Footer navLink component
 */
export const FooterLink: React.FC<FooterLinkProps> = (props: FooterLinkProps) => {

  const footerLinkHandler = (isActive: boolean) => {
    return isActive ? styles.footer_link_active : styles.footer_link;
  };


  return (
    <NavLink
      to={props.to}
      className={({isActive}) =>
        footerLinkHandler(isActive)}
    >
      {props.value}
    </NavLink>
  );
};