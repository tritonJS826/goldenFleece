import React from "react";
import styles from "./roomsBlock.module.scss";
import {NavLink} from "react-router-dom";
import room1 from "../../../../resources/rooms/1.jpg";
import room2 from "../../../../resources/rooms/2.jpg";
import room3 from "../../../../resources/rooms/3.jpg";
import room4 from "../../../../resources/rooms/4.jpg";
import room5 from "../../../../resources/rooms/5.jpg";
import {useTranslation} from "react-i18next";

export const RoomsBlock = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.roomsWrap}>
      <h2 className={styles.title2}>
        {t("moreRooms")}
      </h2>
      <div className={styles.rooms}>
        <div className={styles.room}>
          <NavLink to="/rooms/1"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room1}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              {t("singleRoom")}
            </h3>
            <span className={styles.spanLink}>
              {t("More")}
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/2"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room2}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              {t("singleRoom")}
            </h3>
            <span className={styles.spanLink}>
              {t("More")}
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/3"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room3}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              {t("singleRoom")}
            </h3>
            <span className={styles.spanLink}>
              {t("More")}
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/4"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room4}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              {t("singleRoom")}
            </h3>
            <span className={styles.spanLink}>
              {t("More")}
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/5"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room5}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              {t("singleRoom")}
            </h3>
            <span className={styles.spanLink}>
              {t("More")}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};