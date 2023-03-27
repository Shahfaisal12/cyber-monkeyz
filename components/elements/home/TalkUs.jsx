import React from "react";
import Link from "next/link";
import styletalk from "../../../styles/Home.module.scss";

const TalkUs = () => {
  return (
    <div className={`${styletalk.talkUs_section} pb-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className={styletalk.bg_talkus}  >
              <div className="d-flex gap-3 align-items-center justify-content-center">
                <svg
                  role="presentation"
                  aria-hidden="true"
                  data-type="color"
                  viewBox="45 50 110 100"
                  height="100"
                  width="100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <style>
                      {`#comp-leqn5jky svg [data-color="1"] {
              fill: '#25318D'
            }
            #comp-leqn5jky svg [data-color="2"] {
              fill: '#FF4040'
            }`}
                    </style>
                  </defs>
                  <g>
                    <path
                      d="M148.643 97.549C148.026 71.227 126.451 50 100 50S51.975 71.227 51.358 97.549c-3.856 2.958-6.358 7.6-6.358 12.827 0 8.514 6.613 15.496 14.967 16.113 8.415 12.161 22.237 20.278 38.163 20.881l.128.003a3.335 3.335 0 0 0 3.329-3.21 3.335 3.335 0 0 0-3.206-3.46c-12.571-.476-23.623-6.377-30.976-15.411 5.821-2.449 9.92-8.212 9.92-14.916 0-8.918-7.251-16.174-16.163-16.174-1.011 0-1.996.105-2.956.284C60.328 73.283 78.261 56.672 100 56.672c21.739 0 39.672 16.611 41.793 37.814a16.1 16.1 0 0 0-2.956-.284c-8.912 0-16.163 7.256-16.163 16.174s7.251 16.174 16.163 16.174c8.912 0 16.163-7.256 16.163-16.174 0-5.226-2.501-9.868-6.357-12.827zm-87.48 3.392c5.199 0 9.429 4.232 9.429 9.435 0 4.408-3.041 8.109-7.131 9.14a9.367 9.367 0 0 1-2.298.295 9.378 9.378 0 0 1-6.073-2.229 9.417 9.417 0 0 1-2.944-9.956 9.467 9.467 0 0 1 5.949-6.161 9.34 9.34 0 0 1 3.068-.524zm77.674 18.87c-5.199 0-9.429-4.232-9.429-9.435 0-5.202 4.23-9.435 9.429-9.435s9.429 4.232 9.429 9.435c-.001 5.202-4.23 9.435-9.429 9.435z"
                      fill="#0E4828"
                      data-color="1"
                    ></path>
                    <path
                      d="M100 132.077c-4.938 0-8.956 4.02-8.956 8.961S95.062 150 100 150s8.956-4.02 8.956-8.961-4.018-8.962-8.956-8.962z"
                      fill="#E98866"
                      data-color="2"
                    ></path>
                  </g>
                </svg>
                <div className={styletalk.title}>Talk to us..</div>
              </div>
              <p className="my-4 text-center">
                Would you like to learn more about our services, find out how we
                could help your business grow, or schedule a meeting?
              </p>

              <div className="text-center">
                <Link
                  href="/contactUs"
                  className={`${styletalk.btn_contact} btn`}
                  passHref
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkUs;
