import * as React from 'react';
import { IUserInfo } from '../../types';

export default function Checkbox({ register }: IUserInfo) {
  return (
    <label className="form-item">
      Я согласен/согласна на обработку персональных данных
      <input type="checkbox" {...register} />
    </label>
  );
}
