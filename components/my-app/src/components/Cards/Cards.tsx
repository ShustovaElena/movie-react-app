import React, { useState } from 'react';
import { initialStateVal } from '../../constants';
import { ICard, ICards } from '../../types';
import Card from '../Card/Card';
import ModulWindow from '../ModulWindow/ModalWindow';

function Cards({ data }: ICards) {
  const [userSelect, setUserSelect] = useState<ICard>(initialStateVal);
  const [isClosedModul, setIsClosedModul] = useState(false);

  function onClick(event: React.MouseEvent) {
    const card = (event.target as HTMLDivElement).parentElement;
    const id = Number(card?.firstChild?.textContent?.split(':').pop());
    const userSelect = data.find((item) => item.id === id);
    setUserSelect({
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
        {data.map((item: ICard) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <div>
        {isClosedModul && (
          <ModulWindow onClick={onClickModul} onClickOverlay={onClickOverlay} data={userSelect} />
        )}
      </div>
    </>
  );
}

export default Cards;
