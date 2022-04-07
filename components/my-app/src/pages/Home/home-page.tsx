import * as React from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import { ICard, ICards } from '../../types';

class Home extends React.Component<Record<string, unknown>, ICards> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { data: [] };
    this.setDataFromApi = this.setDataFromApi.bind(this);
  }

  setDataFromApi(searchData: ICard[]) {
    console.log(searchData);
    this.setState({ data: searchData });
  }

  render() {
    return (
      <main>
        <h2 className="header-part">Сделай свой выбор!</h2>
        <Search userInput={''} setDataFromApi={this.setDataFromApi} />
        <Cards data={this.state.data} />
      </main>
    );
  }
}

export default Home;
