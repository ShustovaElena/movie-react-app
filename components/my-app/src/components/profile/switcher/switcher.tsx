import React from 'react';
import './switcher.css';

class Switcher extends React.Component {
  inputRadio: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.inputRadio = React.createRef();
  }

  render() {
    return (
      <>
        <span className="form-item switcher-text">
          Я хочу получать уведомления об акциях/ не хочу
        </span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <br />
      </>
    );
  }
}

export default Switcher;
