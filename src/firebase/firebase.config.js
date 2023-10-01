// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA10vsmKZ_eMphZievuEEYx8Gt5nyfCmao",
  authDomain: "auth-moha-milon-f7e5a.firebaseapp.com",
  projectId: "auth-moha-milon-f7e5a",
  storageBucket: "auth-moha-milon-f7e5a.appspot.com",
  messagingSenderId: "788180611266",
  appId: "1:788180611266:web:c15ece8f94e3fde5bf8b5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app)
export default auth;