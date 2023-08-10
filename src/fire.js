import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsuvSd1ClSiYwpXswuxW652jN8mwrf9IY",
  authDomain: "steamreact-8b096.firebaseapp.com",
  projectId: "steamreact-8b096",
  storageBucket: "steamreact-8b096.appspot.com",
  messagingSenderId: "1038782618099",
  appId: "1:1038782618099:web:049abed011282bbb67da86",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
