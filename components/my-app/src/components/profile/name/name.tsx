import * as React from 'react';

export default class Name extends React.Component {
  inputName: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.inputName = React.createRef();
  }

  render() {
    return (
      <>
        <label className="form-item">
          ФИО:
          <input type="text" ref={this.inputName} placeholder="Введите ФИО" />
        </label>
        <br />
      </>
    );
  }
}
