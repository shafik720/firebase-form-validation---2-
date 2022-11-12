import { useState } from "react";

function useFirebase(){
    let [user, setUser] = useState({});
    function useGoogleAuth () {
        console.log('ok go');
    }

    return {user, useGoogleAuth}
}

export default useFirebase;