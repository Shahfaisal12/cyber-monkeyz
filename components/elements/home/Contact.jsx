import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-none d-md-block">
              <div className="img-section" data-aos="fade-right">
                <img
                  src="assets/monkey-head.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-8">
              <h1 className="title mb-5" data-aos="fade-left">Let's get in touch..</h1>
              <div className="mail-section" data-aos="flip-down">
                <form>
                  <div className="d-flex gap-4 justify-content-between">
                    <div class="form-group row w-100">
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Name:
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="inputName"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="form-group row w-100">
                      <label for="inputEmail" class="col-sm-4 col-form-label">
                        Email:
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-4 justify-content-between mt-3">
                    <div class="form-group row w-100">
                      <label
                        for="inputCopanyName"
                        class="col-sm-4 col-form-label"
                      >
                        Company name:
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="inputCopanyName"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="form-group row w-100">
                      <label for="inputPhone" class="col-sm-4 col-form-label">
                        Phone:
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="inputPhone"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <label for="exampleFormControlTextarea1">Message:</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="row mt-3 text-center">
                <div className="col-md-6">
                  <div className="contact-footer" data-aos="fade-left">
                    http://info@cybermonkey.net
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-footer" data-aos="fade-right">Phone: +31641884661</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bg py-4"> </div>
    </>
  );
};

export default Contact;
