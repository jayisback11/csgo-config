// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtq9kgTvFil7mTEpwgRhDSyQvdvQGnYu0',
  authDomain: 'csgo-51cb2.firebaseapp.com',
  projectId: 'csgo-51cb2',
  storageBucket: 'csgo-51cb2.appspot.com',
  messagingSenderId: '96062870512',
  appId: '1:96062870512:web:81e3060e2231eec9d00335'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
