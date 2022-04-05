import * as React from 'react';
import { ISelect } from '../../types';
import { COUNTRY } from '../../constants';

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
            {COUNTRY.map((item: string, i: number) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <br />
      </>
    );
  }
}
