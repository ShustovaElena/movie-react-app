import React, { useContext, useEffect, useRef, useState } from 'react';
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
  // const [data, setData] = useState([]);
  const [isPressSearch, setIsPressSearch] = useState(false);

  useEffect(() => {
    async function innerFn() {
      await getDataFromApi();
      // dispatch({ type: 'SET_DATA_API', payload: data });
      // setDataFromApi(data.results);
    }

    innerFn();
  }, []);

  async function getDataFromApi() {
    // console.log(state.searchQuery);
    const url = `${BASE_URL}&query=${state.searchQuery}&page=${state.page}`;
    // console.log(url);
    // console.log('state.sortParam', state.sortParam);
    const sortUrl = state.sortParam
      ? `${DISCOVER_URL}&page=${state.page}&sort_by=${state.sortParam}`
      : `${DISCOVER_URL}&page=${state.page}`;
    // console.log('sortUrl', sortUrl);
    const res = await fetch(state.searchQuery ? url : sortUrl);
    const data = await res.json();
    dispatch({ type: 'SET_DATA_API', payload: data });
    return data;
  }

  function setDataFromApi(searchData: ICard[]) {
    setTimeout(() => {
      // setData(searchData as never);
      // dispatch({ type: 'SET_DATA_API', payload: searchData });
      setIsPressSearch(false);
    }, 300);
  }

  function pressSubmit() {
    setIsPressSearch(true);
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
        <Sorting
          getDataFromApi={getDataFromApi}
          setDataFromApi={setDataFromApi}
          pressSubmit={pressSubmit}
        />
        <PageCount />
      </div>
      {isPressSearch ? <Loader /> : <Cards data={state.dataApi.results} />}
      <Pagination
        getDataFromApi={getDataFromApi}
        setDataFromApi={setDataFromApi}
        pressSubmit={pressSubmit}
      />
    </main>
  );
}

export default Home;
