import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAyH87zxJ3rnPzBngtikX4Ycaj_lq9279o",
    authDomain: "react-netflix-clone-1f33e.firebaseapp.com",
    projectId: "react-netflix-clone-1f33e",
    storageBucket: "react-netflix-clone-1f33e.appspot.com",
    messagingSenderId: "500848493954",
    appId: "1:500848493954:web:0626888cc78845e3283b9b",
    measurementId: "G-5GR4KEBN4Y"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);