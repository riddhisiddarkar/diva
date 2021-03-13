import firebase from "firebase";

import firebaseConfig from "./firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const db = app.firestore();

export const auth = firebase.auth();
