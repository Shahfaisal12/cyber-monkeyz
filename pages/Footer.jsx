import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="Footer-section py-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex flex-wrap justify-content-between align-items-end">
              <div className="contact-sec">
                <div className="title">Contact</div>
                <p className="mb-0">F: 123-456-7890</p>
                <p className="mb-0"> info@mysite.com</p>
              </div>
              <div className="social-icons d-flex flex-wrap align-items-center">
                <Link href="/" passHref>
                  <img
                    src="assets/footer/social-1.png"
                    className="img-fluid"
                    width="40px"
                    alt=""
                  />
                </Link>
                <Link href="/" passHref>
                  <img
                    src="assets/footer/social-2.png"
                    className="img-fluid"
                    width="40px"
                    alt=""
                  />
                </Link>
                <Link href="/" passHref>
                  <img
                    src="assets/footer/social-3.png"
                    className="img-fluid"
                    width="40px"
                    alt=""
                  />
                </Link>
                <Link href="/" passHref>
                  <img
                    src="assets/footer/social-4.png"
                    className="img-fluid"
                    width="40px"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
