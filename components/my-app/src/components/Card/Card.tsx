import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../types';
import CardImage from '../CardImage/CardImage';
import { IMG_URL } from '../../constants';

function Card(props: ICard) {
  const { id, poster_path, title } = props;
  return (
    <div className="Card" data-testid="card">
      <Link className="App-link" to="film">
        <p className="Card-id">id:{id}</p>
        <CardImage
          className="Card-img"
          poster_path={poster_path}
          IMG_URL={IMG_URL}
          alt="Image cartoon"
        />
        <h2 className="Card-name">{title}</h2>
      </Link>
    </div>
  );
}

export default Card;
