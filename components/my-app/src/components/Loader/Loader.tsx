import * as React from 'react';

import './Loader.css';

class Loader extends React.Component {
  render() {
    return (
      <div className="timer-wrapper" data-testid="loader">
        <div className="container">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
          <div className="fourth"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
