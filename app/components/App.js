import React from 'react';
import BaseCom from './BaseComponent';
import ContainerApp from './App.style';
import Title from './titile/index';
import Content from './content/index';

class App extends BaseCom {
  constructor(props) {
    super(props);
  }
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