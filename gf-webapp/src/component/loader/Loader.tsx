import styles from "src/component/loader/loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>

  );
};