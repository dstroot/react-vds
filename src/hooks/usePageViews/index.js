import React from 'react';
import { useLocation } from 'react-router-dom';

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    // ga.send(['pageview', location.pathname]);
    console.log('pageview: ' + location.pathname);
  }, [location]);
}

export default usePageViews;
