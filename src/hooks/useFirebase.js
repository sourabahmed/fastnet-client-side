import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState(' ');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const registerUser = (name, email, password, navigate, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
                const user = userCredential.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user information
                saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                setAuthError('');
                navigate.replace('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }



    const logInUser = (email, password, location, navigate) => {
        setIsLoading(true);
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let from = location.state?.from?.pathname || "/";
                // navigate.replace(destination)
                navigate(from, { replace: true });
                setAuthError('');
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }


    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    //
    useEffect(() => {
        fetch(`https://shielded-ravine-12635.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    // save user to databse

    const saveUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('https://shielded-ravine-12635.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        logInUser,
        logOut,
    }
};

export default useFirebase;