import * as React from 'react';
import { IModalWinProps } from '../../types';
import { IMG_URL } from '../../constants';
import CardImage from '../CardImage/CardImage';
import './ModalWindow.css';

class ModalWindow extends React.Component<IModalWinProps> {
  onClicWin(e: React.FormEvent) {
    e.stopPropagation();
  }

  render() {
    const { poster_path, title, overview, popularity, release_date, vote_average, vote_count } =
      this.props.data;
    const { onClickOverlay, onClick } = this.props;

    return (
      <div className="overlay" onClick={onClickOverlay}>
        <div className="user-modul-window" onClick={this.onClicWin}>
          <button className="close-window" onClick={onClick}></button>
          <p className="item-title">{title}</p>

          <div className="modul-content">
            <CardImage
              className="item-img"
              poster_path={poster_path}
              IMG_URL={IMG_URL}
              alt="Image"
            />
            <div className="modul-content-description">
              <p className="item-overview">
                <span className="bold">Описание:</span>
                {overview}
              </p>
              <p className="item-release">
                <span className="bold">Дата релиза:</span>
                {release_date}
              </p>
              <p className="item-popularity">
                <span className="bold">Популярность:</span>
                {popularity}
              </p>
              <div className="item-rating">
                <p className="item-average">{vote_average}</p>
                <p className="item-count">{vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
