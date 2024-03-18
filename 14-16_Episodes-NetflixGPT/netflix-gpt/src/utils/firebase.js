// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMSrjOX0KdE0YIJDbnJLC7k6dlZ1ocWDY",
  authDomain: "netflixgpt-849ae.firebaseapp.com",
  projectId: "netflixgpt-849ae",
  storageBucket: "netflixgpt-849ae.appspot.com",
  messagingSenderId: "863348603879",
  appId: "1:863348603879:web:0399fdd0b5b6e570135b42",
  measurementId: "G-1XMLN9ZNCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
