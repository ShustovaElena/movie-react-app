import React, { ChangeEvent, useContext } from 'react';
import { COUNT_ELEMENTS } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, store } from '../../store';
import { setPageCount } from '../../reducer';
// import { AppContext } from '../../contexts';

export function PageCount() {
  // const { dispatch } = useContext(AppContext);
  const dispatch = useDispatch();

  function onChange(e: ChangeEvent) {
    const target = +(e.target as HTMLSelectElement).value as number;
    store.dispatch(setPageCount(target));
    // dispatch({ type: 'SET_PAGE_PARAM', payload: +target });
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
