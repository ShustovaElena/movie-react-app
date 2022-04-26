import * as React from 'react';
import { ICardImage } from '../../types';

function CardImage({ className, poster_path, IMG_URL, alt }: ICardImage) {
  return (
    <img
      className={className}
      src={poster_path ? `${IMG_URL}${poster_path}` : 'img/noneImg.png'}
      alt={alt}
    ></img>
  );
}

export default CardImage;
