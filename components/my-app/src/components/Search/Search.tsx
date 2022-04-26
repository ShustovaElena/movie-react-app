import React, { useState, useEffect } from 'react';
import { IStorageProps } from '../../types';
import { BASE_URL, POPULAR_URL } from '../../constants';

function Search({ setDataFromApi, pressSubmit }: IStorageProps) {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('userInput') || '');

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
    pressSubmit();
    setDataFromApi(data.results);
  }

  async function changeData() {
    let dataStorage = window.localStorage.getItem('userInput');
    if (!dataStorage) {
      dataStorage = searchQuery;
    }

    await setSearchQuery(dataStorage);
    const data = await getDataFromApi();
    setDataFromApi(data.results);
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
