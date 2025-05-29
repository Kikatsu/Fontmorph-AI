// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzItrPp1novFQfwN4vCnftDoL_tJjDSdU",
  authDomain: "font-morph-ai.firebaseapp.com",
  projectId: "font-morph-ai",
  storageBucket: "font-morph-ai.firebasestorage.app",
  messagingSenderId: "398882339473",
  appId: "1:398882339473:web:a84d86afb0efcb972fdd30",
  measurementId: "G-EMTLQC34SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
