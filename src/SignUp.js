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

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  // API details
  const apiUrl = 'https://api.jsonbin.io/v3/b/66edc353e41b4d34e433f76a'; // Bin ID
  const apiKey = '$2a$10$tjQRh1nraeP2Tg8ACBN4LuyAnSpfpjC9vCt3rjIRweqDCIhgkH2Y6'; // API key

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Ensure all fields are filled
    if (username && password && email) {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'X-Master-Key': apiKey,
        };

        // Fetch existing signups
        const existingResponse = await fetch(apiUrl, { method: 'GET', headers });
        const existingData = await existingResponse.json();
        let signups = existingData.record?.signups || [];

        // Check if username already exists
        if (signups.some(user => user.username === username)) {
          setStatus('Username already exists.');
        } else {
          // Add new signup data
          signups.push({ username, password, email });

          // Store updated data back to the API
          const response = await fetch(apiUrl, {
            method: 'PUT',
            headers,
            body: JSON.stringify({ signups })
          });

          if (response.ok) {
            setStatus('Signup successful!');
            navigate('/login'); // Redirect to login after signup
          } else {
            setStatus('Failed to store signup information.');
          }
        }
      } catch (error) {
        setStatus('Failed to process signup.');
      }
    } else {
      setError('Please fill in all the fields');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
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
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {status && <div className="alert alert-info">{status}</div>}
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <Footer /> {/* Include Footer here */}
    </div>
  );
};

export default SignUp;
