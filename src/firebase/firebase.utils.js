import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBM-ir-vbFMlzR23_Mp3lEETt51awSd6A",
  authDomain: "e-commerce-portfolio-app.firebaseapp.com",
  databaseURL: "https://e-commerce-portfolio-app.firebaseio.com",
  projectId: "e-commerce-portfolio-app",
  storageBucket: "e-commerce-portfolio-app.appspot.com",
  messagingSenderId: "493292336149",
  appId: "1:493292336149:web:a5d21477024759150d0a1c",
  measurementId: "G-MPVFDPBFD9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;