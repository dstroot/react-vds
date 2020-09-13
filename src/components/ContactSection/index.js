import React from 'react';

// router
import { Link } from 'react-router-dom';
import * as routes from 'constants/routes';

// import SVG files directly as React components. The ReactComponent import
// name is special and tells Create React App that you want a React
// component that renders an SVG, rather than its filename.
import { ReactComponent as Robot } from './media/robot.svg';

const ContactSection = () => (
  <div className="position-relative overflow-hidden p-2 p-md-5 m-md-3 text-center">
    <div className="col-md-7 p-lg-2 mx-auto my-5">
      <h1 className="display-4 text-primary">Get in Touch</h1>
      <p className="lead">
        Verite Data Science is providing customized solutions for both startups
        and Fortune 100 companies. Get in touch to see how we can help.
      </p>
      <div className="svg-container mx-auto">
        <Robot />
      </div>
      <br />
      <Link className="btn btn-lg btn-outline-secondary" to={routes.CONTACT}>
        Contact Us
      </Link>
    </div>
  </div>
);

export default ContactSection;
