import * as React from 'react';
import ICard from '../../types';

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

export default Card;
