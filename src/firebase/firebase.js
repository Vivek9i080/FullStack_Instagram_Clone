import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj6Eh2REJkho0DhNtxXN8wH2J0gZ0hdUY",
  authDomain: "insta-clone-4186f.firebaseapp.com",
  projectId: "insta-clone-4186f",
  storageBucket: "insta-clone-4186f.appspot.com",
  messagingSenderId: "448969418812",
  appId: "1:448969418812:web:8b2da834ea8308d1573b39",
  measurementId: "G-E7YZZ51R81"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
