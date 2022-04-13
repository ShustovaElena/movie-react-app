import React, { useState } from 'react';
import { ICard, ICards } from '../../types';
import Card from '../Card/Card';
import ModulWindow from '../ModulWindow/ModalWindow';

function Cards(props: ICards) {
  const initialStateVal: ICard = {
    id: 0,
    title: '',
    poster_path: '',
    overview: '',
    popularity: 0,
    release_date: '',
    vote_average: 0,
    vote_count: 0,
  };

  const [userSelect, setUserSelect] = useState(initialStateVal);
  const [isClosedModul, setIsClosedModul] = useState(false);

  async function onClick(event: React.MouseEvent) {
    const card = (event.target as HTMLDivElement).parentElement;
    const id = Number(card?.firstChild?.textContent?.split(':').pop());
    const userSelect = props.data.find((item) => item.id === id);
    await setUserSelect({
      id: userSelect?.id,
      title: userSelect?.title,
      poster_path: userSelect?.poster_path,
      overview: userSelect?.overview,
      popularity: userSelect?.popularity,
      release_date: userSelect?.release_date,
      vote_average: userSelect?.vote_average,
      vote_count: userSelect?.vote_count,
    });
    setIsClosedModul(true);
  }

  function onClickModul(e: React.FormEvent) {
    e.stopPropagation();
    setIsClosedModul(false);
  }

  function onClickOverlay(e: React.FormEvent) {
    e.preventDefault();
    setIsClosedModul(false);
  }

  return (
    <>
      <div className="Cards" onClick={onClick}>
        {props.data.map((item: ICard) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <div>
        {isClosedModul ? (
          <ModulWindow onClick={onClickModul} onClickOverlay={onClickOverlay} data={userSelect} />
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default Cards;
