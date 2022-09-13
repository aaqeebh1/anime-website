import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAorPIuGw5ZnPagQxGsx9CsyhfG322FUd0",
  authDomain: "animeworld-fb434.firebaseapp.com",
  projectId: "animeworld-fb434",
  storageBucket: "animeworld-fb434.appspot.com",
  messagingSenderId: "51554532",
  appId: "1:51554532:web:6b2c8e6bee67f77fb7e4f1"
};

const app = initializeApp(firebaseConfig);

export default app