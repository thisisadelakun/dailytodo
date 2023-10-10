import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "firebase/compat/auth";
import "firebase/compat/analytics";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB0ZVGeLFQyNJU33-ViyAw0jzfrkBMPUzk",
  authDomain: "todotrove-app.firebaseapp.com",
  projectId: "todotrove-app",
  storageBucket: "todotrove-app.appspot.com",
  messagingSenderId: "838340400203",
  appId: "1:838340400203:web:0fe957774845f4c29629ce",
  measurementId: "G-K789ZD7PKN"
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
