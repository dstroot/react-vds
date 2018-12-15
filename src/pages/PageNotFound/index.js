import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const PageNotFound = ({ image }) => {
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
        <h1 className="mt-5 display-3 text-white">Oops... 404</h1>
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
