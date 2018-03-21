import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD8AiVeEO7TgDcrLJHc-aLbFuRum_oLWD0",
    authDomain: "catch-of-the-day-3f898.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-3f898.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a name export
export { firebaseApp };

// this is a default export
export default base;
