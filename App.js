import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

import Header from './components/Header';
import Table from './components/Table';
import Fixtures from './components/Fixtures';
import GoalsAssistsBody from './components/GoalsAssistsBody';

export default class App extends React.Component {

  render() {

    return (
      <MainView>
				<Header />
				<GoalsAssistsBody />
      </MainView>
    );
  }
}

const MainView = styled.View`
	background-color: rgb(255, 255, 255);
`;
