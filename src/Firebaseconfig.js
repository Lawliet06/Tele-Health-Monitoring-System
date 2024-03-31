// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLxlCPZWFs5olc50lePrfvV71MxrUqzW4",
  authDomain: "tele-health-monitoring-system.firebaseapp.com",
  projectId: "tele-health-monitoring-system",
  storageBucket: "tele-health-monitoring-system.appspot.com",
  messagingSenderId: "145307838785",
  appId: "1:145307838785:web:279d19a6aca693c30199c0",
  measurementId: "G-RY65PLRTK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);