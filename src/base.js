import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBI0MzRXJzSixPY-JYF4xU-yI2pJMNKaDA",
    authDomain: "catch-of-the-day-singkar.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-singkar.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
