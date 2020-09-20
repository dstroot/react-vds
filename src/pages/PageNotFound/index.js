import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// routing
import { Link, useLocation } from 'react-router-dom';
import * as routes from '../../constants/routes';

const PageNotFound = ({ image }) => {
  let location = useLocation();

  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • 404`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="d-flex justify-content-center color-wash">
        <div>
          <h1 className="mt-5 display-4 text-white display-block">
            Oops... We can't find:{' '}
            <code className="text-danger">{location.pathname}</code>
          </h1>
          <h3 className="mt-5 display-5 text-white">
            Try these pages instead:
          </h3>
          <h4 className="text-white">
            <Link to={routes.HOME}>Home</Link>
            {'   '}
            <span className="text-secondary font-weight-light">
              Ours, not yours
            </span>
          </h4>
          <h4 className="text-white">
            <Link to={routes.CONTACT}>Contact Us</Link>
            {'   '}
            <span className="text-secondary font-weight-light">
              Reach out, we are pretty cool
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

// https://codeburst.io/validating-props-easily-with-react-proptypes-96e80208207
PageNotFound.propTypes = {
  image: PropTypes.string,
};

PageNotFound.defaultProps = {
  image: 'https://i.giphy.com/media/sMABNWsUWPC1y/giphy.gif',
};

export default PageNotFound;
