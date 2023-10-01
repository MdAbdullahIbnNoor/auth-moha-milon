import PropTypes from 'prop-types';
import { createContext, useEffect } from 'react';
import auth from "../firebase/firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    const signUpWithGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    const authInfo = { 
        user,
        loader,
        createUser, 
        signInUser, 
        signOutUser ,
        signUpWithGoogle
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Observing the current user inside useEffect', currentUser);
            setUser(currentUser);
            setLoader(false)
        })

        return () => {
            unSubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

AuthProvider.PropTypes = {
    optionalNode: PropTypes.node
}


/****
 * 1. Create context using createContext(value) and export its
 * 2. Set provider with value {Here authInfo is the value}
 * 3. use AuthProvider in the main.jsx file containing Router Provider
 * 4. access the main.jsx as children and use it inside the AuthContext.Provider to give the value to all child components.
 * ***/