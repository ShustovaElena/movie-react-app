import React, { useContext, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import { Loader } from '../../components/Loader/Loader';
import { ICard } from '../../types';
import { Sorting } from '../../components/Sorting/Sorting';
import { Pagination } from '../../components/Pagination/Pagination';
import { PageCount } from '../../components/PageCount/PageCount';
import { AppContext } from '../../contexts';
import { BASE_URL } from '../../constants';

export function Home() {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [isPressSearch, setIsPressSearch] = useState(false);

  async function getDataFromApi() {
    const url = `${BASE_URL}&query=${state.searchQuery}`;
    const res = await fetch(state.searchQuery ? url : state.sortParam);
    return await res.json();
  }

  function setDataFromApi(searchData: ICard[]) {
    setTimeout(() => {
      setData(searchData as never);
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
        <Sorting getDataFromApi={getDataFromApi} setDataFromApi={setDataFromApi} />
        <div className="pagination">
          <Pagination />
          <PageCount />
        </div>
      </div>
      {isPressSearch ? <Loader /> : <Cards data={data} />}
    </main>
  );
}

export default Home;
