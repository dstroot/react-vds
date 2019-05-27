import React from 'react';
import bg from 'media/startup-3.jpg';

const HeroSection = () => {
  return (
    <div className="hero text-white" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center p-2">
          <div className="col-md-6 offset-md-6 p-lg-5 my-5">
            <h6 className="text-uppercase bd-text-purple-bright">
              High Praise
            </h6>
            <h2 className="font-weight-light">
              “Go Analytics is amazing. Decisions that used to take weeks, now
              only takes minutes and is available to everyone on my team.”
            </h2>
            <p className="font-weight-light">
              Cindy Smith, founder of Cool Startup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
