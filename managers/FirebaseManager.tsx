import { createContext, useContext, ReactNode } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebase.json";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

interface FirebaseContext {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
}

const FirebaseContext = createContext<FirebaseContext | null>(null);

interface FirebaseManagerProps {
  children: ReactNode;
}

export default function FirebaseManager(props: FirebaseManagerProps) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return <FirebaseContext.Provider value={{ app, auth, db }}>{props.children}</FirebaseContext.Provider>;
}

export const useFirebaseCtx = () => {
  const firebaseCtx = useContext(FirebaseContext);

  if (firebaseCtx === null) throw new Error("Firebase Context is null.");

  return firebaseCtx;
};
