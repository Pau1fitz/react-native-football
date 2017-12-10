import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

class Table extends Component {

  render() {
		return (
			<ScrollView>
				<TableHeader />
				<TableBody />
			</ScrollView>
    );
  }
}

export default Table;
