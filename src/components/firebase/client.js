import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBIuo-WxmOJWxhdptfj54QLxJv7KPWaGUs",
    authDomain: "proyecto1-c0210.firebaseapp.com",
    projectId: "proyecto1-c0210",
    storageBucket: "proyecto1-c0210.appspot.com",
    messagingSenderId: "21695906501",
    appId: "1:21695906501:web:336da42ba7e19cd7c3e6ac"
  }

  
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
  
