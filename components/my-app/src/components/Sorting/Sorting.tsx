import React, { ChangeEvent, useContext } from 'react';
import { SORT_PARAMETRS } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, store } from '../../store';
import { setSortParam } from '../../reducer';
// import { AppContext } from '../../contexts';

export function Sorting() {
  // const { dispatch } = useContext(AppContext);
  const dispatch = useDispatch();

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLSelectElement).value;
    let sortURL;

    switch (target) {
      case 'По популярности (по возрастанию)':
        sortURL = `popularity_asc`;
        break;
      case 'По популярности (по убыванию)':
        sortURL = `popularity_desc`;
        break;
      case 'По рейтингу (по возрастанию)':
        sortURL = `vote_average_asc`;
        break;
      case 'По рейтингу (по убыванию)':
        sortURL = `vote_average_desc`;
        break;
      default:
        sortURL = '';
    }

    // dispatch({ type: 'SET_SORT_PARAM', payload: sortURL });
    store.dispatch(setSortParam(sortURL));
  }

  return (
    <select className="sorting" onChange={onChange} data-testid="sorting">
      {SORT_PARAMETRS.map((item: string, i: number) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
