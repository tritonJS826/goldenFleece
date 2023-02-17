import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import "./index.scss";
import App from "./App";
import {app} from "./firebase";
import {AppContext} from "./appContext";

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
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppContext.Provider>,
);

