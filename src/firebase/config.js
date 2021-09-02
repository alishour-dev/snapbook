import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD1mdqAfcNoIZViWnGUFeiEuSsdCzRKQdE",
    authDomain: "snapbook-a8a05.firebaseapp.com",
    projectId: "snapbook-a8a05",
    storageBucket: "snapbook-a8a05.appspot.com",
    messagingSenderId: "636832682990",
    appId: "1:636832682990:web:69b93722ce586193b034ff"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };