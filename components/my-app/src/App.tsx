import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppRouts from './components/AppRouts/AppRouts';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppRouts />
      </div>
    );
  }
}

export default App;
