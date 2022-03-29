import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home/home-page';
import AboutUs from './components/about/about';
import PageNotFound from './components/pageNotFound/page-not-found';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="App-logo" to="/">
            LOGO
          </Link>
          <Link className="App-link" to="/">
            Home
          </Link>
          <Link className="App-link" to="/about">
            About Us
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
