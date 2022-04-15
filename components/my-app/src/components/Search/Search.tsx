import React, { useState, useEffect } from 'react';
import { IStorageProps } from '../../types';
import { BASE_URL, POPULAR_URL } from '../../constants';

function Search(props: IStorageProps) {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('userInput') || '');

  useEffect(() => {
    async function innerFn() {
      await componentDidMount();
    }

    innerFn();
  }, []);

  useEffect(() => {
    localStorage.setItem('userInput', searchQuery);
  });

  function handleChange(event: React.FormEvent) {
    const input = event.target as HTMLInputElement;
    setSearchQuery(input.value);
  }

  async function getDataFromApi() {
    const url = `${BASE_URL}&query=${searchQuery}`;
    const res = await fetch(searchQuery ? url : POPULAR_URL);
    return await res.json();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await getDataFromApi();
    props.pressSubmit();
    props.setDataFromApi(data.results);
  }

  // componentDidUpdate() {
  //   const userInput = this.state.userInput;
  //   window.localStorage.setItem('userInput', userInput);
  // }

  async function componentDidMount() {
    let dataStorage = window.localStorage.getItem('userInput');
    if (!dataStorage) {
      const data = await getDataFromApi();
      props.setDataFromApi(data.results);
      dataStorage = searchQuery;
    }

    window.localStorage.setItem('userInput', dataStorage as string);
    await setSearchQuery(dataStorage);
    const data = await getDataFromApi();
    props.setDataFromApi(data.results);
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
      <button className="Search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
