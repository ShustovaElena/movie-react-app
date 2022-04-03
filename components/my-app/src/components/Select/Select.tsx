import * as React from 'react';

interface ISelect {
  refCountry: React.RefObject<HTMLSelectElement>;
}

export default class Select extends React.Component<ISelect> {
  constructor(props: ISelect) {
    super(props);
  }

  render() {
    return (
      <>
        <label className="form-item">
          Ваша страна проживания:
          <select ref={this.props.refCountry}>
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
