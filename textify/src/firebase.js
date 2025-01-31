// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: AIzaSyCOFJw23kwPBWEYZOI-FDZqITZ0OzOR8dc,
  authDomain: "textify-6f3bb.firebaseapp.com",
  projectId: "textify-6f3bb",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: b6c5c7238f1b489521ffc2
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
