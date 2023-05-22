import {PropsWithChildren, ReactElement} from "react";
import {Loader} from "gf-ui-lib/src/components/Loader/Loader";
import {Header} from "src/component/pageBorder/header/Header";
import {Footer} from "src/component/pageBorder/footer/Footer";
import styles from "src/component/pageBorder/PageBorder.module.scss";

interface PageBorderProps extends PropsWithChildren {
  isLoading?: boolean;
  isShowLoader: boolean;
}

export const PageBorder = (props: PageBorderProps): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Loader
        isLoading={props.isLoading}
        isShowLoader={props.isShowLoader}
      />
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
