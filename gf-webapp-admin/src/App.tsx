import React, {useContext} from "react";
import {BrowserRouter} from "react-router-dom";
import {AppContext} from "./appContext";
import {AppRouter} from "./component/AppRouter";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "./component/loader/Loader";

function App() {
  const {auth} = useContext(AppContext);
  const [user, loading] = useAuthState(auth);

  if (!user && loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
