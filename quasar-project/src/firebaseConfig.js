import firebase from 'firebase/app';
import 'firebase/auth'; // Import other Firebase services you need
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1QgEAzJrs6BIsNqsYjUqCraPjN6zQawE",
  authDomain: "testfirebase-app-8dce4.firebaseapp.com",
  projectId: "testfirebase-app-8dce4",
  storageBucket: "testfirebase-app-8dce4.appspot.com",
  messagingSenderId: "949278517236",
  appId: "1:949278517236:web:306bb38faa2a9f34ed3ba1",
  measurementId: "G-03F9F5WJLG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services you need
export const auth = firebase.auth();
export const firestore = firebase.firestore();
