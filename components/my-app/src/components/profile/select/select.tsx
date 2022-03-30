import * as React from 'react';

export default class Select extends React.Component {
  select: React.RefObject<HTMLSelectElement>;

  constructor(props: object) {
    super(props);
    this.select = React.createRef();
  }

  render() {
    return (
      <>
        <label className="form-item">
          Ваша страна проживания:
          <select ref={this.select}>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
        </label>
        <br />
      </>
    );
  }
}
