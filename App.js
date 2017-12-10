import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Table from './components/Table';
import Goals from './components/GoalsBody';
import Assists from './components/AssistsBody';
import Fixtures from './components/FixtureList';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Button
      onPress={() => navigation.navigate('Table')}
      title="Go to Table"
    />

		<Button
			onPress={() => navigation.navigate('Goals')}
			title="Go to Goals"
		/>

		<Button
			onPress={() => navigation.navigate('Assists')}
			title="Go to Assists"
		/>

  </View>
);


const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
    },
  },
  Table: {
    screen: Table,
		navigationOptions: {
      headerTitle: 'Table',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
    },
  },
	Goals: {
		screen: Goals,
		navigationOptions: {
      headerTitle: 'Goals',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
    },
	},

	Assists: {
		screen: Assists,
		navigationOptions: {
			headerTitle: 'Assists',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
		},
	},

	Fixtures: {
		screen: Fixtures,
		navigationOptions: {
			headerTitle: 'Fixtures',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
		},
	},
});

export default RootNavigator;
