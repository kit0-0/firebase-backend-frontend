import {getAuth, signOut} from 'firebase/auth'

export const LogoutButton = () => {
    const logout = async () => {
        const auth = getAuth();
        await signOut(auth);
        alert('logged out')
    }
    return (
        <button onClick={logout}>Log out</button>
    )
}