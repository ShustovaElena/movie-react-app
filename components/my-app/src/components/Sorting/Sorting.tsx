import React, { ChangeEvent, useContext } from 'react';
import { DISCOVER_URL, POPULAR_URL } from '../../constants';
import { AppContext } from '../../contexts';
import { ISort } from '../../types';

export function Sorting(props: ISort) {
  const { state, dispatch } = useContext(AppContext);

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
    const data = await props.getDataFromApi();
    dispatch({ type: 'SET_DATA_API', payload: data });
    props.setDataFromApi(data.results);
    props.pressSubmit();
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
