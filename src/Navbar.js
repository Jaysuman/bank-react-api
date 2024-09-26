import React from 'react';
import { Link } from 'react-router-dom';
import logo from './td.PNG'; // Path to the TD logo
import flagIcon from './flag.jpg'; // Path to the flag icon

const Navbar = ({ isLoggedIn, onLogout }) => {
  const handleLanguageChange = () => {
    // Implement language change functionality here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="TD Logo" style={{ height: '50px' }} />
        </Link>

        {/* Toggler for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ fontSize: '1.2rem' }}></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-6 fw-bold" to="/">Personal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-6 fw-bold" to="/wealth">Wealth</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-6 fw-bold" to="/about">About TD</Link>
            </li>

            {isLoggedIn ? (
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link fs-6 fw-bold text-dark text-decoration-none"
                  onClick={onLogout}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link fs-6 fw-bold" to="/signup">Sign Up</Link> {/* Add Sign Up link */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-6 fw-bold" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex align-items-center ms-auto">
            <button className="btn btn-outline-secondary border-0 shadow-none me-2" type="button" style={{ fontSize: '1rem', padding: '0.4rem 0.8rem' }}>Special Offers</button>

            <button className="btn btn-outline-secondary border-0 shadow-none me-2" type="button" style={{ fontSize: '1.4rem', padding: '0.6rem 1.2rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
            </button>

            <button className="btn btn-outline-secondary border-0 shadow-none me-2" type="button" style={{ fontSize: '1.4rem', padding: '0.6rem 1.2rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </button>

            <img src={flagIcon} alt="English Flag" className="ms-2" style={{ width: '40px', height: '30px' }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
