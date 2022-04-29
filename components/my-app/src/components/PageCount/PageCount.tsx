import React, { ChangeEvent } from 'react';
import { COUNT_ELEMENTS } from '../../constants';
import { store } from '../../store';
import { setPageCount } from '../../reducer';

export function PageCount() {
  function onChange(e: ChangeEvent) {
    const target = +(e.target as HTMLSelectElement).value as number;
    store.dispatch(setPageCount(target));
  }

  return (
    <select className="page-count" onChange={onChange}>
      {COUNT_ELEMENTS.map((item: number, i: number) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
