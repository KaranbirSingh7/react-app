import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "$KEY",
    authDomain: "$DOMAIN",
    databaseURL: "$DB_URL"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
