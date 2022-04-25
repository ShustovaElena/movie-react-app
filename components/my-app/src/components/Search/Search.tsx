import React, { useEffect, useContext } from 'react';
import { IStorageProps } from '../../types';
import { AppContext } from '../../contexts';

function Search(props: IStorageProps) {
  const { state, dispatch } = useContext(AppContext);

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
    dispatch({ type: 'SET_SEARCH', payload: input.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await props.getDataFromApi();
    props.pressSubmit();
    props.setDataFromApi(data.results);
  }

  async function componentDidMount() {
    try {
      let dataStorage = window.localStorage.getItem('userInput');
      if (!dataStorage) {
        const data = await props.getDataFromApi();
        props.setDataFromApi(data.results);
        dataStorage = state.searchQuery;
      }

      window.localStorage.setItem('userInput', dataStorage as string);
      dispatch({ type: 'SET_SEARCH', payload: dataStorage });
      const data = await props.getDataFromApi();
      props.setDataFromApi(data.results);
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
