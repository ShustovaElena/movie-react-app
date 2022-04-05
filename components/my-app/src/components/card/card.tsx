import * as React from 'react';
import { ICard } from '../../types';

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    const { src, name, year, genre, rating, likesCount } = this.props;
    return (
      <div className="Card">
        <img className="Card-img" src={src} alt="Image cartoon"></img>
        <h2 className="Card-name">{name}</h2>
        <p className="Card-year">Год выпуска: {year}</p>
        <p className="Card-genre">Жанр: {genre}</p>
        <p className="Card-rating">
          Рейтинг: <span className="rate">{rating}</span>
        </p>
        <p className="Card-likesCount">
          <img className="like-img" src="img/like.png" alt="like"></img>
          <span className="like">{likesCount}</span>
        </p>
      </div>
    );
  }
}

export default Card;
