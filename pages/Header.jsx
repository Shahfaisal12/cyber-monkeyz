import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header-section">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <img
              src="assets/logo.png"
              className="img-fluid"
              width="150"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href="/strategy"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/contactUs" passHref>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
