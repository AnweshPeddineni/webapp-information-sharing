import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb1fr3ZnSH_UTatIMi1_uAZTIO_sID7is",
  authDomain: "stock-analysis-13246.firebaseapp.com",
  projectId: "stock-analysis-13246",
  storageBucket: "stock-analysis-13246.appspot.com",
  messagingSenderId: "3544190393",
  appId: "1:3544190393:web:ea901399935f5b28d47a68",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
