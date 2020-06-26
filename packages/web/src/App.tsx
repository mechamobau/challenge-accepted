import React from 'react';

import { createGlobalStyle } from 'styled-components';
import Layout from './components/templates/Layout/Layout';
import Logo, { LogoEnum } from './components/atoms/Logo/Logo';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;  
  }

  html, body {
    padding: 0;
    background-color: #333
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout></Layout>
    </>
  );
}

export default App;
