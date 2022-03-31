import * as React from 'react';

export default class Name extends React.Component {
  // inputName: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = { value: props.value, valid: isValid };
    this.onChange = this.onChange.bind(this);
  }

  validate(val) {
    if (val === '') {
      return true;
    }
    return val.length > 6;
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
        <label className="form-item label-name">
          ФИО:
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
            style={{ backgroundColor: color }}
            placeholder="Введите ФИО"
          />
        </label>
        {this.state.valid ? '' : <span className="error">Введите ФИО длиннее 6 символов</span>}
        <br />
      </>
    );
  }
}
