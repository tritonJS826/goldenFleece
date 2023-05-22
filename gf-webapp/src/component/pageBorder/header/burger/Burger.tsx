import {useState} from "react";
import {useScrollPosition} from "src/utils/domEventsUtils/useScrollPosition";
import styles from "src/component/pageBorder/header/burger/Burger.module.scss";
import {BurgerContent} from "./burgerContent/BurgerContent";

export const Burger = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const burgerOpenHandler = () => {
    setBurgerActive(prev => !prev);
    document.body.classList.toggle("notScrollable");
  };

  const scrollPosition = useScrollPosition();

  return (
    <div className={scrollPosition < 100 ? styles.wrap : `${styles.wrap} ${styles.wrapScroll}`}>
      <li
        className={scrollPosition < 100 ? styles.burgerWrap : `${styles.burgerWrap} ${styles.burgerWrapScroll}`}
        onClick={burgerOpenHandler}
      >
        <div />
        <div />
        <div />
      </li>
      <div
        className={burgerActive ? `${styles.burger} ${styles.active}` : styles.burger}
        onClick={() => {
          setBurgerActive(false);
          document.body.classList.remove("notScrollable");
        }}
      >
        <BurgerContent />
      </div>
    </div>
  );
};