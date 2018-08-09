import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// pages
import PageLanding from './pages/PageLanding';
import PageTerms from './pages/PageTerms';
import PagePrivacy from './pages/PagePrivacy';
import PageAbout from './pages/PageAbout';
import PageNotFound from './pages/PageNotFound';
import PageContact from './pages/PageContact';
import PageToast from './pages/PageToast';

// routes
import * as routes from './constants/routes';

// css
import './scss/main.scss';

// Font Awesome
// https://fontawesome.com/icons?d=gallery
// https://github.com/FortAwesome/react-fontawesome
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
// library of Font Awesome Icons
library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);

class App extends Component {
  render() {
    return (
      <div className="site">
        <Navigation className="site-header" />

        <div className="site-content site-content--full">
          {/* <Navigation /> */}
          <Switch>
            {/* if the path matches the component will render */}
            <Route exact path={routes.HOME} component={PageLanding} />
            <Route path={routes.TERMS} component={PageTerms} />
            <Route path={routes.PRIVACY} component={PagePrivacy} />
            <Route path={routes.ABOUT} component={PageAbout} />
            <Route path={routes.CONTACT} component={PageContact} />
            <Route path={routes.TOAST} component={PageToast} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route
              component={props => (
                <PageNotFound
                  {...props}
                  image={'https://i.giphy.com/media/sMABNWsUWPC1y/giphy.gif'}
                />
              )}
            />
          </Switch>
        </div>

        <Footer className="site-footer" />
      </div>
    );
  }
}

export default App;
