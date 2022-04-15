import React from 'react';
import { IStock } from '../../types';

import './Switcher.css';

class Switcher extends React.Component<IStock> {
  constructor(props: IStock) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="form-item switcher-text">
          Я хочу получать уведомления об акциях/ не хочу
        </span>
        <label className="switch">
          <input className="input-switch" type="checkbox" ref={this.props.refStock} alt="switch" />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

export default Switcher;
