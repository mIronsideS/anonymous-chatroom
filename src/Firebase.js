import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

	apiKey: "AIzaSyDYf4krfOwKFj7Dx7HxraWpc0sfKeO-wlo",

  authDomain: "new-chat-ddbc2.firebaseapp.com",

  projectId: "new-chat-ddbc2",

  storageBucket: "new-chat-ddbc2.appspot.com",

  messagingSenderId: "388935952541",

  appId: "1:388935952541:web:e8492553f82b4959908c74"

	
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
