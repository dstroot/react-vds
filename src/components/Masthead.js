import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'logo.png';
import Particles from 'react-particles-js';
import ErrorBoundary from 'ErrorBoundary';
import * as routes from '../constants/routes';

// import 'animate.css' components
import 'animate.css/source/_base.css';
import 'animate.css/source/fading_entrances/fadeInDown.css';

const Masthead = () => {
  return (
    <main className="bd-masthead" id="content" role="main">
      <div className="container">
        <div className="row">
          <div className="col-5 mx-auto col-md-5 order-md-2 d-none d-md-block">
            <ErrorBoundary>
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 55,
                      density: {
                        enable: true,
                        value_area: 500,
                      },
                    },
                    color: {
                      value: '#7256ad',
                    },
                    shape: {
                      type: 'circle',
                      stroke: {
                        width: 1,
                        color: '#7256ad',
                      },
                      polygon: {
                        nb_sides: 5,
                      },
                    },
                    opacity: {
                      value: 0.9,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 0.5,
                        opacity_min: 0.1,
                        sync: false,
                      },
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 30,
                        size_min: 0.1,
                        sync: false,
                      },
                    },
                    line_linked: {
                      enable: true,
                      distance: 110,
                      color: '#7256ad',
                      opacity: 0.9,
                      width: 1,
                    },
                    move: {
                      enable: true,
                      speed: 2,
                      direction: 'none',
                      random: true,
                      straight: false,
                      out_mode: 'out',
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                      },
                    },
                  },
                  retina_detect: true,
                }}
                className={'canvas-container'}
              />
            </ErrorBoundary>
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
              business transformation happen. As technology rapidly evolves,
              it’s more important than ever to have an innovation advisor on
              your side. Whether it’s time to create a new vision or put one
              into place, we can help.
            </p>
            <div className="d-flex flex-column flex-md-row lead mb-3">
              <NavLink
                to={routes.ABOUT}
                className="btn btn-lg btn-outline-primary mt-3 mb-2 mb-md-0 mr-md-2"
              >
                About Verite Data Science
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Masthead;
