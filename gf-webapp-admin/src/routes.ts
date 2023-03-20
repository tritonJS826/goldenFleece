import {LoginPage} from "src/logic/loginPage/LoginPage";
import {MainPage} from "src/logic/mainPage/MainPage";
import {RoomPage} from "src/logic/roomPage/RoomPage";
import {LOGIN_ROUTE, MAIN_PAGE_ROUTE, ROOM_PAGE_ROUTE} from "src/utils/pathes";

interface IRoute {
  path:string;
  component: () => JSX.Element;
}

export const publicRoutes:IRoute[] = [
  {
    /** path: path to page*/
    path: LOGIN_ROUTE,
    /** component: the component that will be displayed when navigating to the path */
    component: LoginPage,
  },
];

export const privateRoutes:IRoute[] = [
  {
    path: MAIN_PAGE_ROUTE,
    component: MainPage,
  },
  {
    path: ROOM_PAGE_ROUTE,
    component: RoomPage,
  },
];