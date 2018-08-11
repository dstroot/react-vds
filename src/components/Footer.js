import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../constants/routes';

const Footer = () => {
  const year = new Date(); // evergreen copyright year
  return (
    <footer className="bg-gray-lighter text-secondary mt-auto py-3">
      <hr />
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
                <NavLink to={routes.CONTACT}>Contact Us</NavLink>
              </li>
              <li>
                <NavLink to={routes.PRIVACY}>Privacy</NavLink>
              </li>
              <li>
                <NavLink to={routes.TERMS}>Terms of Use</NavLink>
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
