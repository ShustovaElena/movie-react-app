import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home-page';
import AboutUs from './pages/about';
import PageNotFound from './pages/page-not-found';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
