import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { AppLoading, Font } from 'expo';

class Header extends Component {

	state = {
		loaded: false
	};

	componentWillMount() {
		this._loadAssetsAsync();
	}

	_loadAssetsAsync = async () => {
		await Font.loadAsync({
			pt: require('../../assets/fonts/pt.ttf'),
		});
		this.setState({ loaded: true });
	};

  render() {

		if(!this.state.loaded){
			return <AppLoading />;
		}

		return (
			<StyledHeader>
				<NavItem>TABLE</NavItem>
				<NavItem>FIXTURES</NavItem>
				<NavItem>SCORERS</NavItem>
				<NavItem>ASSISTS</NavItem>
			</StyledHeader>
    );
  }
}

const StyledHeader = styled.View`
	background: rgb(60, 0, 60);
	height: 40px;
	margin-top: 20px;
	flex-direction: row;
	justify-content: space-around;
`;

const NavItem = styled.Text`
	color: rgb(265, 265, 265);
	font-family: 'pt';
	margin-top: 8px;
	font-size: 16px;
`;

export default Header;
