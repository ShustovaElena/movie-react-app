import React, { useEffect, useContext } from 'react';
import { IStorageProps } from '../../types';
import { AppContext } from '../../contexts';

function Search({ setDataFromApi, pressSubmit }: IStorageProps) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    async function innerFn() {
      await changeData();
    }

    innerFn();
  }, []);

  useEffect(() => {
    localStorage.setItem('userInput', state.searchQuery);
  }, [state.searchQuery]);

  function handleChange(event: React.FormEvent) {
    const input = event.target as HTMLInputElement;
    dispatch({ type: 'SET_SEARCH', payload: input.value });
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
        dataStorage = state.searchQuery;
      }
      
      dispatch({ type: 'SET_SEARCH', payload: dataStorage });
      const data = await getDataFromApi();
      setDataFromApi(data.results);
    } catch {
      const dataStorage = state.searchQuery;
      window.localStorage.setItem('userInput', dataStorage as string);
    }
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        className="Search-input"
        type="text"
        placeholder="Search"
        value={state.searchQuery as string}
        onChange={handleChange}
      />
      <button className="Search-btn" type="submit" data-testid="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
