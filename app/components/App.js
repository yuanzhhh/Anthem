import React from 'react';
import {connect} from 'react-redux';
import BaseCom from './BaseComponent';
import styled from 'styled-components';

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

export default connect()(App);