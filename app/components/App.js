import React from 'react';
import styled from 'styled-components';
import BaseCom from './BaseComponent';
import Title from './titile/index';
import Content from './content/index';

const ContainerApp = styled.div `
    max-width: 1024px;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

class App extends BaseCom {
  render() {
    return (
      <ContainerApp>
        <Title/>
        <Content/>
      </ContainerApp>
    );
  }
}

export default App;