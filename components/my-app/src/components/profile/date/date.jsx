import * as React from 'react';

export default class Date extends React.Component {
  // inputDate: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = { value: props.value, valid: isValid };
    this.onChange = this.onChange.bind(this);
  }

  validate(val) {
    const currentYear = 2022;
    console.log(val);
    const valueYear = val.split('-')[0];

    return currentYear - valueYear >= 18;
  }

  onChange(e) {
    var val = e.target.value;
    var isValid = this.validate(val);
    this.setState({ value: val, valid: isValid });
  }

  render() {
    const color = this.state.valid === true ? 'white' : 'rgba(255, 0, 0, 0.2)';
    return (
      <>
        <label className="form-item">
          Дата рождения:
          <input
            type="date"
            value={this.state.value}
            onChange={this.onChange}
            style={{ backgroundColor: color }}
          />
        </label>
        {this.state.valid ? '' : <span className="error">Вам еще нет 18 лет!</span>}
        <br />
      </>
    );
  }
}
