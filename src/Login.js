import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <footer className="bg-secondary text-light py-4 mt-auto">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">Login</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Special Offers</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">Business Banking</a></li>
            <li><a href="#" className="text-light">Commercial</a></li>
            <li><a href="#" className="text-light">About Us</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Mortgages and Other Rates</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">TD Websites</a></li>
            <li><a href="#" className="text-light">Investor's Edge</a></li>
            <li><a href="#" className="text-light">New to Canada</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // API details
  const apiUrl = 'https://api.jsonbin.io/v3/b/66edc353e41b4d34e433f76a'; // Bin ID
  const apiKey = '$2a$10$tjQRh1nraeP2Tg8ACBN4LuyAnSpfpjC9vCt3rjIRweqDCIhgkH2Y6'; // API key

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-Master-Key': apiKey,
      };

      // Fetch existing signups
      const response = await fetch(apiUrl, { method: 'GET', headers });
      const data = await response.json();
      const signups = data.record?.signups || [];

      // Find matching user
      const user = signups.find(
        (signup) => signup.username === username && signup.password === password
      );

      if (user) {
        onLogin();
        navigate('/transactions'); // Navigate to the transactions page on success
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Failed to process login');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
