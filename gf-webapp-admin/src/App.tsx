import {useContext} from "react";
import {BrowserRouter} from "react-router-dom";
import {AppContext} from "src/appContext";
import {AppRouter} from "src/component/AppRouter";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "gf-ui-lib/components/Loader/Loader";

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
