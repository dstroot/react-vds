import React, { Component } from 'react';
import ContactUs from 'ContactUs';
import { Helmet } from 'react-helmet';

// notificatiions
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PageToast extends Component {
  addNotification = event => {
    this.notificationDOMRef.addNotification({
      width: 330,
      content: (
        <div className="notification-custom-success">
          <div className="notification-custom-icon">
            <FontAwesomeIcon icon="check-circle" size="3x" />
          </div>
          <div className="notification-custom-content">
            <p className="notification-title">Thank You</p>
            <p className="notification-message">We will be in touch soon!</p>
          </div>
        </div>
      ),
      type: 'success',
      insert: 'bottom',
      container: 'bottom-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: { duration: 6000 },
      dismissable: { click: true },
    });
    // remove focus on button
    event.target.blur();
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Verite Data Science &middot; Toast</title>
        </Helmet>
        <ContactUs />
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <ReactNotification
                ref={input => (this.notificationDOMRef = input)}
              />
              <button
                onClick={this.addNotification}
                className="btn btn-primary"
              >
                Add Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageToast;
