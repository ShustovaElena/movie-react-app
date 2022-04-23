import { Link } from 'react-router-dom';

function Header() {
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

export default Header;
