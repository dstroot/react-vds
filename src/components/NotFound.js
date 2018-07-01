import React from 'react';
import './NotFound.css';

function NotFound(props) {
    const {image} = props;
    return (
      <div className="FourOhFour">
        <div className="bg" style={{ backgroundImage: 'url(' + image + ')'}}></div>
        <h1 className="code">404</h1>
      </div>
    )
}

export default NotFound;
