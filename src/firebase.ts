// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq4s0JO2gBE_oUqjJbBZAxc-DM6j75qe0",
  authDomain: "twitter-lite-pwa.firebaseapp.com",
  projectId: "twitter-lite-pwa",
  storageBucket: "twitter-lite-pwa.appspot.com",
  messagingSenderId: "220507917313",
  appId: "1:220507917313:web:8378bd0428343141128400",
  measurementId: "G-RK13XLJGCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase analytics and get a reference to the service
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
