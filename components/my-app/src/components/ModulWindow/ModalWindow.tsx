import * as React from 'react';
import { IModalWinProps } from '../../types';
import { IMG_URL } from '../../constants';
import CardImage from '../CardImage/CardImage';
import './ModalWindow.css';

function ModalWindow({ data, onClickOverlay, onClick }: IModalWinProps) {
  function onClicWin(e: React.FormEvent) {
    e.stopPropagation();
  }

  return (
    <div className="overlay" onClick={onClickOverlay}>
      <div className="user-modul-window" onClick={onClicWin}>
        <button className="close-window" onClick={onClick}></button>
        <p className="item-title">{data.title}</p>

        <div className="modul-content">
          <CardImage
            className="item-img"
            poster_path={data.poster_path}
            IMG_URL={IMG_URL}
            alt="Image"
          />
          <div className="modul-content-description">
            <p className="item-overview">
              <span className="bold">Описание:</span>
              {data.overview}
            </p>
            <p className="item-release">
              <span className="bold">Дата релиза:</span>
              {data.release_date}
            </p>
            <p className="item-popularity">
              <span className="bold">Популярность:</span>
              {data.popularity}
            </p>
            <div className="item-rating">
              <p className="item-average">{data.vote_average}</p>
              <p className="item-count">{data.vote_count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
