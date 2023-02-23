import React, {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {AppContext} from "../appContext";
import {privateRoutes, publicRoutes} from "../routes";
import {LOGIN_ROUTE, MAIN_PAGE_ROUTE} from "../utils/pathes";
import {useAuthState} from "react-firebase-hooks/auth";

export const AppRouter = () => {
  const {auth} = useContext(AppContext);
  const [user] = useAuthState(auth);
  return user ?
    (
      <Routes>
        {privateRoutes.map(({path, component: Component}) =>
          (
            <Route key={path}
              path={path}
              element={<Component />}
            />
          ),
        )}
        <Route path="*"
          element={<Navigate to={MAIN_PAGE_ROUTE} />}
        />
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({path, component: Component}) =>
          (
            <Route key={path}
              path={path}
              element={<Component />}
            />
          ),
        )}
        <Route path="*"
          element={<Navigate to={LOGIN_ROUTE} />}
        />
      </Routes>
    );
};