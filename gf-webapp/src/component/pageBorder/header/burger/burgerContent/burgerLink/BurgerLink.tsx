import {NavLink} from "react-router-dom";
import styles from "src/component/pageBorder/header/burger/burgerContent/BurgerContent.module.scss";

/**
 * Burger NavLink props
 */
interface BurgerLinkProps {
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
 * Burger navLink component
 */
export const BurgerLink: React.FC<BurgerLinkProps> = (props: BurgerLinkProps) => {

  const burgerLinkHandler = (isActive: boolean) => {
    return isActive ? styles.burger_item_active : styles.burger_item;
  };

  return (
    <NavLink
      to={props.to}
      className={({isActive}) =>
        burgerLinkHandler(isActive)}
    >
      {props.value}
    </NavLink>
  );
};