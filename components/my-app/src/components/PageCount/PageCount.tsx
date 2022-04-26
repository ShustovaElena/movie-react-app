import React, { ChangeEvent, useContext } from 'react';
import { COUNT_ELEMENTS } from '../../constants';
import { AppContext } from '../../contexts';

export function PageCount() {
  const { dispatch } = useContext(AppContext);

  function onChange(e: ChangeEvent) {
    const target = +(e.target as HTMLSelectElement).value as number;
    dispatch({ type: 'SET_PAGE_PARAM', payload: +target });
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
