import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "firebase/compat/auth";
import "firebase/compat/analytics";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBdFIYmY7tIbIcOnKD4Xm6yWl-iC-gDvVg",
  authDomain: "to-do-app-0000.firebaseapp.com",
  projectId: "to-do-app-0000",
  storageBucket: "to-do-app-0000.appspot.com",
  messagingSenderId: "810097442064",
  appId: "1:810097442064:web:bfa44f1133eed2035e7995",
  measurementId: "G-3Q5H1HHZK5"
};


firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const analytics = firebase.analytics();


export {
  firebase,
  analytics,
  auth,
  firestore,
  storage,
  signInWithPopup,
  GoogleAuthProvider,
}
