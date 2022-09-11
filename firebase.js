// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNbbTSxvKsECUTSM5SIMzC8EIYemlhXZU",
    authDomain: "skintracker-cf772.firebaseapp.com",
    projectId: "skintracker-cf772",
    storageBucket: "skintracker-cf772.appspot.com",
    messagingSenderId: "628061511036",
    appId: "1:628061511036:web:b9b1d104a95bf5ecc858f9"
};

// Initialize Firebase
let app
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }