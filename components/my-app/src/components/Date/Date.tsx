import * as React from 'react';
import { IAge } from '../../types';

export default class Date extends React.Component<IAge> {
  constructor(props: IAge) {
    super(props);
  }

  render() {
    return (
      <label className="form-item">
        Дата рождения:
        <input
          className={this.props.className}
          type="date"
          ref={this.props.refAge}
          // style={{ backgroundColor: this.props.style}}
        />
      </label>
    );
  }
}
