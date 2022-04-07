import * as React from 'react';
import { IModulWinProps } from '../../types';
import { IMG_URL } from '../../constants';
import './ModulWindow.css';

class ModulWindow extends React.Component<IModulWinProps> {
  constructor(props: IModulWinProps) {
    super(props);
  }

  onClicWin(e: React.FormEvent) {
    e.stopPropagation();
  }

  render() {
    const { poster_path, title, overview, popularity, release_date, vote_average, vote_count } =
      this.props.data;
    return (
      <div className="overlay" onClick={this.props.onClickOverlay}>
        <div className="user-modul-window" onClick={this.onClicWin}>
          <button className="close-window" onClick={this.props.onClick}></button>
          <p className="item-title">{title}</p>

          <div className="modul-content">
            <img
              className="item-img"
              src={poster_path ? `${IMG_URL}${poster_path}` : 'img/noneImg.png'}
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

export default ModulWindow;
