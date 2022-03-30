import * as React from 'react';
import Cards from './../cards/cards';
import Search from './../search/search';
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
