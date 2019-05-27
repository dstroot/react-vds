import React from 'react';
import { Link } from '@reach/router';
import logo from 'media/logo.png';
import ParticlesPanel from 'components/ParticlesPanel';
import * as routes from 'constants/routes';

// import 'animate.css' components
import 'animate.css/source/_base.css';
import 'animate.css/source/fading_entrances/fadeInDown.css';

const Masthead = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 mx-auto col-md-5 order-md-2 d-none d-md-block">
          <ParticlesPanel />
        </div>
        <div className="col-md-7 order-md-1 text-center text-md-left pr-md-5">
          <h1 className="display-4 mb-3 animated fadeInDown text-primary">
            <img
              className="d-inline-block align-top"
              src={logo}
              width="50"
              height="50"
              alt=""
            />{' '}
            Verite Data Science
          </h1>
          <p className="lead text-primary">INNOVATION, POWERED BY DATA</p>
          <p className="lead">
            Our clients demand deep industry knowledge and experience, coupled
            with innovation and the ability to roll up our sleeves and make
            business transformation happen. As technology rapidly evolves, it’s
            more important than ever to have an innovation advisor on your side.
            Whether it’s time to create a new vision or put one into place, we
            can help.
          </p>
          <div className="d-flex flex-column flex-md-row lead mb-3">
            <Link
              to={routes.ABOUT}
              className="btn btn-lg btn-outline-primary mt-3 mb-2 mb-md-0 mr-md-2"
            >
              About Verite Data Science
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
