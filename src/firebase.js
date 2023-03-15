import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD29zwnwS0VC3_AGJNv2WoZogBl7YH6Wj4",
    authDomain: "linkedin-clone-c239d.firebaseapp.com",
    projectId: "linkedin-clone-c239d",
    storageBucket: "linkedin-clone-c239d.appspot.com",
    messagingSenderId: "684328333774",
    appId: "1:684328333774:web:0ad975bb928e52dca27b9f"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebaseApp.auth();

export {db, auth}