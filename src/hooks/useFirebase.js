import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useState } from "react";
import app from "../firebase.init";

function useFirebase() {
    let [user, setUser] = useState({});
    function useGoogleAuth() {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }

    return { user, useGoogleAuth }
}

export default useFirebase;