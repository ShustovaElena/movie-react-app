import React from 'react';
import './Switcher.css';

interface IStock {
  onValidChange: () => void;
}

interface IStateStock {
  isChecked: boolean;
}

class Switcher extends React.Component<IStock, IStateStock> {
  constructor(props: IStock) {
    super(props);
    this.state = { isChecked: false };
    this.onChange = this.onChange.bind(this);
  }

  validate(val: HTMLInputElement) {
    console.log(val.checked);
    return val.checked;
  }

  onChange(e: React.ChangeEvent) {
    const val = e.target as HTMLInputElement;
    const isValid = this.validate(val);
    this.setState({ isChecked: isValid });
    console.log(this.state);
    this.props.onValidChange();
  }

  render() {
    return (
      <>
        <span className="form-item switcher-text">
          Я хочу получать уведомления об акциях/ не хочу
        </span>
        <label className="switch">
          <input type="checkbox" onChange={this.onChange} />
          <span className="slider round"></span>
        </label>
        <br />
      </>
    );
  }
}

export default Switcher;
