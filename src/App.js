import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './SignUp'; // Import the new SignUp component
import Transaction from './Transaction';
import Personal from './Personal';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
        <Route path="/transactions" element={isLoggedIn ? <Transaction onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={<Personal />} />
      </Routes>
    </div>
  );
};

export default App;
