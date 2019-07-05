import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBno48So9zbYvFamMO_bfwORBZev4v6D7c",
    authDomain: "smoothies-369dd.firebaseapp.com",
    databaseURL: "https://smoothies-369dd.firebaseio.com",
    projectId: "smoothies-369dd",
    storageBucket: "smoothies-369dd.appspot.com",
    messagingSenderId: "910267066795",
    appId: "1:910267066795:web:b25f9a23d7c5a0a3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()