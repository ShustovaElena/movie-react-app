import * as React from 'react';
import { IAge } from '../../types';

export default function Age(props: IAge) {
  return (
    <label className="form-item">
      Дата рождения:
      <input className={props.className} type="date" {...props.register} style={props.style} />
    </label>
  );
}
