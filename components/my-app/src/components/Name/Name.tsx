import * as React from 'react';

interface IName {
  value: string;
  onValidChange: () => void;
}

interface IStateName {
  value: string;
  valid: boolean;
}

export default class Name extends React.Component<IName, IStateName> {
  constructor(props: IName) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = { value: props.value, valid: isValid };
    this.onChange = this.onChange.bind(this);
  }

  validate(val: string) {
    return val.length > 5;
  }

  onChange(e: React.ChangeEvent) {
    const val = (e.target as HTMLInputElement).value;
    const isValid = this.validate(val);
    this.setState({ value: val, valid: isValid });
    this.props.onValidChange();
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
