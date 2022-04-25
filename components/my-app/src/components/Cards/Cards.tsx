import React, { useContext } from 'react';
import { ICard, ICards } from '../../types';
import Card from '../Card/Card';
import { AppContext } from '../../contexts';

function Cards(props: ICards) {
  const { dispatch } = useContext(AppContext);

  async function onClick(event: React.MouseEvent) {
    const card = (event.target as HTMLDivElement).parentElement;
    const id = Number(card?.firstChild?.textContent?.split(':').pop());
    const userSelect = props.data.find((item) => item.id === id);
    dispatch({ type: 'SET_USER_SELECT', payload: userSelect });
  }

  return (
    <>
      <div className="Cards" onClick={onClick}>
        {props.data.map((item: ICard) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Cards;
