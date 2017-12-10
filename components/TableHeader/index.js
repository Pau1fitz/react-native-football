import React, { Component } from 'react';
import styled from 'styled-components/native';
import { FlatList, Text, View } from 'react-native';
import { AppLoading, Font } from 'expo';

class TableHeader extends Component {

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

		if(!this.state.loaded) {
		 return <AppLoading />;
		}

		return (
			<StyledView>
				<TeamLogo/>
				<TeamText>Team</TeamText>
				<InfoText>PL</InfoText>
				<InfoText>W</InfoText>
				<InfoText>D</InfoText>
				<InfoText>L</InfoText>
				<InfoText>GD</InfoText>
				<InfoText>PTS</InfoText>
			</StyledView>
    );
  }
}

const StyledView = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: rgb(241, 241, 241);
	border-bottom-width: 1px;
	border-style: solid;
	padding: 2px;
`;

const InfoText = styled.Text`
  color: rgb(62, 69, 74);
	font-size: 12px;
	flex: 1;
	font-family: 'pt';
`;

const TeamText = styled.Text`
  color: rgb(62, 69, 74);
	font-size: 12px;
	flex: 5;
	font-family: 'pt';
`;

const TeamLogo = styled.Text`
	width: 20px;
	height: 20px;
	margin-right: 10px;
`;

export default TableHeader;
