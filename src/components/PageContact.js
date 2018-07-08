import React, { Component } from 'react';

// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
// https://daveceddia.com/ajax-requests-in-react/
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  trim(input) {
    return input.trim();
  },
  number(input) {
    return parseFloat(input);
  },
};

// Handle HTTP errors since fetch doesn't
// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
function checkStatus(res) {
  if (res.ok) {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      throw new Error(`Request rejected with status ${res.status}`);
    }
  }
  throw new Error('Network response was not ok.');
}

class PageContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasValidated: false,
      errorMsg: '',
      successMsg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // clean up state
    this.setState({ successMsg: '' });
    this.setState({ errorMsg: '' });

    // NOTE: When you add name attributes to your inputs, you add structure
    // to your form. This structure can be serialized by the native FormData
    // interface (basic support in all browsers and IE10+). All you do is
    // pass in a form element (which we access via event.target) to the
    // FormData constructor and you get a serialized interpretation of the
    // inputs which can be sent to the server.

    // get form data
    const form = event.target;
    const data = new FormData(form);

    // run parsers
    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
      }
    }

    // check form data validity
    if (!form.checkValidity()) {
      this.setState({ wasValidated: true });
      return;
    } else {
      this.setState({ wasValidated: false });
    }

    // fetch to post data
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // https://formspree.io/
    fetch('//formspree.io/dan.stroot@veritedatascience.com', {
      method: 'POST',
      body: data,
    })
      .then(checkStatus)
      .catch(err => {
        this.setState({ errorMsg: err.toString() });
      });

    // all done
    if (this.state.errorMsg === '') {
      this.setState({
        successMsg: `Thanks! We'll be in contact soon!`,
      });
    }
    form.reset();
  }

  // Don’t add an onClick listener to the button. If we did, we would
  // not be able to respond to submit events triggered from the keyboard
  // (by pressing enter). That’s bad UX. By using the onSubmit callback
  // we cover both cases.
  render() {
    const { wasValidated } = this.state;

    return (
      <div className="container">
        <div className="position-relative bd-text-purple-bright">
          <div className="col-md-10 mx-auto mt-5">
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
          className={wasValidated ? 'was-validated' : ''}
        >
          <div className="form-row">
            <div className="col-md-6 mb-3 offset-md-3">
              <h3 className="mt-3 font-weight-light">Contact Us:</h3>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Please enter your name"
                  data-parse="trim"
                  required
                />
                <div className="invalid-feedback">Please enter your name.</div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  name="_replyto"
                  type="email"
                  className="form-control"
                  placeholder="Please enter your email"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Short Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Please enter a short message"
                  data-parse="trim"
                  required
                />
                <div className="invalid-feedback">
                  Please let us know how we can help!
                </div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <input type="hidden" name="_subject" value="Website Contact" />
              <input type="text" name="_gotcha" className="invisible" />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        {/* feedback area */}
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {this.state.errorMsg && (
              <p className="lead mt-2 text-error">{this.state.errorMsg}</p>
            )}
            {this.state.successMsg && (
              <p className="lead mt-2 text-success">{this.state.successMsg}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;