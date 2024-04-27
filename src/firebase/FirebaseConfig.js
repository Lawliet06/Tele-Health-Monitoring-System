import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLxlCPZWFs5olc50lePrfvV71MxrUqzW4",
  authDomain: "tele-health-monitoring-system.firebaseapp.com",
  projectId: "tele-health-monitoring-system",
  storageBucket: "tele-health-monitoring-system.appspot.com",
  messagingSenderId: "145307838785",
  appId: "1:145307838785:web:279d19a6aca693c30199c0",
  measurementId: "G-RY65PLRTK9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { app, auth, analytics, db };
