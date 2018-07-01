import React from 'react';
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

export default PageNotFound;
