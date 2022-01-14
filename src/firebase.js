import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSWQvNrN2Pu0XOMjqA97lKPqOTz0BJGpk",
  authDomain: "project-a6f1a.firebaseapp.com",
  databaseURL: "https://project-a6f1a-default-rtdb.firebaseio.com",
  projectId: "project-a6f1a",
  storageBucket: "project-a6f1a.appspot.com",
  messagingSenderId: "965375438997",
  appId: "1:965375438997:web:9559ca9d7a2ba21699ab9c",
  measurementId: "G-ZVQN6C331D"
});

const db = firebase.firestore();


// Exportar Login
// https://firebase.google.com/docs/auth/web/google-signin
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db,auth, provider };
