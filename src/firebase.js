import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByvtw5GvAs6nSYhWhk1f5YeIe1uM_jnL0",
    authDomain: "messenger-26594.firebaseapp.com",
    databaseURL: "https://messenger-26594-default-rtdb.firebaseio.com",
    projectId: "messenger-26594",
    storageBucket: "messenger-26594.appspot.com",
    messagingSenderId: "930928035323",
    appId: "1:930928035323:web:f8561d73c0c9bf11e2375e"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);
  export const db=firebaseDB.database().ref();
  export const auth = firebase.auth();