import {LogoutButton} from '../components/LogoutButton';
import { useUser } from '../hooks/useUser';

 const HomePage =()=>{
    const {user} = useUser();
    return(
    <>
    <h1>Home Page</h1>
    
    <h2>Hello {user.displayName ? user.displayName : user.email}, you are now logged in.</h2>
    <p>Your UID: {user.uid}</p>
   
    
    <LogoutButton/>
    </>)
}

export default HomePage