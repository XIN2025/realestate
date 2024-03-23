// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-auth-4507e.firebaseapp.com",
  projectId: "mern-auth-4507e",
  storageBucket: "mern-auth-4507e.appspot.com",
  messagingSenderId: "44600176700",
  appId: "1:44600176700:web:65213ff774952b725d1339",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
