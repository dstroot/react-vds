import React from 'react';
import PropTypes from 'prop-types';

import './PageNotFound.css';

function PageNotFound(props) {
    const {image} = props;
    return (
      <div className="FourOhFour">
        <div className="bg" style={{ backgroundImage: 'url(' + image + ')'}}></div>
        <h1 className="code">404</h1>
      </div>
    )
}

// https://codeburst.io/validating-props-easily-with-react-proptypes-96e80208207
PageNotFound.propTypes = {
  image:PropTypes.string
};

PageNotFound.defaultProps = {
  image: 'https://i.giphy.com/media/sMABNWsUWPC1y/giphy.gif'
}

export default PageNotFound;
