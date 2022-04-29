import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import { Loader } from '../../components/Loader/Loader';
import { Sorting } from '../../components/Sorting/Sorting';
import { Pagination } from '../../components/Pagination/Pagination';
import { PageCount } from '../../components/PageCount/PageCount';
import { BASE_URL, DISCOVER_URL } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchData } from '../../reducer';

export function Home() {
  const [isPressSearch, setIsPressSearch] = useState(false);
  const { searchQuery, sortParam, page, pageCount, dataApi } = useSelector(
    (state: RootState) => state.root
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchData({ searchQuery, page, sortParam }));
    setDataFromApi();
  }, [searchQuery, sortParam, page, pageCount]);

  async function getDataFromApi() {
    const url = `${BASE_URL}&query=${searchQuery}&page=${page}`;
    const sortUrl = sortParam
      ? `${DISCOVER_URL}&page=${page}&sort_by=${sortParam}`
      : `${DISCOVER_URL}&page=${page}`;
    const res = await fetch(searchQuery ? url : sortUrl);
    const data = await res.json();
    return data;
  }

  function setDataFromApi() {
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
