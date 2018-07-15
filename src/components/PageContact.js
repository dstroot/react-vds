import React, { Component } from 'react';
import { validateResponse } from '../utils/fetchUtils';
import { formToJSONString } from '../utils/formUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
// https://daveceddia.com/ajax-requests-in-react/
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

class PageContact extends Component {
  constructor() {
    super();
    this.state = {
      valid: true,
      submitted: false,
      successfulSubmit: false,
      message: '',
    };

    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://reactjs.org/docs/forms.html
  // `Textarea` does not implement pattern validation like `text` does.
  // A "required" value passes validation with *only* spaces. This function
  // will enable the pattern attribute on a textarea and trigger
  // HTML5 validation. TODO extract to formUtils
  handleTextarea(event) {
    const errorMessage = 'input does not match the required pattern';
    const pattern = event.target.getAttribute('pattern');
    const input = event.target.value;

    // Handles patterns that have the ^ or $ operators and does
    // a global match using the g Regex flag:
    if (typeof pattern !== typeof undefined && pattern !== false) {
      var patternRegex = new RegExp(
        '^' + pattern.replace(/^\^|\$$/g, '') + '$',
        'g'
      );

      const hasError = !input.match(patternRegex);
      if (typeof event.target.setCustomValidity === 'function') {
        event.target.setCustomValidity(hasError ? errorMessage : '');
      }
    }
  }

  renderSuccess() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-3">
          <div className="notification-custom-success rounded">
            <div className="notification-custom-icon rounded">
              <FontAwesomeIcon icon="check-circle" size="3x" />
            </div>
            <div className="notification-custom-content">
              <p className="notification-title">Thank You</p>
              <p className="notification-message">We will be in touch soon!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderFailure() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-3">
          <div className="notification-custom-failure rounded">
            <div className="notification-custom-icon rounded">
              <FontAwesomeIcon icon="exclamation-triangle" size="3x" />
            </div>
            <div className="notification-custom-content">
              <p className="notification-title">Bummer</p>
              <p className="notification-message">Something went wrong!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    // NOTE: When you add name attributes to your inputs, you add structure
    // to your form. This structure can be serialized by the native FormData
    // interface (basic support in all browsers and IE10+). All you do is
    // pass in a form element (which we access via event.target) to the
    // FormData constructor and you get a serialized interpretation of the
    // inputs which can be sent to the server.

    // get form
    const form = event.target;

    // check form data validity first
    if (!form.checkValidity()) {
      this.setState({ valid: false });
      // remove focus on button
      if (document.activeElement !== document.body)
        document.activeElement.blur();
      return;
    }
    this.setState({ valid: true });

    // convert form data to JSON
    const json = formToJSONString(form);

    // // run parsers
    // const data = new formData(form)
    // for (let name of data.keys()) {
    //   const input = form.elements[name];
    //   const parserName = input.dataset.parse;
    //   if (parserName) {
    //     const parser = inputParsers[parserName];
    //     const parsedValue = parser(data.get(name));
    //     data.set(name, parsedValue);
    //   }
    // }

    // fetch to post data
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // https://formspree.io/
    fetch('//formspree.io/dan.stroot@veritedatascience.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: json,
    })
      .then(validateResponse)
      .then(res => {
        // Update state to trigger a re-render.
        this.setState({
          submitted: true,
          successfulSubmit: true,
          message: `Thanks! We'll be in touch!`,
        });
        form.reset();
        // remove focus on button
        if (document.activeElement !== document.body)
          document.activeElement.blur();
        return;
      })
      .catch(error => {
        this.setState({
          submitted: true,
          successfulSubmit: false,
          message: `Something went wrong. ${error.toString()}`,
        });
        form.reset();
        // remove focus on button
        if (document.activeElement !== document.body)
          document.activeElement.blur();
        return;
      });
  }

  // Don’t add an onClick listener to the button. If we did, we would
  // not be able to respond to submit events triggered from the keyboard
  // (by pressing enter). That’s bad UX. By using the onSubmit callback
  // we cover both cases.
  render() {
    const { valid, submitted, successfulSubmit } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center mt-5 bd-text-purple-bright">
            <h2 className="font-weight-light">Thanks for Reaching Out!</h2>
            <p className="lead">
              We would love to meet and learn more about your team, your unique
              environment, and your planned journey.
            </p>
          </div>
        </div>

        <form
          onSubmit={this.handleSubmit}
          noValidate
          className={!valid ? 'was-validated' : ''}
        >
          <div className="form-row">
            <div className="col-md-6 offset-md-3">
              {/* hidden inputs */}
              <input type="text" name="_gotcha" className="invisible" />
              <input type="hidden" name="_subject" value="Website Contact" />

              <h3 className="mt-3 font-weight-light">Contact Us:</h3>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Please enter your name"
                  pattern=".*\S+.*"
                  data-parse="trim"
                  required
                />
                <div className="invalid-feedback">Please enter your name.</div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              {/* email address */}
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="you@youremail.com"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              {/* phone */}
              <div className="form-group">
                <label htmlFor="email">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="form-control"
                  placeholder="123-456-7890"
                />
                <div className="invalid-feedback">
                  Please enter a valid phone number.
                </div>
                <div className="valid-feedback">optional</div>
              </div>

              {/* message area */}
              <div className="form-group">
                <label htmlFor="email">Short Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Please enter a short message"
                  pattern=".*\S+.*"
                  data-parse="trim"
                  required
                  onChange={this.handleTextarea}
                />
                <div className="invalid-feedback">
                  Please let us know how we can help!
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon="check" /> &nbsp; Submit
              </button>
            </div>
          </div>
        </form>

        {submitted && successfulSubmit ? this.renderSuccess() : ''}
        {submitted && !successfulSubmit ? this.renderFailure() : ''}
      </div>
    );
  }
}

export default PageContact;
