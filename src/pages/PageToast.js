import React, { PureComponent } from 'react';
import ContactForm from 'ContactForm';

// notificatiions
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PageToast extends PureComponent {
  componentDidMount() {
    document.title = `Verite Data Science • Toast`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }

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
        <ContactForm />
        <div className="container mt-5">
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
