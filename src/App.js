import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// pages
import PageLanding from './components/PageLanding';
import PageTerms from './components/PageTerms';
import PagePrivacy from './components/PagePrivacy';
import PageAbout from './components/PageAbout';
import PageNotFound from './components/PageNotFound';

// other assets
// import './main.min.css';
import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Switch>
          {/* if the path matches the component will render */}
          <Route exact path="/" component={PageLanding} />
          <Route path="/terms" component={PageTerms} />
          <Route path="/privacy" component={PagePrivacy} />
          <Route path="/about" component={PageAbout} />
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

        <Footer />
      </div>
    );
  }
}

export default App;
