import * as React from 'react';
import data from '../data';
import ICard from '../types';

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
          <div className="Cards">
            {data.map((item: ICard) => (
              <Card
                key={item.key}
                src={item.src}
                name={item.name}
                year={item.year}
                genre={item.genre}
                rating={item.rating}
                likesCount={item.likesCount}
              />
            ))}
          </div>
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

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    return (
      <div className="Card">
        <img className="Card-img" src={this.props.src} alt="Image cartoon"></img>
        <h2 className="Card-name">{this.props.name}</h2>
        <p className="Card-year">Год выпуска: {this.props.year}</p>
        <p className="Card-genre">Жанр: {this.props.genre}</p>
        <p className="Card-rating">
          Рейтинг: <span className="rate">{this.props.rating}</span>
        </p>
        <p className="Card-likesCount">
          <img className="like-img" src="img/like.png" alt="like"></img>
          <span className="like">{this.props.likesCount}</span>
        </p>
      </div>
    );
  }
}
