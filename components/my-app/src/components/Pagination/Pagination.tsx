import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { setPage } from '../../reducer';
import { RootState, store } from '../../store';

export function Pagination() {
  const { page, dataApi } = useSelector((state: RootState) => state.root);

  function PrevClick() {
    let prevPage = page - 1;
    if (prevPage <= 1) prevPage = 1;
    store.dispatch(setPage(prevPage));
  }

  function NextClick() {
    let nextPage = page + 1;
    if (nextPage > 500) nextPage = 500;
    store.dispatch(setPage(nextPage));
  }

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLInputElement).value;
    store.dispatch(setPage(target));
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
