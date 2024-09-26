import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './hero.jpg'; // Ensure this path is correct
import image1 from './2.jpg'; // Ensure this path is correct
import image2 from './4.jpg'; // Ensure this path is correct
import image3 from './7.jpg'; // Ensure this path is correct

const Personal = () => {
  return (
    <div>
      {/* Hero area */}
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-lg-6 d-flex align-items-center p-0">
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid"
              style={{
                maxHeight: '95%',
                width: '95%',
                objectFit: 'cover',
                paddingLeft: '1rem', // Padding on the left
                paddingBottom: '1rem', // Padding on the bottom
              }}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center p-3">
            <div>
              <h2>Welcome to Personal Banking</h2>
              <p style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: '#555'
              }}>
                Discover tailored banking solutions designed to fit your financial needs. From managing daily finances to planning for the future, we’re here to support you every step of the way.
              </p>
              <Link to="/learn-more">
                <button className="btn btn-light" style={{
                  backgroundColor: '#add8e6',
                  color: '#000',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  borderRadius: '0.25rem',
                  transition: 'background-color 0.3s'
                }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3d3a9b'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#add8e6'}>
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Maintain space after the first hero area */}
      <div className="my-5"></div>

      {/* Second Hero Section with Images */}
      <div className="container-fluid px-0">
        <div className="row g-3 mb-4">
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '1rem' }}>
            <img src={image1} alt="Box 1" className="img-fluid" style={{ width: '80%', height: 'auto', objectFit: 'cover', padding: '1rem' }} />
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '1rem' }}>
            <img src={image2} alt="Box 2" className="img-fluid" style={{ width: '80%', height: 'auto', objectFit: 'cover', padding: '1rem' }} />
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '1rem' }}>
            <img src={image3} alt="Box 3" className="img-fluid" style={{ width: '80%', height: 'auto', objectFit: 'cover', padding: '1rem' }} />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="container-fluid px-0">
        <div className="row g-3 mb-4">
          <h2 className="text-center">Why Personal Banking</h2>
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '2rem' }}>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
              <li><strong>24/7 Accessibility:</strong><br /> <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>With online and mobile banking, customers can manage their accounts, make transactions, and access financial information anytime and anywhere.</span></li>
            </ul>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '2rem' }}>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
              <li><strong>Financial Advice:</strong><br /> <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>Personal bankers and financial advisors can provide personalized guidance and recommendations based on individual financial situations.</span></li>
            </ul>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '2rem'}}>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
              <li><strong>Fraud Protection:</strong><br /> <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>Banks implement advanced security measures to protect against unauthorized transactions and fraud.</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-light py-5 mt-5" style={{ backgroundColor: '#757394' }}>
        <div className="container">
          <div className="row">
            {/* First Column: Contact Us */}
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li><Link to="#" className="text-light">Login</Link></li>
              </ul>
            </div>

            {/* Second Column: Special Offers */}
            <div className="col-md-4">
              <h5>Special Offers</h5>
              <ul className="list-unstyled">
                <li><Link to="#" className="text-light">Business Banking</Link></li>
                <li><Link to="#" className="text-light">Commercial</Link></li>
                <li><Link to="#" className="text-light">About Us</Link></li>
              </ul>
            </div>

            {/* Third Column: Mortgages and Other Rates */}
            <div className="col-md-4">
              <h5>Mortgages and Other Rates</h5>
              <ul className="list-unstyled">
                <li><Link to="#" className="text-light">TD Websites</Link></li>
                <li><Link to="#" className="text-light">Investor's Edge</Link></li>
                <li><Link to="#" className="text-light">New to Canada</Link></li>
              </ul>
            </div>
          </div>

          {/* Branch/ATM Search and Meeting Buttons */}
          <div className="row mt-4">
            <div className="col-md-6 d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Enter address or postal code"
                style={{ width: '50%' }}
              />
              <button className="btn btn-danger ms-2">Find a branch or ATM</button>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button className="btn btn-danger me-2">Meet with us</button>
              <button className="btn btn-outline-light">Manage your meeting</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Personal;
