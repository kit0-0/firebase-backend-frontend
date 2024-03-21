import {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useUser = () => {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
    const [isLoading, setIsLoading] = useState(!auth.currentUser);

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            setUser(user);
            setIsLoading(false);
        });
      
    }, [auth]);

    return {user, isLoading}
}