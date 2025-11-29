// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firebase Functions
import { getFunctions, httpsCallable } from "firebase/functions";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq6AIKEPvX4xZcYEzVPIr4FrdWFwkBPck",
  authDomain: "familylegacycoverage.firebaseapp.com",
  projectId: "familylegacycoverage",
  storageBucket: "familylegacycoverage.firebasestorage.app",
  messagingSenderId: "180072026218",
  appId: "1:180072026218:web:0dac4ebc55ee85c3ed3a13",
  measurementId: "G-TKD9F4S5NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Functions
export const functions = getFunctions(app);

// Export callable function
export const sendLeadSMS = httpsCallable(functions, "sendLeadSMS");
