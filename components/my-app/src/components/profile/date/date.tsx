import * as React from 'react';

export default class Name extends React.Component {
  inputDate: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.inputDate = React.createRef();
  }

  render() {
    return (
      <>
        <label className="form-item">
          Дата регистрации:
          <input type="date" ref={this.inputDate} />
        </label>
        <br />
      </>
    );
  }
}
