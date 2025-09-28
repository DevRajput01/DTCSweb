import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo + Tagline */}
        <div className="footer-logo">
          <h3>DTCS</h3>
          <p>
            Your trusted partner for complete architectural, construction, and
            interior solutions. We deliver quality, precision, and excellence
            under one roof.
          </p>
        </div>

        {/* Sections */}
        <div className="footer-sections">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Investor Relations</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Anti-discrimination Policy</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>For Customers</h3>
            <ul>
              <li>DTCS Reviews</li>
              <li>Our Projects Near You</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <div className="app-buttons">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 DTCS Enterprises Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
