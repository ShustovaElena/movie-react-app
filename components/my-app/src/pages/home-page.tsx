import * as React from 'react';

class Home extends React.Component {
  state = {
    userInput: '',
  };

  handleChange = (event: React.FormEvent) => {
    const input = event.target as HTMLInputElement;

    this.setState({ userInput: input.value });
  };

  handleFormSubmit = () => {
    const userInput = this.state.userInput;
    localStorage.setItem('userInput', userInput);
  };

  componentWillUnmount() {
    const userInput = this.state.userInput;
    localStorage.setItem('userInput', userInput);
  }

  componentDidMount() {
    const userInput = localStorage.getItem('userInput');
    this.setState({ userInput: userInput });
  }

  render() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <Search />
        </main>
      </>
    );
  }
}

export default Home;

class Search extends Home {
  render() {
    return (
      <form className="Search" onSubmit={this.handleFormSubmit}>
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
