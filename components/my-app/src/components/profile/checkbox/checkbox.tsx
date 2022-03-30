import * as React from 'react';

export default class Checkbox extends React.Component {
  checkbox: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.checkbox = React.createRef();
  }

  render() {
    return (
      <>
        <label className="form-item">
          Я согласен/согласна на обработку персональных данных
          <input type="checkbox" ref={this.checkbox} />
        </label>
        <br />
      </>
    );
  }
}
