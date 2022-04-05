import * as React from 'react';
import { IName } from '../../types';

export default class Name extends React.Component<IName> {
  constructor(props: IName) {
    super(props);
  }

  render() {
    return (
      <label className="form-item label-name">
        ФИО:
        <input
          className={this.props.className}
          type="text"
          // style={{ backgroundColor: this.props.style }}
          ref={this.props.refName}
          placeholder="Введите ФИО"
        />
      </label>
    );
  }
}
