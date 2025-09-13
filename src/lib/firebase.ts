import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration (from your input)
const firebaseConfig = {
  apiKey: "AIzaSyCe2nfjhbrqV7oAVAzwr2GPsOJziPwT4Ss",
  authDomain: "tollverine-auth.firebaseapp.com",
  projectId: "tollverine-auth",
  storageBucket: "tollverine-auth.appspot.com",
  messagingSenderId: "13925804342",
  appId: "1:13925804342:web:f463e2ae79b289d3542b97",
  measurementId: "G-L7KT4FM5K1"
};

// Initialize Firebase correctly to prevent errors in Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the auth service and Google provider for use in other components
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();