import React from 'react';

const useWindowSize = () => {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () =>
    setSize({ width: window.innerWidth, height: window.innerHeight });

  React.useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

export default useWindowSize;
