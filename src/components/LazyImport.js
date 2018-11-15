import React, { Suspense, lazy } from 'react';

function LazyImport(Component) {
  const ComponentLoadable = lazy(Component);
  return props => (
    <Suspense
      fallback={
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="lead mt-5">Loading...</p>
            </div>
          </div>
        </div>
      }
    >
      <ComponentLoadable {...props} />
    </Suspense>
  );
}

export default LazyImport;
