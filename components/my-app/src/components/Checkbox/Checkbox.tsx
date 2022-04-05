import * as React from 'react';

interface IUserInfo {
  refUserInfo: React.RefObject<HTMLInputElement>;
}

export default class Checkbox extends React.Component<IUserInfo> {
  constructor(props: IUserInfo) {
    super(props);
  }

  render() {
    return (
      <label className="form-item">
        Я согласен/согласна на обработку персональных данных
        <input type="checkbox" ref={this.props.refUserInfo} />
      </label>
    );
  }
}
