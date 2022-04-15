import * as React from 'react';
import { ICard, ICards, IUserSelect } from '../../types';
import Card from '../Card/Card';
import ModulWindow from '../ModulWindow/ModalWindow';

class Cards extends React.Component<ICards, IUserSelect> {
  constructor(props: ICards) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClickModul = this.onClickModul.bind(this);
    this.onClickOverlay = this.onClickOverlay.bind(this);
    this.state = {
      userSelect: {
        id: 0,
        title: '',
        poster_path: '',
        overview: '',
        popularity: 0,
        release_date: '',
        vote_average: 0,
        vote_count: 0,
      },
      isClosedModul: false,
    };
  }

  async onClick(event: React.MouseEvent) {
    const card = (event.target as HTMLDivElement).parentElement;
    const id = Number(card?.firstChild?.textContent?.split(':').pop());
    const userSelect = this.props.data.find((item) => item.id === id);
    await this.setState({
      userSelect: {
        id: userSelect?.id,
        title: userSelect?.title,
        poster_path: userSelect?.poster_path,
        overview: userSelect?.overview,
        popularity: userSelect?.popularity,
        release_date: userSelect?.release_date,
        vote_average: userSelect?.vote_average,
        vote_count: userSelect?.vote_count,
      },
      isClosedModul: true,
    });
  }

  onClickModul(e: React.FormEvent) {
    this.setState({ isClosedModul: false });
    e.stopPropagation();
  }

  onClickOverlay(e: React.FormEvent) {
    this.setState({ isClosedModul: false });
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div className="Cards" onClick={this.onClick}>
          {this.props.data.map((item: ICard) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
        <div>
          {this.state.isClosedModul ? (
            <ModulWindow
              onClick={this.onClickModul}
              onClickOverlay={this.onClickOverlay}
              data={this.state.userSelect}
            />
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

export default Cards;
