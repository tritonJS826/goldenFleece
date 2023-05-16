import clsx from "clsx";
import styles from "src/components/Loader/Loader.module.scss";

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
      <div className={clsx(styles.loader, {[styles.hide_loader]: !isLoading})}>
        <div className={styles.title}>
          Golden Fleece
        </div>
        <div className={clsx(styles.spinner, {[styles.hide_loader]: !isLoading})}>
          <div className={clsx(styles.loading, {[styles.hide_loader]: !isLoading})} />
        </div>
      </div>
    </>
  );
};