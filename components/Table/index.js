import React, { Component } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

class Table extends Component {

  render() {
		return (
			<ScrollView contentContainerStyle={{flexGrow: 1}}>
				<TableHeader />
				<TableBody />
			</ScrollView>
    );
  }
}

const ContainerView = styled.ScrollView`
	flex-grow: 1;
`;

export default Table;
