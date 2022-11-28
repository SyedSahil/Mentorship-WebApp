import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
   apiKey: 'AIzaSyD1FuAlpJprhVaGg9cOdLTAgemvDsGuEoI',
   authDomain: 'athena-mentorship.firebaseapp.com',
   projectId: 'athena-mentorship',
   storageBucket: 'athena-mentorship.appspot.com',
   messagingSenderId: '380791224438',
   appId: '1:380791224438:web:a80ca04a7433aa149e8757',
   measurementId: 'G-MKQX67RHTN',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
const storage = app.storage();
export const ProfilePicStorageRef = storage.ref().child('dp');
