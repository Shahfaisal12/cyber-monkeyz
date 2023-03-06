import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header-section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
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
                    href="/"
                    className="nav-link"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <div className="dropdown-parent">
                <li className="nav-item">
                  <Link
                    href="/strategy"
                    className="nav-link"
                    aria-current="page"
                  >
                    Services
                  </Link>

                  <div className="dropdown-list">
                    <ul>
                      <li>
                        <Link
                          href="/"
                          className=""
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className=""
                        >
                          Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className=""
                        >
                          Content
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className=""
                        >
                          Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                </div>
                <li className="nav-item">
                  <a className="nav-link" href="/work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/log">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contactUs" passHref>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
