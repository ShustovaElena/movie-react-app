import * as React from 'react';
import { IStorageProps, IStorageState } from '../../types';
import { BASE_URL, POPULAR_URL } from '../../constants';

class Search extends React.Component<IStorageProps, IStorageState> {
  constructor(props: IStorageProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { userInput: '' };
  }

  handleChange = (event: React.FormEvent) => {
    const input = event.target as HTMLInputElement;
    this.setState({ userInput: input.value });
  };

  async getDataFromApi() {
    let url = `${BASE_URL}&query=${this.state.userInput}`;
    if (this.state.userInput === '') {
      url = POPULAR_URL;
    }
    const res = await fetch(url);
    return await res.json();
  }

  async handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await this.getDataFromApi();
    this.props.setDataFromApi(data.results);
    this.props.pressSubmit();
  }

  componentDidUpdate() {
    const userInput = this.state.userInput;
    window.localStorage.setItem('userInput', userInput);
  }

  async componentDidMount() {
    let userInput = window.localStorage.getItem('userInput');
    if (!userInput) {
      const data = await this.getDataFromApi();
      this.props.setDataFromApi(data.results);
      userInput = this.state.userInput;
    }

    window.localStorage.setItem('userInput', userInput);
    await this.setState({ userInput: userInput });
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
          value={this.state.userInput}
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
