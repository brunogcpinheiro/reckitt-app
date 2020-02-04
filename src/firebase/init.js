import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyfr8-dmHZoGR7ehAcbOzj6wBC1hCNq0E",
  authDomain: "reckitt-formulario.firebaseapp.com",
  databaseURL: "https://reckitt-formulario.firebaseio.com",
  projectId: "reckitt-formulario",
  storageBucket: "",
  messagingSenderId: "280111051036",
  appId: "1:280111051036:web:2da2f5711d1c2637",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseStore = firebase.firestore();
const firebaseAuth = firebase.auth();

export { firebaseStore };
export { firebaseAuth };

export default {
  firebaseStore,
  firebaseAuth,
};
