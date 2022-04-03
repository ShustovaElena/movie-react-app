import * as React from 'react';

interface IName {
  refName: React.RefObject<HTMLInputElement>;
  style: string;
}

export default class Name extends React.Component<IName> {
  constructor(props: IName) {
    super(props);
  }

  render() {
    return (
      <>
        <label className="form-item label-name" htmlFor="ФИО">
          ФИО:
          <input
            type="text"
            id="ФИО"
            style={{ backgroundColor: this.props.style }}
            ref={this.props.refName}
            placeholder="Введите ФИО"
          />
        </label>
        <br />
      </>
    );
  }
}
