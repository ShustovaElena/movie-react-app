import React, { ChangeEvent, useContext } from 'react';
import { AppContext } from '../../contexts';

export function PageCount() {
  const { dispatch } = useContext(AppContext);

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLSelectElement).value;
    dispatch({ type: 'SET_PAGE_PARAM', payload: +target });
  }

  return (
    <select className="page-count" onChange={onChange}>
      <option>20</option>
      <option>15</option>
      <option>10</option>
      <option>5</option>
    </select>
  );
}
