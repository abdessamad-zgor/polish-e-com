import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSCM_FIH_KhQuL7PlZ9giJI75gmFoPFB8",
  authDomain: "polish-4e554.firebaseapp.com",
  projectId: "polish-4e554",
  storageBucket: "polish-4e554.appspot.com",
  messagingSenderId: "946587529616",
  appId: "1:946587529616:web:730a80eabe785c49d54315",
  measurementId: "G-HVH76FRRXX",
};

const app = firebase.initializeApp(firebaseConfig, "polish");
export const analytics = app.analytics();

export default app;
export const db = app.firestore();
export const auth = app.auth();
