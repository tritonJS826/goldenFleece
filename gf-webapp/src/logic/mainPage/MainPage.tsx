import {Main} from "src/component/main/Main";
import {PageBorder} from "src/component/pageBorder/PageBorder";


export const MainPage = () => {
  return (
    <div>
      <PageBorder isShowLoader={false}>
        <Main />
      </PageBorder>
    </div>
  );
};
