import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTXa4sIGmODgmP0rWjqpm_Uqx59e-6jJ8",
  authDomain: "socialhealthcare-9bb3a.firebaseapp.com",
  projectId: "socialhealthcare-9bb3a",
  storageBucket: "socialhealthcare-9bb3a.appspot.com",
  messagingSenderId: "810593966317",
  appId: "1:810593966317:web:7b0f8762a483804e4954e4",
  measurementId: "G-4KY5GNFCK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

const db = getDatabase(app);
export { db };