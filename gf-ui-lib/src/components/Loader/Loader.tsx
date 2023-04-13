import styles from "./Loader.module.scss";

/**
 * Loader props
 */
interface LoaderProps {

  /**
   * Is Loader visible. False by default.
   */
  isLoading?: boolean;
}

/**
 * Block loader. Could be used as full Page.
 */
export const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  // set default as false
  const isLoading = props.isLoading ?? false;

  if (!isLoading) {
    return null;
  }

  return (
    <div>
      <div className={styles.loader}>
        <div className={styles.title}>
          Golden Fleece
        </div>
        <div className={styles.spinner}>
          <div className={styles.loading} />
        </div>
      </div>
    </div>
  );
};