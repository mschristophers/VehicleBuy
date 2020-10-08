import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-QDlWfLEfHofI3lMTyZPvXvETmzQzLjs",
    authDomain: "vehiclebuy-f4023.firebaseapp.com",
    databaseURL: "https://vehiclebuy-f4023.firebaseio.com",
    projectId: "vehiclebuy-f4023",
    storageBucket: "vehiclebuy-f4023.appspot.com",
    messagingSenderId: "501240028380",
    appId: "1:501240028380:web:7e57951f002fd6fa172819",
    measurementId: "G-X1DBQGM8F8"
});

const auth = firebase.auth();

export { auth };

// npm i firebase