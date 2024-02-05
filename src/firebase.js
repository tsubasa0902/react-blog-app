import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvIsHSVBAHUAD2JwYcZxYW2nzz1aHth_Y",
  authDomain: "blog-33aa9.firebaseapp.com",
  projectId: "blog-33aa9",
  storageBucket: "blog-33aa9.appspot.com",
  messagingSenderId: "1019706117487",
  appId: "1:1019706117487:web:6130ffd86df6496bc1ac9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const proveider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,proveider,db};