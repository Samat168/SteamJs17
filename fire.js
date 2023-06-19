import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Q1AfTLRSYg1Nm83aST_T50JMbdKfZuw",
  authDomain: "steamjs-17.firebaseapp.com",
  projectId: "steamjs-17",
  storageBucket: "steamjs-17.appspot.com",
  messagingSenderId: "647493089326",
  appId: "1:647493089326:web:ad1d705312f254c12607bf",
  measurementId: "G-424HH740G2",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
