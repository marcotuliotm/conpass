import React from 'react';
import logo from 'images/logoClean.png';
import { Container, MainLogo } from './Styles';


function Header() {
  return (
    <header>
      <Container>
        <MainLogo src={logo} />
      </Container>
    </header>
  );
}

export default Header;
