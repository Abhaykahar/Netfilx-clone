
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOJlxQIVesc1zELNvm1P8MJ1lSUREzOmE",
  authDomain: "netfilx-clone-f110d.firebaseapp.com",
  projectId: "netfilx-clone-f110d",
  storageBucket: "netfilx-clone-f110d.appspot.com",
  messagingSenderId: "732562522966",
  appId: "1:732562522966:web:b7d72bacbd92e86933ccf7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password); 
        console.log("User logged in: ", res.user);
    } catch (error) {
        console.error("Login error: ", error.message); 
        alert(error.message); 
    }
};

const signup = async (name, email, password, navigate) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password); 
        const user = res.user;


        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

        alert("Sign-up successful!");
        navigate("/login"); 
    } catch (error) {
        console.error("Signup error: ", error.message);
        alert(error.message); 
    }
};



const logout = () =>{
    signOut(auth);
}



export {auth, db, login, signup, logout}