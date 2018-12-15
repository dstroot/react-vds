/*
With React 16, we got a new feature called "error boundaries". They are 
special components that implement a few special lifecycle methods, and 
that work like big declarative catch blocks. With a bit of effort, we 
can even make them report ridiculously usable error messages to an 
API of your choosing!

> Note! Error boundaries doesn't catch errors in event handlers, 
async code or while doing server side rendering. Just a heads up!

*/

import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidMount() {
    window.onerror = this.logError;
  }

  componentDidCatch(...args) {
    this.logError(args);
  }

  logError(args) {
    // You can log the error to an error reporting service
    Sentry.captureException(JSON.stringify(args));

    // or to your own API
    // try {
    //   fetch('/error', {
    //     method: 'post',
    //     body: JSON.stringify(args)
    //   });
    // } catch (e) {
    //   /* noop */
    // }
  }

  render() {
    // if there is an error render a custom fallback UI
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong!</h1>
          <button
            className="btn btn-primary"
            onClick={() => Sentry.showReportDialog()}
          >
            Report feedback
          </button>
          <pre>{this.state.error}</pre>
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

// https://react.christmas/2018/14
