import styles from "src/logic/bookingPage/hotelPlan/roomsPlan/RoomsPlan.module.scss";

export const roomsSchema = [
  {
    id: "1",
    title: "Single room №1",
    className: `${styles.one}`,
  },
  {
    id: "2",
    title: "Single room №2",
    className: `${styles.two}`,
  },
  {
    id: "3",
    title: "Single room №3",
    className: `${styles.three}`,
  },
  {
    id: "4",
    title: "Single room №4",
    className: `${styles.four}`,
  },
  {
    id: "5",
    title: "Single room №5",
    className: `${styles.five} ${styles.disabled}`,
  },
  {
    id: "6",
    title: "Single room №6",
    className: `${styles.six}`,
  },
];