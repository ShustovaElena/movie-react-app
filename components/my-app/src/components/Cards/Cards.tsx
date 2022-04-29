import React from 'react';
import { ICard, ICards } from '../../types';
import Card from '../Card/Card';
import { store } from '../../store';
import { setUserSelect } from '../../reducer';

function Cards({ data }: ICards) {
  function onClick(event: React.MouseEvent) {
    const card = (event.target as HTMLDivElement).parentElement;
    const id = Number(card?.firstChild?.textContent?.split(':').pop());
    const userSelect = data.find((item) => item.id === id);
    store.dispatch(setUserSelect(userSelect));
  }

  return (
    <div className="Cards" onClick={onClick}>
      {data.map((item: ICard) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
