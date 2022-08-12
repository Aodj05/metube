
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9aqz_o7xTQxPYlQdcGkSifFHWyW8Ytqg",
  authDomain: "metube-4eb02.firebaseapp.com",
  projectId: "metube-4eb02",
  storageBucket: "metube-4eb02.appspot.com",
  messagingSenderId: "1090197274033",
  appId: "1:1090197274033:web:938409a81b72720b2a5190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;