
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);