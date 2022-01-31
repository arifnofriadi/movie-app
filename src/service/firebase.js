// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFm4IW8qrKXWftlhVa6_yatyd0NpvaahY",
  authDomain: "movie-app-f6643.firebaseapp.com",
  projectId: "movie-app-f6643",
  storageBucket: "movie-app-f6643.appspot.com",
  messagingSenderId: "989320127213",
  appId: "1:989320127213:web:f48ec908585454c69ca2e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app