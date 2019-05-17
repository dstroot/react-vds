import React from 'react';

// Context lets us pass a value deep into the component tree
const FlashContext = React.createContext({});

export const FlashConsumer = FlashContext.Consumer;

export class FlashProvider extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      showFlash: false, // whether or not to return html or null
      message: '', // The message within the notification
      type: '', // Success or error notification type
      setMessage: this.setMessage, // The function to update the state
      dismiss: this.dismiss, // The function to update the state
    };
  }

  setMessage = (message, type) => {
    // Update the state
    this.setState({
      ...this.state,
      showFlash: true,
      message,
      type,
    });

    // After 3 seconds change the state to hide the notification
    setTimeout(() => {
      this.setState({
        ...this.state,
        showFlash: false,
      });
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  dismiss = () => {
    // Update the state
    this.setState({
      ...this.state,
      showFlash: false,
    });
  };

  render() {
    /* Now that we have created a class that contains the state and functions 
      we want to be global we turn it into a context provider by returning a 
      Provider from the context we created earlier, and we pass the state as 
      the value and render the children so that any children within the 
      ContextProvider have access to the value (this.state).
    */
    return (
      <FlashContext.Provider value={this.state}>
        {this.props.children}
      </FlashContext.Provider>
    );
  }
}

export default FlashContext;
