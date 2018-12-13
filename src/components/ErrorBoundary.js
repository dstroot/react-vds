import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    this.setState({ hasError: true });

    // You can also log the error to an error reporting service
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong!</h1>
          <button
            className="btn btn-primary"
            onClick={() => Sentry.showReportDialog()}
          >
            Report feedback
          </button>
        </div>
      );
    }
    //when there's not an error, render children untouched
    return this.props.children;
  }
}

export default ErrorBoundary;

// https://sentry.io

// Sentry.init({
//  dsn: "https://06204478c5534bb9b2eac6a0315895c0@sentry.io/1342447"
// });
// should have been called before using it here
// ideally before even rendering your react app
