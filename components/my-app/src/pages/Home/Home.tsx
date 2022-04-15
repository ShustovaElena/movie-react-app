import React, { useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import { Loader } from '../../components/Loader/Loader';
import { ICard } from '../../types';

function Home() {
  const [data, setData] = useState([]);
  const [isPressSearch, setIsPressSearch] = useState(false);

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
      <Search userInput={''} setDataFromApi={setDataFromApi} pressSubmit={pressSubmit} />
      {isPressSearch ? <Loader /> : <Cards data={data} />}
    </main>
  );
}

export default Home;
