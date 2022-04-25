import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ICard } from '../../types';
import { IMG_URL } from '../../constants';
import CardImage from '../../components/CardImage/CardImage';
import './CardPage.css';
import { AppContext } from '../../contexts';

function CardPage(props: ICard) {
  const { state } = useContext(AppContext);
  const { poster_path, title, overview, popularity, release_date, vote_average, vote_count } =
    props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.userSelect.id) navigate('/');
  });

  return (
    <React.Fragment>
      <div className="bread-crumbs">
        <span>/</span>
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/">{state.userSelect.title}</Link>
      </div>
      <div className="user-modul-window">
        <Link className="App-link" to="/">
          <button className="close-window"></button>
        </Link>
        <p className="item-title">{title}</p>

        <div className="modul-content">
          <CardImage className="item-img" poster_path={poster_path} IMG_URL={IMG_URL} alt="Image" />
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
    </React.Fragment>
  );
}

export default CardPage;
