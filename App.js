import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Table from './components/Table';
import Goals from './components/GoalsBody';
import Assists from './components/AssistsBody';
import Results from './components/Results';
import Fixtures from './components/FixtureList';
import HomeScreen from './components/HomeScreen';
import News from './components/News';

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

	Results: {
		screen: Results,
		navigationOptions: {
			headerTitle: 'Results',
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

	News: {
		screen: News,
		navigationOptions: {
			headerTitle: 'News',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
		},
	},
});

export default RootNavigator;
