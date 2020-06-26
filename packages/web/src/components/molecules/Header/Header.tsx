import React from 'react';
import styled from 'styled-components';
import UnstyledLogo, { LogoEnum } from '@/components/atoms/Logo/Logo';

const Container = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d67bd;
`;

const Logo = styled(UnstyledLogo)`
  max-width: 170px;
`;

const Header = () => {
  return (
    <Container>
      <Logo name={LogoEnum.LETTERMARK_WHITE} />
    </Container>
  );
};

export default Header;
