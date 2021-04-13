import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYrwkwWxVlgpoJi3-ON1-AHPYt6sbzZWM",
  authDomain: "twitter-clone-45c62.firebaseapp.com",
  projectId: "twitter-clone-45c62",
  storageBucket: "twitter-clone-45c62.appspot.com",
  messagingSenderId: "545543106931",
  appId: "1:545543106931:web:cf42e3856bca2c341b9506",
  measurementId: "G-T2DGZMW5X9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const db = firebase.firestore();

// var gcloud = require('google-cloud')({ ... });
// var gcs = gcloud.storage();
// var bucket = gcs.bucket('<your-firebase-storage-bucket>');

// db.enablePersistence()

export { auth, db }
