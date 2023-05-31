import {useState} from "react";
import {useScrollPosition} from "src/utils/domEventsUtils/useScrollPosition";
import {BurgerContent} from "./burgerContent/BurgerContent";
import styles from "src/component/pageBorder/header/burger/Burger.module.scss";

export const Burger = () => {
  const scrollPosition = useScrollPosition();
  const [burgerActive, setBurgerActive] = useState(false);

  const burgerOpenHandler = () => {
    setBurgerActive(prev => !prev);
    document.body.classList.toggle("notScrollable");
  };

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