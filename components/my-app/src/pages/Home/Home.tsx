import * as React from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';
import { ICard, IHome } from '../../types';

class Home extends React.Component<Record<string, unknown>, IHome> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { data: [], isPressSearch: false };
    this.setDataFromApi = this.setDataFromApi.bind(this);
    this.pressSubmit = this.pressSubmit.bind(this);
    this.removeLoader = this.removeLoader.bind(this);
  }

  setDataFromApi(searchData: ICard[]) {
    this.setState({ data: searchData, isPressSearch: false });
  }

  pressSubmit() {
    this.setState({ isPressSearch: true });
  }

  removeLoader() {
    this.setState({ isPressSearch: false });
  }

  render() {
    return (
      <main>
        <h2 className="header-part">Сделай свой выбор!</h2>
        <Search
          userInput={''}
          setDataFromApi={this.setDataFromApi}
          pressSubmit={this.pressSubmit}
        />
        {this.state.isPressSearch ? (
          <Loader removeLoader={this.removeLoader} />
        ) : (
          <Cards data={this.state.data} />
        )}
      </main>
    );
  }
}

export default Home;
