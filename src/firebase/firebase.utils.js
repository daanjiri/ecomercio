import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAgQnSSmXF7_U7yDvA9jnL9YHzm95e2-yY",
    authDomain: "ecomercio-db.firebaseapp.com",
    databaseURL: "https://ecomercio-db.firebaseio.com",
    projectId: "ecomercio-db",
    storageBucket: "ecomercio-db.appspot.com",
    messagingSenderId: "312130042371",
    appId: "1:312130042371:web:17b6ceaae0a483691e2c36",
    measurementId: "G-V7L6BZDGHR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;