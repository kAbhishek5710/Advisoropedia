// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "advisoropedia-1e534.firebaseapp.com",
  projectId: "advisoropedia-1e534",
  storageBucket: "advisoropedia-1e534.appspot.com",
  messagingSenderId: "685504397933",
  appId: "1:685504397933:web:f4af8900782285b109b564",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
