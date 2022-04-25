import React, { ChangeEvent, useContext } from 'react';
import { AppContext } from '../../contexts';

export function Sorting() {
  const { dispatch } = useContext(AppContext);

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLSelectElement).value;
    let sortURL;

    if (target === 'По популярности (по возрастанию)') {
      sortURL = `popularity_asc`;
    } else if (target === 'По популярности (по убыванию)') {
      sortURL = `popularity_desc`;
    } else if (target === 'По рейтингу (по возрастанию)') {
      sortURL = `vote_average_asc`;
    } else if (target === 'По рейтингу (по убыванию)') {
      sortURL = `vote_average_desc`;
    } else {
      sortURL = '';
    }
    dispatch({ type: 'SET_SORT_PARAM', payload: sortURL });
  }

  return (
    <select className="sorting" onChange={onChange} data-testid="sorting">
      <option value={'По популярности (по возрастанию)'}>По популярности (по возрастанию)</option>
      <option value={'По популярности (по убыванию)'}>По популярности (по убыванию)</option>
      <option value={'По рейтингу (по возрастанию)'}>По рейтингу (по возрастанию)</option>
      <option value={'По рейтингу (по убыванию)'}>По рейтингу (по убыванию)</option>
    </select>
  );
}
