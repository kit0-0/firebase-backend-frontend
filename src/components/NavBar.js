import React from 'react';
import { Link } from 'react-router-dom';
import { LogoutButton } from './LogoutButton';
import { useUser } from '../hooks/useUser';
import './NavBar.css'; 

export const NavBar = () => {
  const { user } = useUser();

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <p>Logged in as: <span>{user.email}</span></p>
          <LogoutButton />
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};
