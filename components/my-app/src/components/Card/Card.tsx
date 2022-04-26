import * as React from 'react';
import { ICard } from '../../types';
import CardImage from '../CardImage/CardImage';
import { IMG_URL } from '../../constants';

function Card({ id, poster_path, title }: ICard) {
  return (
    <div className="Card">
      <p className="Card-id">id:{id}</p>
      <CardImage
        className="Card-img"
        poster_path={poster_path}
        IMG_URL={IMG_URL}
        alt="Image cartoon"
      />
      <h2 className="Card-name">{title}</h2>
    </div>
  );
}

export default Card;
