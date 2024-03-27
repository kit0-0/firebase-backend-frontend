
import { LogoutButton } from '../components/LogoutButton';
import { useUser } from '../hooks/useUser';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const { user } = useUser();

    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUserInfo = async () => {
            try {
                const token = await user.getIdToken();
                const response = await axios(`/users/${user.uid}`, {
                    headers: { authtoken: token }
                });
                setUserInfo(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        if (user) {
            loadUserInfo();
        }

        return () => {
            
        };
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container center-content">
            <h1>Home Page</h1>
            <h2>Hello {user.displayName ? user.displayName : user.email}, you are now logged in.</h2>
            <p>Your UID: {user.uid}</p>
            {userInfo ? (
                <>
                    <p>bio: {userInfo.bio}</p>
                    <p>name : {userInfo.name}</p>
                </>
            ) : (
                <p>User information not available.</p>
            )}
            
            <div className="logout-button">
                <LogoutButton />
            </div>
        </div>
    );
}

export default HomePage;
