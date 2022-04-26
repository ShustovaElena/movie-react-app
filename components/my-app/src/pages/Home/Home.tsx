import React, { useContext, useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import { Loader } from '../../components/Loader/Loader';
import { ICard } from '../../types';
import { Sorting } from '../../components/Sorting/Sorting';
import { Pagination } from '../../components/Pagination/Pagination';
import { PageCount } from '../../components/PageCount/PageCount';
import { AppContext } from '../../contexts';
import { BASE_URL, DISCOVER_URL } from '../../constants';

export function Home() {
  const { state, dispatch } = useContext(AppContext);
  const [isPressSearch, setIsPressSearch] = useState(false);
  const { searchQuery, sortParam, page, pageCount, dataApi } = state;

  useEffect(() => {
    const data = getDataFromApi();
    data.then((data) => {
      dispatch({ type: 'SET_DATA_API', payload: data });
      setDataFromApi(data.results);
    });
  }, [searchQuery, sortParam, page, pageCount, dispatch]);

  async function getDataFromApi() {
    const url = `${BASE_URL}&query=${searchQuery}&page=${page}`;
    const sortUrl = sortParam
      ? `${DISCOVER_URL}&page=${page}&sort_by=${sortParam}`
      : `${DISCOVER_URL}&page=${page}`;
    const res = await fetch(searchQuery ? url : sortUrl);
    const data = await res.json();
    return data;
  }

  function setDataFromApi(searchData: ICard[]) {
    setTimeout(() => {
      setIsPressSearch(false);
    }, 300);
  }

  function pressSubmit() {
    setIsPressSearch(true);
  }

  function cutData() {
    return dataApi.results.slice(0, pageCount);
  }

  return (
    <main>
      <h2 className="header-part">Сделай свой выбор!</h2>
      <Search
        userInput={''}
        getDataFromApi={getDataFromApi}
        setDataFromApi={setDataFromApi}
        pressSubmit={pressSubmit}
      />
      <div className="control-elements">
        <Sorting />
        <PageCount />
      </div>
      {isPressSearch ? <Loader /> : <Cards data={cutData()} />}
      <Pagination />
    </main>
  );
}

export default Home;
