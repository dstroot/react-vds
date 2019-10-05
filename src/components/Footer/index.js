import React from 'react';
import { Link } from '@reach/router';
import * as routes from '../../constants/routes';

const Footer = () => {
  const year = new Date(); // evergreen copyright year

  return (
    <footer className="bg-gray-lighter text-secondary mt-auto py-3">
      <div className="container font-weight-light">
        <div className="row py-3">
          <div className="col-sm-8">
            <h4>About Us</h4>
            <p className="my-2">
              We support the digital journey of employees, data, software, and
              infrastructure to cloud-native technologies.
            </p>
          </div>
          <div className="col-sm-4">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to={routes.CONTACT}>Contact Us</Link>
              </li>
              <li>
                <Link to={routes.PRIVACY}>Privacy</Link>
              </li>
              <li>
                <Link to={routes.TERMS}>Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <p className="small">
              Copyright © {year.getFullYear()} Verite Data Science, LLC, all
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
