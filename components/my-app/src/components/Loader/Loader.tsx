import * as React from 'react';

import './Loader.css';

export function Loader() {
  return (
    <div className="timer-wrapper" data-testid="loader">
      <div className="container">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
        <div className="fourth"></div>
      </div>
    </div>
  );
}
