import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-dark text-center mt-5">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Environmental</a>
                </li>
                <li>
                  <a href="#">Portraits</a>
                </li>
                <li>
                  <a href="#">Nature</a>
                </li>
                <li>
                  <a href="#">MOTION</a>
                </li>
                <li>
                  <a href="#">SHADOWS & LIGHT</a>
                </li>
                <li>
                  <a href="#">FIRE & ICE</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 item">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 item">
              <h3>Contact & Support</h3>
              <ul>
                <li>
                  <span>
                    <i className="fas fa-phone"></i>+88 00 00 00 00
                  </span>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-comments"></i>Live chat
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-envelope"></i>Contact us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-star"></i>Give feedback
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 item text">
              <h3>WildQuestLens</h3>
              <p>
                I picked up a camera one day and never put it down. I love to
                save moments in photography. Keep them around for generations to
                come.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <div className="copyright">
            {" "}
            <p>
              {" "}
              &copy;Copyright {year} &#64; All Rights Reserved by{" "}
              <a href="https://github.com/programming-hero-web-course-4/independent-service-provider-shova29">
                {" "}
                WildQuestLens
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
