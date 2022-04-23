import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts';
import { IPagination } from '../../types';

export function Pagination(props: IPagination) {
  const { state, dispatch } = useContext(AppContext);

  function PrevClick() {
    let prevPage = state.page - 1;
    dispatch({ type: 'SET_PAGE', payload: prevPage });
    if (prevPage < 1) prevPage = 1;
  }

  function NextClick() {
    let nextPage = state.page + 1;
    dispatch({ type: 'SET_PAGE', payload: nextPage });
    if (nextPage > 500) nextPage = 500;
  }

  async function onChange(e: ChangeEvent) {
    const target = (e.target as HTMLInputElement).value;
    console.log(target);
    dispatch({ type: 'SET_PAGE', payload: target });
    const data = await props.getDataFromApi();
    console.log(data);
    dispatch({ type: 'SET_DATA_API', payload: data });
    props.setDataFromApi(data.results);
    props.pressSubmit();
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
