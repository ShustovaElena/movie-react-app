import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Header;
