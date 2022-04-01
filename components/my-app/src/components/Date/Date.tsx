import * as React from 'react';

interface IAge {
  value: string;
  onValidChange: () => void;
}

interface IStateAge {
  value: string;
  valid: boolean;
}

export default class Date extends React.Component<IAge, IStateAge> {
  // inputDate: React.RefObject<HTMLInputElement>;

  constructor(props: IAge) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = { value: props.value, valid: isValid };
    this.onChange = this.onChange.bind(this);
  }

  validate(val: string) {
    if (val) {
      const currentYear = 2022;
      const valueYear = Number(val.split('-')[0]);

      return currentYear - valueYear >= 18;
    } else {
      return false;
    }
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
