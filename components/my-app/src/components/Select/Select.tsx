import * as React from 'react';
import { ISelect } from '../../types';
import { COUNTRY } from '../../constants';

export default function Select(props: ISelect) {
  return (
    <>
      <label className="form-item">
        Ваша страна проживания:
        <select {...props.register}>
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
