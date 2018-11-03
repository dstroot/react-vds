import { PureComponent } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);

// import { useEffect } from 'react';
// import { withRouter } from 'react-router';
//
// const ScrollToTop = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });
//   return this.props.children;
// };
//
// export default withRouter(ScrollToTop);
