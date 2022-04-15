import * as React from 'react';
import { ICard } from '../../types';
import CardImage from '../CardImage/CardImage';
import { IMG_URL } from '../../constants';

class Card extends React.Component<ICard> {
  render() {
    const { id, poster_path, title } = this.props;
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
}

export default Card;
