import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9xMd8rEuYjwzp2BthM5xsxBtgM5ymto8",
    authDomain: "crwn-db-9eb9c.firebaseapp.com",
    projectId: "crwn-db-9eb9c",
    storageBucket: "crwn-db-9eb9c.appspot.com",
    messagingSenderId: "1066874804003",
    appId: "1:1066874804003:web:757d222d02c566830a1e96",
    measurementId: "G-H45RSLM7NL"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
