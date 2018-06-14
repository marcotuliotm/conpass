import React from 'react';
import { Container, MainLogo, H1 } from './Styles';
import logo from '../../images/logoConpass.png';


function Header() {
  return (
    <header>
      <Container>
        <MainLogo src={logo} /> <H1>conpass</H1>
      </Container>
    </header>
  );
}

export default Header;
