import {createContext} from "react";
import firebase from "firebase/compat/app";
import {Auth} from "firebase/auth";
import {Firestore} from "firebase/firestore";

interface IAppContext {
  firebase: typeof firebase,
  auth: Auth,
  firestore: Firestore
}

export const AppContext = createContext<IAppContext>({} as IAppContext);