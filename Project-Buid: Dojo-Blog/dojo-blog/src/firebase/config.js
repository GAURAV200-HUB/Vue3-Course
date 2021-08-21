import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCExRhFLZbUHVLbJ90GzhprlyibFH54v0U",
  authDomain: "the-dojo-blog-4921d.firebaseapp.com",
  projectId: "the-dojo-blog-4921d",
  storageBucket: "the-dojo-blog-4921d.appspot.com",
  messagingSenderId: "184217655519",
  appId: "1:184217655519:web:05b19427b2b58470e8316a"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }