import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LazyImport from './components/LazyImport';

// routes
import * as routes from './constants/routes';

// pages
import PageLanding from './pages/PageLanding';
// import PageTerms from './pages/PageTerms';
// import PagePrivacy from './pages/PagePrivacy';
import PageAbout from './pages/PageAbout';
// import PageNotFound from './pages/PageNotFound';
// import PageContact from './pages/PageContact';
// import PageToast from './pages/PageToast';

// our main css
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

// lazy import page for code splitting
// const PageLanding = LazyImport(() => import('./pages/PageLanding'));
const PageTerms = LazyImport(() => import('./pages/PageTerms'));
const PagePrivacy = LazyImport(() => import('./pages/PagePrivacy'));
// const PageAbout = LazyImport(() => import('./pages/PageAbout'));
const PageNotFound = LazyImport(() => import('./pages/PageNotFound'));
const PageContact = LazyImport(() => import('./pages/PageContact'));
// const PageToast = LazyImport(() => import('./pages/PageToast'));

// library of Font Awesome Icons
library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);

const App = () => (
  <Fragment>
    <Navigation />
    <main role="main" className="flex-shrink-0 mt-5">
      <Switch>
        <Route exact path={routes.HOME} component={PageLanding} />
        <Route path={routes.TERMS} component={PageTerms} />
        <Route path={routes.PRIVACY} component={PagePrivacy} />
        <Route path={routes.ABOUT} component={PageAbout} />
        <Route path={routes.CONTACT} component={PageContact} />
        {/*<Route path={routes.TOAST} component={PageToast} />*/}
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
    </main>
    <Footer />
  </Fragment>
);

export default App;
