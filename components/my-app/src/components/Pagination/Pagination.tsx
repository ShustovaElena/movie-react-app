import React, { ChangeEvent, useContext } from 'react';
import { AppContext } from '../../contexts';

export function Pagination() {
  const { state, dispatch } = useContext(AppContext);
  const { page, dataApi } = state;

  function PrevClick() {
    let prevPage = page - 1;
    if (prevPage <= 1) prevPage = 1;
    dispatch({ type: 'SET_PAGE', payload: prevPage });
  }

  function NextClick() {
    let nextPage = page + 1;
    if (nextPage > 500) nextPage = 500;
    dispatch({ type: 'SET_PAGE', payload: nextPage });
  }

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLInputElement).value;
    dispatch({ type: 'SET_PAGE', payload: target });
  }

  return (
    <div className="pagination">
      <button className="pagination-button" onClick={PrevClick} data-testid="prev">
        Prev
      </button>
      <input type="number" className="page-number" value={page} onChange={onChange} />
      <span className="slash">/</span>
      <input
        type="text"
        className="page-number"
        value={dataApi.total_pages}
        disabled
        data-testid="paginInput"
      />
      <button className="pagination-button" onClick={NextClick} data-testid="next">
        Next
      </button>
    </div>
  );
}
