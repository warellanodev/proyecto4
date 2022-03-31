
import 'firebase/compat/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBA9LGZJVBNvWw7sxwhS4UUH25eaOBIGWU",
    authDomain: "webproyecto4.firebaseapp.com",
    projectId: "webproyecto4",
    storageBucket: "webproyecto4.appspot.com",
    messagingSenderId: "1022497022985",
    appId: "1:1022497022985:web:edbdafae50f3683011c4d8"
}

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();