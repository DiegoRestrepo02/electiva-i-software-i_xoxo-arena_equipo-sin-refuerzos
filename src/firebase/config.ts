import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo2L3_tZFSYjIABwf6D3Re9uriYusOGH4",
  authDomain: "xoxo-arena-17299.firebaseapp.com",
  projectId: "xoxo-arena-17299",
  storageBucket: "xoxo-arena-17299.firebasestorage.app",
  messagingSenderId: "1088359284886",
  appId: "1:1088359284886:web:3e7eecdf27ab29d16d82b7"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);
