import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSWQvNrN2Pu0XOMjqA97lKPqOTz0BJGpk",
  authDomain: "project-a6f1a.firebaseapp.com",
  projectId: "project-a6f1a",
  storageBucket: "project-a6f1a.appspot.com",
  messagingSenderId: "965375438997",
  appId: "1:965375438997:web:14613004396e545799ab9c",
  measurementId: "G-JSZ6VK9HCS"
});

const db = firebase.firestore();

expot { db }