import * as React from 'react';

interface IUserInfo {
  onValidChange: () => void;
}

interface IStateUserInfo {
  isChecked: boolean;
}

export default class Checkbox extends React.Component<IUserInfo, IStateUserInfo> {
  constructor(props: IUserInfo) {
    super(props);
    this.state = { isChecked: false };
    this.onChange = this.onChange.bind(this);
  }

  // onChange(e: React.ChangeEvent) {
  //   const val = e.target as HTMLInputElement;
  //   console.log(val.checked);
  //   this.setState({ isChecked: val.checked });
  //   console.log(this.state);
  //   this.props.onValidChange();
  // }

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
        <label className="form-item">
          Я согласен/согласна на обработку персональных данных
          <input type="checkbox" onChange={this.onChange} />
        </label>
        <br />
      </>
    );
  }
}
