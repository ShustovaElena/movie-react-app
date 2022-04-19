import * as React from 'react';
import { IName } from '../../types';
import ValidationError from '../ValidationError/ValidationError';

export default function Name(props: IName) {
  const { className, register, style, error } = props;
  return (
    <>
      <label className="form-item label-name">
        ФИО:
        <input
          className={className}
          type="text"
          placeholder="Введите ФИО"
          {...register}
          style={style}
        />
      </label>
      <ValidationError textError={error} />
    </>
  );
}
