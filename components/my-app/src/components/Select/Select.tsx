import * as React from 'react';
import { ISelect } from '../../types';
import { COUNTRY } from '../../constants';

export default function Select({ register }: ISelect) {
  return (
    <>
      <label className="form-item">
        Ваша страна проживания:
        <select {...register}>
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
