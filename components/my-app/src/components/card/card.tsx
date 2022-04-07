import * as React from 'react';
import { ICard } from '../../types';
import { IMG_URL } from '../../constants';

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    const { id, poster_path, title } = this.props;
    return (
      <div className="Card">
        <p className="Card-id">id:{id}</p>
        <img className="Card-img" src={`${IMG_URL}${poster_path}`} alt="Image cartoon"></img>
        <h2 className="Card-name">{title}</h2>
      </div>
    );
  }
}

export default Card;
