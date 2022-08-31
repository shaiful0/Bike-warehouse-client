// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lQpAMKFraHCQTM7JGhZKhfYeixTEm0w",
  authDomain: "project1-sunsine.firebaseapp.com",
  projectId: "project1-sunsine",
  storageBucket: "project1-sunsine.appspot.com",
  messagingSenderId: "170850463017",
  appId: "1:170850463017:web:ecf43a140619d747d2db38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
