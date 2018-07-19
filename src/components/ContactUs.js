import React from 'react';
import bg from 'startup-3.jpg';

const ContactUs = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden p-2 p-md-5 m-md-3 text-center bd-text-purple-bright">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4">Punny headline</h1>
          <p className="lead">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple's marketing pages.
          </p>
          <a className="btn btn-lg btn-outline-secondary" href="/">
            Coming soon
          </a>
        </div>
        {/* <div className="product-device box-shadow d-none d-md-block" />
        <div className="product-device product-device-2 box-shadow d-none d-md-block" /> */}
      </div>

      <div
        className="hero text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="row align-items-center p-2">
            <div className="col-md-6 offset-md-6 p-lg-5 my-5">
              <h6 className="text-uppercase bd-text-purple-bright">
                High Praise
              </h6>
              <h2 className="font-weight-light">
                “Go Analytics is amazing. Decisions that used to take weeks, now
                only takes minutes and is available to everyone on my team.”
              </h2>
              <p className="font-weight-light">
                Cindy Smith, founder of Cool Startup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
