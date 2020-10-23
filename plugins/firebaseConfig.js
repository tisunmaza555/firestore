import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyAoTVKHuwNv3mBeIy6Pau350Q0eyc1-S3Y',
    authDomain: 'cs-student-9e780.firebaseapp.com',
    databaseURL: 'https://cs-student-9e780.firebaseio.com',
    projectId: 'cs-student-9e780',
    storageBucket: 'cs-student-9e780.appspot.com',
    messagingSenderId: '726993086012',
    appId: '1:726993086012:web:889eb660b74c22b5968539',
    measurementId: 'G-MVV0K1ZWYZ',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
