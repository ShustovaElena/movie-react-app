import * as React from 'react';
import { ILoader } from '../../types';

import './Loader.css';

class Loader extends React.Component<ILoader> {
  constructor(props: ILoader) {
    super(props);
    this.timeout = this.timeout.bind(this);
  }

  timeout() {
    setTimeout(() => {
      this.props.removeLoader();
    }, 3000);
  }

  componentDidMount() {
    this.timeout();
  }

  render() {
    return (
      <div className="timer-wrapper" data-testid="loader">
        <div className="timer">
          <div className="timer__line"></div>
          <div className="timer__body">
            <div className="timer__counter">
              <span>3</span>
              <span>2</span>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
