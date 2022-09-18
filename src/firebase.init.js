// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf4QF3gUJ9uMxWonjFxY_h8rVktDylnEk",
  authDomain: "study-with-raihan.firebaseapp.com",
  projectId: "study-with-raihan",
  storageBucket: "study-with-raihan.appspot.com",
  messagingSenderId: "1008249010179",
  appId: "1:1008249010179:web:1dcca3b674b4bb3d417636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;