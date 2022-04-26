import React from 'react';
import { IStock } from '../../types';

import './Switcher.css';

function Switcher({ register }: IStock) {
  return (
    <div>
      <span className="form-item switcher-text">
        Я хочу получать уведомления об акциях/ не хочу
      </span>
      <label className="switch">
        <input className="input-switch" type="checkbox" alt="switch" {...register} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Switcher;
