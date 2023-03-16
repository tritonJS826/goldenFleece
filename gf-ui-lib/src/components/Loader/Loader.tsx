import styles from "./Loader.module.scss";

/**
 * Loader props
 */
interface LoaderProps {

  /**
   * Is Loader visible. True by default.
   */
  isLoading?: boolean;
}

/**
 * Block loader. Could be used as full Page.
 */
export const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  if (!props.isLoading) {
    return null;
  }

  return (
    <div>
      <div className={styles.stub}>
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

const defaultProps = {isLoading: true};
Loader.defaultProps = defaultProps;