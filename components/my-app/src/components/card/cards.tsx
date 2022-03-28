import * as React from 'react';
import ICard from '../../types';
import Card from './../card/card';

interface ICards {
  data: ICard[];
}

class Cards extends React.Component<ICards> {
  constructor(props: ICards) {
    super(props);
  }

  render() {
    return (
      <div className="Cards">
        {this.props.data.map((item: ICard) => (
          <Card
            key={item.key}
            src={item.src}
            name={item.name}
            year={item.year}
            genre={item.genre}
            rating={item.rating}
            likesCount={item.likesCount}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
