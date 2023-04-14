import {useEffect, useState} from "react";
import styles from "./Loader.module.scss";

/**
 * Loader props
 */
interface LoaderProps {

  /**
 * Is async Data loading on Page. False by default.
 */
  isLoading?: boolean;

  /**
   * Is Loader visible. True by default.
   */
  isShowLoader?: boolean;
}

/**
 * Block loader. Could be used as full Page.
 */
export const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  // set default as false
  const isLoading = props.isLoading ?? false;
  const isShowLoader = props.isShowLoader ?? true;

  if(!isShowLoader) {
    return null;
  }

  return (
    <>
      <div className={isLoading ? styles.loader : `${styles.loader} ${styles.hide_loader}`}>
        <div className={styles.title}>
          Golden Fleece
        </div>
        <div className={isLoading ? styles.spinner : `${styles.spinner} ${styles.hide_loader}`}>
          <div className={isLoading ? styles.loading : `${styles.loading} ${styles.hide_loader}`} />
        </div>
      </div>
    </>
  );
};