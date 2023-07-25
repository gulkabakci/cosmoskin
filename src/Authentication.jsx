// Authentication.js
import React from 'react';
import  Login  from './pages/Login';
import Home from "./pages/home/Home";
import  Register  from './pages/Register';

const Authentication = ({ isLoggedIn, setIsLoggedIn, users ,setUsers}) => {
  return isLoggedIn ? (
    <Home setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <>
      <Login setIsLoggedIn={setIsLoggedIn} users={users} />
      <Register setUsers={setUsers} />
    </>
  );
};

export default Authentication;
