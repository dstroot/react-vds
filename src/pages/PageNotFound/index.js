import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

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
        <h1 className="mt-5 display-4 text-white">
          Oops... We can't find:{' '}
          <code className="text-danger">{location.pathname}</code>
        </h1>
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
