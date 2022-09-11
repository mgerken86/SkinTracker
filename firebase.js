// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi4G2TQxOP6nLt-ZskRIH12XDzLFXT7lk",
  authDomain: "fir-auth-e5563.firebaseapp.com",
  projectId: "fir-auth-e5563",
  storageBucket: "fir-auth-e5563.appspot.com",
  messagingSenderId: "230092806099",
  appId: "1:230092806099:web:c23f2387d0517f17350126"
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