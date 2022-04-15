import * as React from 'react';
import { IName } from '../../types';

export default function Name(props: IName) {
  return (
    <label className="form-item label-name">
      ФИО:
      <input
        className={props.className}
        type="text"
        placeholder="Введите ФИО"
        {...props.register}
        style={props.style}
      />
    </label>
  );
}
