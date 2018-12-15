import React from 'react';
import Particles from 'react-particles-js';
import ErrorBoundary from 'ErrorBoundary';

// particles configuration
// https://vincentgarreau.com/particles.js/
import config from './particles-config.json';

const ParticlesPanel = () => (
  <ErrorBoundary>
    <Particles params={config} className={'canvas-container'} />
  </ErrorBoundary>
);

export default ParticlesPanel;
