import * as React from 'react';
import { IUserInfo } from '../../types';

export default function Checkbox(props: IUserInfo) {
  return (
    <label className="form-item">
      Я согласен/согласна на обработку персональных данных
      <input type="checkbox" {...props.register} />
    </label>
  );
}
