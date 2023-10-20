import React from "react";

function Footer() {
  return (
    <>
      <div className="my-20 footer-container">
        <footer className="footer grid lg:grid-cols-3 gap-20">
          <div className="footer__addr">
            <h1 className="footer__logo">MET Art Project</h1>
            <h2>Contact</h2>
            <address>
              Vancouver, BC
              <br />
              <a
                className="footer__btn"
                href="mailto:
              "
              >
                Email Us
              </a>
            </address>
          </div>
          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">Media</h2>
              <ul className="nav__ul">
                
              </ul>
            </li>
            <li className="nav__item nav__item--extra">
              <ul className="nav__ul nav__ul--extra">
                <li>
                  <a href="#">Software Design</a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <ul className="nav__ul">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="legal">
            <p>&copy; 2023 Something. All rights reserved.</p>
            <div className="legal__links">
              <span>
                Made with <span className="heart">♥</span> remotely from
                Anywhere
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
