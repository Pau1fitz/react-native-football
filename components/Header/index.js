import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

class Header extends Component {

  render() {

		return (
			<StyledHeader>
				<NavItem>TABLE</NavItem>
				<NavItem>FIXTURES</NavItem>
				<NavItem>SCORERS</NavItem>
				<NavItem>ASSISTS</NavItem>
				<NavItem>NEWS</NavItem>
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
	font-family: 'PT Sans';
	margin-top: 8px;
	font-size: 16px;
`;

export default Header;
