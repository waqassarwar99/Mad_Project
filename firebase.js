import * as firebase from 'firebase';
import "firebase/database";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA7qLvHbQ5Nk0-967Wzc-glrM0OQDp_vME",
  authDomain: "madproject-98dac.firebaseapp.com",
  projectId: "madproject-98dac",
  storageBucket: "madproject-98dac.appspot.com",
  messagingSenderId: "823943753173",
  appId: "1:823943753173:web:30d6a320d798d4a673615c",
};

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();


export {db};