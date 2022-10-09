import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy6zVEKUzClXX30EtoUFupbNIdEAHuERw",
  authDomain: "netflix-clone-fb79e.firebaseapp.com",
  projectId: "netflix-clone-fb79e",
  storageBucket: "netflix-clone-fb79e.appspot.com",
  messagingSenderId: "56532567595",
  appId: "1:56532567595:web:e03723862080fdd9698c6e",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { auth };
export default db;
