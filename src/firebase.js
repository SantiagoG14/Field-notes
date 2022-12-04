import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp26am5acwOwxxjjqOH4J65VqX65WwI1A",
  authDomain: "field-notes-161b0.firebaseapp.com",
  projectId: "field-notes-161b0",
  storageBucket: "field-notes-161b0.appspot.com",
  messagingSenderId: "317743709840",
  appId: "1:317743709840:web:c6531d18d90b5e0b39e215",
}

// Initialize Firebase
const defaultApp = initializeApp(firebaseConfig)

export default defaultApp
