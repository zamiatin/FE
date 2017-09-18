import React from 'react';

//styles
import styles from './styles/header.scss';

//img
import logo from './img/logo.svg';

const Header = () => (
  <header>
    <a href="http://www.adyax.com">
      <img src={logo} alt="adyax" />
    </a>
    <p>
      A better experience
    </p>
  </header>
);

export default Header;