// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN9TS0Eg__7LwLT8i17AAcx4UmBwp2XXU",
  authDomain: "react-practice-62df5.firebaseapp.com",
  projectId: "react-practice-62df5",
  storageBucket: "react-practice-62df5.appspot.com",
  messagingSenderId: "748517562246",
  appId: "1:748517562246:web:41d4c50d671d417ff8be07",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
