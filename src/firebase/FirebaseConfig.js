import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD52QBrR8cyWe2BXzit_DKU6BTq_WzEcBM",
  authDomain: "loanapp-b20b4.firebaseapp.com",
  projectId: "loanapp-b20b4",
  storageBucket: "loanapp-b20b4.appspot.com",
  messagingSenderId: "938501264766",
  appId: "1:938501264766:web:366359e6f5eda0421f0f2f",
  measurementId: "G-GBNP56EYTM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const db = firebase.firestore();

// var gcloud = require('google-cloud')({ ... });
// var gcs = gcloud.storage();
// var bucket = gcs.bucket('<your-firebase-storage-bucket>');

// db.enablePersistence()

export { auth, db }
