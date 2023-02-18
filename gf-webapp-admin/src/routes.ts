import {LoginPage} from "./logic/loginPage/LoginPage";
import {MainPage} from "./logic/mainPage/MainPage";
import {LOGIN_ROUTE, MAIN_PAGE_ROUTE} from "./utils/consts";

interface IRoute {
  path:string;
  component: () => JSX.Element;
}

export const publicRoutes:IRoute[] = [
  {
    path: LOGIN_ROUTE,
    component: LoginPage,
  },
];

export const privateRoutes:IRoute[] = [
  {
    path: MAIN_PAGE_ROUTE,
    component: MainPage,
  },
];