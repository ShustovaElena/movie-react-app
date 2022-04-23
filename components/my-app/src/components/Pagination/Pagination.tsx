import React, { ChangeEvent, useContext } from 'react';
import { AppContext } from '../../contexts';

export function Pagination() {
  const { state, dispatch } = useContext(AppContext);

  function PrevClick() {
    let prevPage = +state.page - 1;
    if (prevPage <= 1) prevPage = 1;
    dispatch({ type: 'SET_PAGE', payload: prevPage });
  }

  function NextClick() {
    let nextPage = +state.page + 1;
    if (nextPage > 500) nextPage = 500;
    dispatch({ type: 'SET_PAGE', payload: nextPage });
  }

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLInputElement).value;
    console.log(target);
    dispatch({ type: 'SET_PAGE', payload: target });
  }

  return (
    <React.Fragment>
      <div className="pagination">
        <button className="pagination-button" onClick={PrevClick}>
          Prev
        </button>
        <input
          type="number"
          className="page-number"
          value={state.page}
          // placeholder={`${state.dataApi.page}`}
          onChange={onChange}
        />
        <span className="slash">/</span>
        <input type="text" className="page-number" value={state.dataApi.total_pages} disabled />
        <button className="pagination-button" onClick={NextClick}>
          Next
        </button>
      </div>
    </React.Fragment>
  );
}
