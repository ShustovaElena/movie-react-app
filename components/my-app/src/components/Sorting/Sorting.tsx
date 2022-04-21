import React, { ChangeEvent, useContext } from 'react';
import { POPULAR_URL, SORTING_URL } from '../../constants';
import { AppContext } from '../../contexts';
import { ISort } from '../../types';

export function Sorting(props: ISort) {
  const { dispatch } = useContext(AppContext);

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLSelectElement).value;
    let sortURL;

    if (target === 'По популярности (по возрастанию)') {
      sortURL = `${SORTING_URL}popularity.asc`;
    } else if (target === 'По популярности (по убыванию)') {
      sortURL = `${SORTING_URL}popularity.desc`;
    } else if (target === 'По рейтингу (по возрастанию)') {
      sortURL = `${SORTING_URL}vote_average.asc`;
    } else if (target === 'По рейтингу (по убыванию)') {
      sortURL = `${SORTING_URL}vote_average.desc`;
    } else {
      sortURL = POPULAR_URL;
    }
    dispatch({ type: 'SET_SORT_PARAM', payload: sortURL });

    const data = await props.getDataFromApi();
    console.log(data);
    props.setDataFromApi(data.results);
  }

  return (
    <select className="sorting" onChange={onChange}>
      <option value={'По популярности (по возрастанию)'}>По популярности (по возрастанию)</option>
      <option value={'По популярности (по убыванию)'}>По популярности (по убыванию)</option>
      <option value={'По рейтингу (по возрастанию)'}>По рейтингу (по возрастанию)</option>
      <option value={'По рейтингу (по убыванию)'}>По рейтингу (по убыванию)</option>
    </select>
  );
}
