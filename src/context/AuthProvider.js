import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [mood, setMood] = useState(true);

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            // if (currentUser === null || currentUser.emailVerified) {
            //     setUser(currentUser);
            // }
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { mood, setMood, user, loading, setLoading, providerLogin, updateUserProfile, logOut, createUser, signIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;