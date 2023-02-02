import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMttCbiOZ2WMJPbljWftm9KrRH2BHal38",
  authDomain: "twitter-clone-edfa2.firebaseapp.com",
  projectId: "twitter-clone-edfa2",
  storageBucket: "twitter-clone-edfa2.appspot.com",
  messagingSenderId: "952739588003",
  appId: "1:952739588003:web:e2d5c420e6101746599c16",
  measurementId: "G-PQH3YN08VF",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
