import React, { useEffect, useContext } from 'react';
import { IStorageProps } from '../../types';
// import { AppContext } from '../../contexts';
import { RootState, store } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../reducer';

function Search({ setDataFromApi, getDataFromApi, pressSubmit }: IStorageProps) {
  // const { state, dispatch } = useContext(AppContext);
  // const { searchQuery } = state;
  const { searchQuery } = useSelector((state: RootState) => state.root);
  const dispatch = useDispatch();

  useEffect(() => {
    async function innerFn() {
      await changeData();
    }

    innerFn();
  }, []);

  useEffect(() => {
    localStorage.setItem('userInput', searchQuery);
  }, [searchQuery]);

  function handleChange(event: React.FormEvent) {
    const input = event.target as HTMLInputElement;
    store.dispatch(setSearch(input.value));
    // dispatch({ type: 'SET_SEARCH', payload: input.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await getDataFromApi();
    pressSubmit();
    setDataFromApi(data.results);
  }

  async function changeData() {
    try {
      let dataStorage = window.localStorage.getItem('userInput');
      if (!dataStorage) {
        dataStorage = searchQuery;
      }

      // dispatch({ type: 'SET_SEARCH', payload: dataStorage });
      store.dispatch(setSearch(dataStorage));
      const data = await getDataFromApi();
      setDataFromApi(data.results);
    } catch {
      const dataStorage = searchQuery;
      window.localStorage.setItem('userInput', dataStorage);
    }
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        className="Search-input"
        type="text"
        placeholder="Search"
        value={searchQuery as string}
        onChange={handleChange}
      />
      <button className="Search-btn" type="submit" data-testid="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
