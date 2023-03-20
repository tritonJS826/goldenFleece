import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import App from "src/App";
import {app} from "src/firebase";
import {AppContext} from "src/appContext";
import "src/Index.scss";

const auth = getAuth(app);
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <AppContext.Provider value={{
    firebase,
    auth,
    firestore,
  }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </AppContext.Provider>,
);

