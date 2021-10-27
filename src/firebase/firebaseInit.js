import firebase from "firebase/app";
import "firebase/firestor";

const firebaseConfig = {
    apiKey: "AIzaSyAmbg3hJtg9zQVYSj3OTHkbE4NUeretYY4",
    authDomain: "vue-blog-2f469.firebaseapp.com",
    projectId: "vue-blog-2f469",
    storageBucket: "vue-blog-2f469.appspot.com",
    messagingSenderId: "1024172299566",
    appId: "1:1024172299566:web:1800e4f680bca04f7d96bf"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();