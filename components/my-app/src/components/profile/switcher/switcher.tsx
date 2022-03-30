import React from 'react';
import './switcher.css';

class Switcher extends React.Component {
  isOn: boolean;
  inputSwitch: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.isOn = false;
    this.inputSwitch = React.createRef();
  }

  checkedTextInput() {
    this.inputSwitch.current?.checked;
  }

  render() {
    return (
      <>
        <div className="switcher">
          <span className="switch-text">Хочу/ не хочу получать уведомления об акциях</span>
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
          </label>
          <input
            checked={this.isOn}
            className="react-switch-checkbox form-item"
            id={`react-switch-new`}
            ref={this.inputSwitch}
            type="checkbox"
            onChange={this.checkedTextInput}
          />
        </div>
        <br />
      </>
    );
  }
}

export default Switcher;
