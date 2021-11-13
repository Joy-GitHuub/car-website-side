import { useEffect, useState } from 'react';
import initializeFirebase from '../Page/Login/Firebase/Firebase.Init';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";


initializeFirebase();

const useFirebasse = () => {
    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // User Register 
    const registerUser = (email, password, name, history) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError(' ');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save User
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setisLoading(false))

    };

    // User Sign-in
    const loginUser = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/';
                history.replace(destination)
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setisLoading(false))
    }

    // Google Sign Google
    const signInWithGoogle = (location, history) => {
        setisLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setError('');
                const destination = location.state?.from || '/';
                history.replace(destination)
                saveUser(user.email, user.displayName, 'PUT')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setisLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setisLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // UseEffect 
    useEffect(() => {
        fetch(`https://intense-cove-94957.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // SaveUser Database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`https://intense-cove-94957.herokuapp.com/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then();
    }

    // LogOUt Function
    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        }).finally(() => setisLoading(false))
    }

    return {
        user,
        isLoading,
        error,
        admin,
        signInWithGoogle,
        registerUser,
        loginUser,
        logOut,
    }
};

export default useFirebasse;