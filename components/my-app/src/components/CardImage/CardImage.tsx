import * as React from 'react';
import { ICardImage } from '../../types';

class CardImage extends React.Component<ICardImage> {
  render() {
    const { className, poster_path, IMG_URL, alt } = this.props;
    return (
      <img
        className={className}
        src={poster_path ? `${IMG_URL}${poster_path}` : 'img/noneImg.png'}
        alt={alt}
      ></img>
    );
  }
}

export default CardImage;
