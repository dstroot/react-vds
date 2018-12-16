import React from 'react';
import ContactForm from 'ContactForm';

const PageContact = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center mt-5">
        <h2 className="font-weight-light text-primary">
          Thanks for Reaching Out!
        </h2>
        <p className="lead">
          We would love to meet and learn more about your team, your unique
          environment, and your planned journey.
        </p>
      </div>
    </div>

    <ContactForm />
  </div>
);

export default PageContact;
