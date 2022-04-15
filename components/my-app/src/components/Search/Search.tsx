import * as React from 'react';
import { IStorageProps, IStorageState } from '../../types';
import { BASE_URL, POPULAR_URL } from '../../constants';

class Search extends React.Component<IStorageProps, IStorageState> {
  constructor(props: IStorageProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { searchQuery: '' };
  }

  handleChange = (event: React.FormEvent) => {
    const input = event.target as HTMLInputElement;
    this.setState({ searchQuery: input.value });
  };

  async getDataFromApi() {
    const url = `${BASE_URL}&query=${this.state.searchQuery}`;
    const res = await fetch(this.state.searchQuery ? url : POPULAR_URL);
    return await res.json();
  }

  async handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await this.getDataFromApi();
    console.log(data);
    this.props.pressSubmit();
    this.props.setDataFromApi(data.results);
  }

  componentDidUpdate() {
    const userInput = this.state.searchQuery;
    localStorage.setItem('userInput', userInput);
  }

  async componentDidMount() {
    let userInput = localStorage.getItem('userInput');
    if (!userInput) {
      const data = await this.getDataFromApi();
      this.props.setDataFromApi(data.results);
      userInput = this.state.searchQuery;
    }

    localStorage.setItem('userInput', userInput);
    await this.setState({ searchQuery: userInput });
    const data = await this.getDataFromApi();
    this.props.setDataFromApi(data.results);
  }

  render() {
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <input
          className="Search-input"
          type="text"
          placeholder="Search"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        <button className="Search-btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
