import React, { Component } from 'react';

// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
// https://daveceddia.com/ajax-requests-in-react/
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

// const inputParsers = {
//   date(input) {
//     const [month, day, year] = input.split('/');
//     return `${year}-${month}-${day}`;
//   },
//   uppercase(input) {
//     return input.toUpperCase();
//   },
//   trim(input) {
//     return input.trim();
//   },
//   number(input) {
//     return parseFloat(input);
//   },
// };

// Handle HTTP errors since fetch doesn't... :(
// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
function checkStatus(response) {
  if (response.ok) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(`Request rejected with status ${response.status}`);
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

    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://reactjs.org/docs/forms.html
  // Textarea does not implement pattern validation like `text` does.
  // A "required" value passes validation with only spaces.  This
  // adds back pattern validation.
  handleTextarea(event) {
    const pattern = event.target.getAttribute('pattern');

    // This will enable the pattern attribute on a textarea
    // and trigger the Html5 validation. It also takes into account
    // patterns that have the ^ or $ operators and does a global
    // match using the g Regex flag:
    if (typeof pattern !== typeof undefined && pattern !== false) {
      var patternRegex = new RegExp(
        '^' + pattern.replace(/^\^|\$$/g, '') + '$',
        'g'
      );

      const errorMessage = 'does not match the required pattern';
      const input = event.target.value;
      const hasError = !input.match(patternRegex);

      if (typeof event.target.setCustomValidity === 'function') {
        event.target.setCustomValidity(hasError ? errorMessage : '');
      }
    }
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

    // // run parsers
    // for (let name of data.keys()) {
    //   const input = form.elements[name];
    //   const parserName = input.dataset.parse;
    //   if (parserName) {
    //     const parser = inputParsers[parserName];
    //     const parsedValue = parser(data.get(name));
    //     data.set(name, parsedValue);
    //   }
    // }

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
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        // 'Content-Type': 'application/json; charset=utf-8',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data, // body data type must match headers
    })
      .then(checkStatus)
      .catch(error => {
        this.setState({ errorMsg: error.toString() });
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
  // TODO https://stackoverflow.com/questions/13643417/how-to-validate-pattern-matching-in-textarea
  render() {
    const { wasValidated } = this.state;

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
          className={wasValidated ? 'was-validated' : ''}
        >
          <div className="form-row">
            <div className="col-md-6 mb-3 offset-md-3">
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
                  autoFocus
                />
                <div className="invalid-feedback">Please enter your name.</div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              {/* email address */}
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
                <div className="valid-feedback">Looks good!</div>
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

              {/* hidden inputs */}
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
