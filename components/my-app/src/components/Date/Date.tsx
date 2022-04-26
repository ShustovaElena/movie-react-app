import * as React from 'react';
import { IAge } from '../../types';
import ValidationError from '../ValidationError/ValidationError';

export default function Age({ className, register, style, error }: IAge) {
  return (
    <>
      <label className="form-item">
        Дата рождения:
        <input className={className} type="date" {...register} style={style} />
      </label>
      <ValidationError textError={error} />
    </>
  );
}
