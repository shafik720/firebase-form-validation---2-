import { getAuth, GoogleAuthProvider, signInWithPopup ,onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";

function useFirebase() {
    let [user, setUser] = useState({});
    const auth = getAuth(app);
    function useGoogleAuth() {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();      

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const users = result.user;
                setUser(users);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
        
    }
    function handleSignOut(){
        
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            setUser(user);
          });
    },[])

    return { user, useGoogleAuth }
}

export default useFirebase;