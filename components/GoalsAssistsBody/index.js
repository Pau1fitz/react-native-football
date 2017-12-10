import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from './images';
import { AppLoading, Font } from 'expo';
import { FlatList, Text, ScrollView, View, Image } from 'react-native';

class GoalsAssistsBody extends Component {

  state = {
    table: [],
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

  componentDidMount() {
    fetch('https://tadzkadijq.localtunnel.me/topscorers').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        table: res
      });
    }).catch(err => {
			console.log(err);
		});
  }

  render() {
		if(!this.state.loaded) {
			 return <AppLoading />;
		}

    return (
			<ContainerView>
        <FlatList
          data={
						this.state.table
					}
          renderItem={({item}) => {
						let logo = images[item.team] && images[item.team]["uri"] ? images[item.team]["uri"] : null;
						return (
							<StyledView key={item.name}>
								<TeamLogo source={logo} />
								<PlayerText>{item.player}</PlayerText>
								<InfoText>{item.goals}</InfoText>
								<InfoText>{item.team}</InfoText>
							</StyledView>
						)
						}
					}
					keyExtractor={(item, index) => index}
        />
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
	padding-bottom: 120px;
`;

const StyledView = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: rgb(241, 241, 241);
	border-bottom-width: 1px;
	border-style: solid;
	padding: 8px;
`;

const InfoText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'pt';
	flex: 1;
`;

const PlayerText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'pt';
	flex: 2;
`;

const TeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'pt';
	flex: 2;
`;

const TeamLogo = styled.Image`
  width: 20px;
	height: 20px;
	margin-right: 10px;
`;

export default GoalsAssistsBody;
