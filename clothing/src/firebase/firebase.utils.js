import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBhqMjvcuddSFOQTd6gXSVkmhAbSixTzMc",
    authDomain: "crwn-db-1cc38.firebaseapp.com",
    databaseURL: "https://crwn-db-1cc38.firebaseio.com",
    projectId: "crwn-db-1cc38",
    storageBucket: "",
    messagingSenderId: "435035587659",
    appId: "1:435035587659:web:1397b628b1fb026a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;