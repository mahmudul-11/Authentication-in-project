import { signInWithPopup, getAuth, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import initilizeAuthentication from "../Firebase/firebase.initialize";

initilizeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    }
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
    }
    onAuthStateChanged(auth, (user) => {
        setUser(user)// ei user ta set kora hochhe.
    })
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setError('')
        }).catch((error) => {
            setError(error.message)
        });
    }
    return {
        user, error,
        signInWithGoogle, logout, signInWithGithub
    }

}
export default useFirebase;