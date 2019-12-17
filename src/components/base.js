import Firebase from 'firebase/app'
import 'firebase/database'

const FirebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBMAC5eNDGbE0cRPnBXga7r_aYP5oMRcPk",
    authDomain: "game-b7b59.firebaseapp.com",
    databaseURL: "https://game-b7b59.firebaseio.com"
})


export default FirebaseApp