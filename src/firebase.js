// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcYbCM_yhIjEp8K8C1GEKWeajTmbJSigo",
  authDomain: "binary-520cd.firebaseapp.com",
  projectId: "binary-520cd",
  storageBucket: "binary-520cd.appspot.com",
  messagingSenderId: "636820716729",
  appId: "1:636820716729:web:595e9c5de6ea0d7fbeaf68",
  measurementId: "G-EM436PLXGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);