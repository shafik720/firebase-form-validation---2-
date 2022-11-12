import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useState } from "react";
import app from "../firebase.init";

function useFirebase() {
    let [user, setUser] = useState({});
    function useGoogleAuth() {
        console.log('ok go');
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }

    return { user, useGoogleAuth }
}

export default useFirebase;