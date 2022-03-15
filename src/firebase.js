import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNemavRyDQsK_98pKWqqHMgn6P0uKxVZw",
  authDomain: "linkedin-clone-4dddb.firebaseapp.com",
  projectId: "linkedin-clone-4dddb",
  storageBucket: "linkedin-clone-4dddb.appspot.com",
  messagingSenderId: "263078128045",
  appId: "1:263078128045:web:9f600e27f65e7d1b501924",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
