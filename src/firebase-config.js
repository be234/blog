// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_OLMzxcw17S7E2ctnuRq5U7108SoH5E8",
  authDomain: "blog-75c8d.firebaseapp.com",
  projectId: "blog-75c8d",
  storageBucket: "blog-75c8d.appspot.com",
  messagingSenderId: "763568323631",
  appId: "1:763568323631:web:e9ccc856a2db317ef19ada"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();