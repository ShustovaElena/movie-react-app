import React, { useState, useEffect, useContext } from 'react';
import { IStorageProps } from '../../types';
import { BASE_URL, POPULAR_URL } from '../../constants';
import { AppContext } from '../../contexts';

function Search(props: IStorageProps) {
  const { state, dispatch } = useContext(AppContext);
  // const [searchQuery, setSearchQuery] = useState(localStorage.getItem('userInput') || '');

  useEffect(() => {
    async function innerFn() {
      await componentDidMount();
    }

    innerFn();
  }, []);

  useEffect(() => {
    localStorage.setItem('userInput', state.searchQuery);
  });

  function handleChange(event: React.FormEvent) {
    const input = event.target as HTMLInputElement;
    // setSearchQuery(input.value);
    dispatch({ type: 'SET_SEARCH', payload: input.value });
  }

  async function getDataFromApi() {
    const url = `${BASE_URL}&query=${state.searchQuery}`;
    const res = await fetch(state.searchQuery ? url : POPULAR_URL);
    return await res.json();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await getDataFromApi();
    props.pressSubmit();
    props.setDataFromApi(data.results);
  }

  async function componentDidMount() {
    let dataStorage = window.localStorage.getItem('userInput');
    if (!dataStorage) {
      const data = await getDataFromApi();
      props.setDataFromApi(data.results);
      dataStorage = state.searchQuery;
    }

    window.localStorage.setItem('userInput', dataStorage as string);
    // await setSearchQuery(dataStorage);
    dispatch({ type: 'SET_SEARCH', payload: dataStorage });
    const data = await getDataFromApi();
    props.setDataFromApi(data.results);
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
      <button className="Search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
