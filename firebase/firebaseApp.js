import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "ai-test-18096.firebaseapp.com",
  projectId: "ai-test-18096",
  storageBucket: "ai-test-18096.appspot.com",
  messagingSenderId: "205661997574",
  appId: "1:205661997574:web:8e515994c3bfa76e695187",
  measurementId: "G-64LYW5LEV3"
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
};