import * as React from 'react';
import { ICard } from '../../types';
import Card from '../Card/Card';

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
          <Card {...item} key={item.key} />
        ))}
      </div>
    );
  }
}

export default Cards;
