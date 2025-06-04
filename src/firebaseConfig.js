// Firebase setup
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDrn5RtHkdwKCmCJWYJlFK3xZcCib0Fxw",
  authDomain: "kuwait-cars-1a2f5.firebaseapp.com",
  projectId: "kuwait-cars-1a2f5",
  storageBucket: "kuwait-cars-1a2f5.appspot.com",
  messagingSenderId: "107392677525",
  appId: "1:107392677525:web:57fe875732556ab78e4d9c",
  measurementId: "G-VWP3Y2T1BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
