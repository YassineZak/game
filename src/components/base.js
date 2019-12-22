import Firebase from 'firebase/app'
import 'firebase/auth'
import config from '../config'



class FirebaseApp {

    constructor() {
      Firebase.initializeApp({
        apiKey: "AIzaSyBf_1Rt_QfJQ23AGgB03GdyG09a2JLfRBY",
        authDomain: "game-db020.firebaseapp.com",
        databaseURL: "https://game-db020.firebaseio.com",
        projectId: "game-db020",
        storageBucket: "game-db020.appspot.com",
        messagingSenderId: "1013771238146",
        appId: "1:1013771238146:web:636b7e719e03af8869a01b"
      });
      this.auth = Firebase.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}


export default FirebaseApp