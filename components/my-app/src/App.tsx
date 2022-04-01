import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home-page';
import AboutUs from './pages/About/about';
import Profile from './pages/Profile/profile';
import PageNotFound from './pages/NotFound/page-not-found';

class App extends React.Component {
  constructor(props: object) {
    super(props);
  }
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
          <Link className="App-link" to="/profile">
            My profile
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
