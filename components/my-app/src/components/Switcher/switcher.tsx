import React from 'react';
import './Switcher.css';

interface IStock {
  refStock: React.RefObject<HTMLInputElement>;
}

class Switcher extends React.Component<IStock> {
  constructor(props: IStock) {
    super(props);
  }

  render() {
    return (
      <>
        <span className="form-item switcher-text">
          Я хочу получать уведомления об акциях/ не хочу
        </span>
        <label className="switch">
          <input type="checkbox" ref={this.props.refStock} />
          <span className="slider round"></span>
        </label>
        <br />
      </>
    );
  }
}

export default Switcher;
