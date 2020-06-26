import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '@/components/molecules/Header/Header';

const Container = styled.main``;

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
