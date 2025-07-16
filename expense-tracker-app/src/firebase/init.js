// src/firebase/init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvxi2iRgQMZ5GL5pNJauEKnfEt84coAco",
  authDomain: "expense-tracker-ca565.firebaseapp.com",
  projectId: "expense-tracker-ca565",
  storageBucket: "expense-tracker-ca565.firebasestorage.app",
  messagingSenderId: "679491204540",
  appId: "1:679491204540:web:3c0e2a0282a9cd6676e7b9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
