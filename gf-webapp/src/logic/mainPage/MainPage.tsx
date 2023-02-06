import React from "react";
import {Main} from "../../component/main/Main";
import {PageBorder} from "../../component/pageBorder/PageBorder";

export const MainPage = () => {
  return (
    <div className="App">
      <PageBorder>
        <Main />
      </PageBorder>
    </div>
  );
};
