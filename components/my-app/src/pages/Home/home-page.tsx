import * as React from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import data from '../../data';

class Home extends React.Component {
  render() {
    return (
      <main>
        <h2 className="header-part">Сделай свой выбор!</h2>
        <Search userInput={''} />
        <Cards data={data} />
      </main>
    );
  }
}

export default Home;
