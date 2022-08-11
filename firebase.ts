// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxJ7cVIlGUyvemmj7Qe5lUobCMRpWXRw0',
  authDomain: 'netflix-clone-adb1f.firebaseapp.com',
  projectId: 'netflix-clone-adb1f',
  storageBucket: 'netflix-clone-adb1f.appspot.com',
  messagingSenderId: '214989235894',
  appId: '1:214989235894:web:8d305c70875086a7afe817',
  measurementId: 'G-CYPL5V859M'
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
