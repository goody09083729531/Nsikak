import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Nsikak</h4>
            <ul>
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li><a>Shop</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a>FAQ</a></li>
              <li><a>Delivery Fees and Methods</a></li>
              <li><a>Payment Options</a></li>
              <li><a>Returns</a></li>
              <li><p>E-Mail: ndiana@gmail.com</p></li>
              <li><p>Phone No: +234-907-465-5568</p></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Online Shop</h4>
            <ul>
              <li><a>Phones</a></li>
              <li><a>Laptops</a></li>
              <li><a>Speakers</a></li>
              <li><a>Air Pods</a></li>
              <li><a>Many More...</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit Us On</h4>
            <div className="social-links">
              <a><i className="fab fa-facebook-f"></i></a>
              <a><i className="fab fa-twitter"></i></a>
              <a><i className="fab fa-instagram"></i></a>
              <a><i className="fab fa-linkedin-in"></i></a>
            </div>

            <div className="social-links">
              <a><i className="fas fa-envelope"></i></a>
              <a><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer