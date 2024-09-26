
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2RIOkh3fTVSvI_2vsD0YUdKFZvnbWTmQ",
  authDomain: "appli-90cc0.firebaseapp.com",
  projectId: "appli-90cc0",
  storageBucket: "appli-90cc0.appspot.com",
  messagingSenderId: "42818322055",
  appId: "1:42818322055:web:d2d02f9bd3b6c3c00e8222",
  measurementId: "G-EW50PYSM4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db,auth};