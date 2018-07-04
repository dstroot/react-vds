import React from 'react';
import { NavLink } from 'react-router-dom';
import ParticlesComp from './ParticlesComp';
import logo from '../media/logo.png';

const Masthead = () => {
  return (
    <main className="bd-masthead" id="content" role="main">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto col-md-6 order-md-2 d-none d-md-block">
            <ParticlesComp />
          </div>
          <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
            <h1 className="display-4 mb-3 animated fadeInDown bd-text-purple-bright">
              <img
                className="d-inline-block align-top"
                src={logo}
                width="50"
                height="50"
                alt=""
              />{' '}
              Verite Data Science
            </h1>
            <p className="lead bd-text-purple-bright">
              INNOVATION, POWERED BY DATA
            </p>
            <p className="lead">
              Our clients demand deep industry knowledge and experience, coupled
              with innovation and the ability to roll up our sleeves and make
              business transformation happen. As technology rapidly evolves,
              it’s more important than ever to have an innovation advisor on
              your side. Whether it’s time to create a new vision or put one
              into place, we can help.
            </p>
            <div className="d-flex flex-column flex-md-row lead mb-3">
              <NavLink
                to="/about"
                className="btn btn-lg btn-bd-purple mb-3 mb-md-0 mr-md-3"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Masthead;
