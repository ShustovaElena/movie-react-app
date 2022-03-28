import * as React from 'react';

interface IStorage {
  userInput: string;
}

class Search extends React.Component<IStorage, IStorage> {
  constructor(props: IStorage) {
    super(props);
    this.state = { userInput: props.userInput };
  }

  handleChange = (event: React.FormEvent) => {
    const input = event.target as HTMLInputElement;
    this.setState({ userInput: input.value });
  };

  componentDidUpdate() {
    const userInput = this.state.userInput;
    window.localStorage.setItem('userInput', userInput);
  }

  componentDidMount() {
    let userInput = window.localStorage.getItem('userInput');
    if (!userInput) {
      userInput = this.state.userInput;
    }

    window.localStorage.setItem('userInput', userInput);
    this.setState({ userInput: userInput });
  }

  render() {
    return (
      <form className="Search">
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
