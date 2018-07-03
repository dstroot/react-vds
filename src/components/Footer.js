import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
  // evergreen copyright year
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="bg-gray-lighter text-secondary mt-4">
      <div className="container font-weight-light">
        <div className="row py-3">
          <div className="col-sm-8">
            <h4>About Us</h4>
            <p className="my-2">We support the digital journey of employees, data, software, and infrastructure to cloud-native technologies.</p>
          </div>
          <div className="col-sm-4">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink to='/privacy'>Privacy</NavLink>
              </li>
              <li> 
                <NavLink to='/terms'>Terms of Use</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <p className="small">Copyright © {year} Verite Data Science, LLC, all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
